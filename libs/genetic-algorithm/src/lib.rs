//! A genetic algorithm library.
//!
//! Genetic algorithm (GA) contains evolutionary compnents:
//! * Selection : Sampling individual genomes with focus on higher fitness
//! * Crossover : Mixing two different genomes to get an approximate solution
//! * Mutation  : Discover new solutions from initial population
//!
//! Each components can be interacted with user-owned implementation from provided interface.
//! Providing default operations such as, Roulette Wheel selection, Uniform crossover and
//! Gaussian mutation in barebones application.
//!
//! Code examples can be viewed in the test module supplied in the source code.
//!
//! Rerefence code by [link](https://pwy.io/posts/learning-to-fly-pt1)
//!

use rand::{Rng, RngCore, seq::SliceRandom};
use std::ops::Index;

/// Chromosome represents the individual genes of a boid.
#[derive(Clone, Debug)]
pub struct Chromosome {
    genes: Vec<f32>,
}

impl Index<usize> for Chromosome {
    type Output = f32;

    fn index(&self, index: usize) -> &Self::Output {
        &self.genes[index]
    }
}

impl FromIterator<f32> for Chromosome {
    fn from_iter<T: IntoIterator<Item = f32>>(iter: T) -> Self {
        Self {
            genes: iter.into_iter().collect(),
        }
    }
}

impl IntoIterator for Chromosome {
    type Item = f32;
    type IntoIter = std::vec::IntoIter<Self::Item>;

    fn into_iter(self) -> Self::IntoIter {
        self.genes.into_iter()
    }
}

impl Chromosome {
    /// Returns the length of gene slice.
    pub fn len(&self) -> usize {
        self.genes.len()
    }
    /// Returns the iterator of gene slice.
    pub fn iter(&self) -> impl Iterator<Item = &f32> {
        self.genes.iter()
    }
    /// Returns the mutable iterator of gene slice.
    pub fn iter_mut(&mut self) -> impl Iterator<Item = &mut f32> {
        self.genes.iter_mut()
    }
}

/// Individual describes types that exists in the population.
pub trait Individual {
    // Rather use `create` to avoid confusion with struct's constructor naming convention, `new`
    fn create(chromosome: Chromosome) -> Self;
    fn fitness(&self) -> f32;
    fn chromosome(&self) -> &Chromosome;
}

// ---------------------------------------------------------------------------- //

/// SelectionMethod describes types used in selection stage of the genetic algorithm.
pub trait SelectionMethod {
    fn select<'a, I>(&self, rng: &mut dyn RngCore, population: &'a [I]) -> &'a I
    where
        I: Individual;
}

/// RouletteWheelSelection represents selection based on portion on circular wheel with fixed point.
pub struct RouletteWheelSelection;

impl SelectionMethod for RouletteWheelSelection {
    fn select<'a, I>(&self, rng: &mut dyn RngCore, population: &'a [I]) -> &'a I
    where
        I: Individual,
    {
        population
            .choose_weighted(rng, |indiv| indiv.fitness())
            .expect("got individual that doesn't exists")
    }
}

/// CrossoverMethod describes types used in crossover stage of the genetic algorithm.
pub trait CrossoverMethod {
    fn crossover(
        &self,
        rng: &mut dyn RngCore,
        parent_a: &Chromosome,
        parent_b: &Chromosome,
    ) -> Chromosome;
}

/// UniformCrossover represents crossover that returns new chromosome by selecting from both
/// parent with equal chance.
pub struct UniformCrossover;

impl CrossoverMethod for UniformCrossover {
    fn crossover(
        &self,
        rng: &mut dyn RngCore,
        parent_a: &Chromosome,
        parent_b: &Chromosome,
    ) -> Chromosome {
        assert_eq!(parent_a.len(), parent_b.len());

        parent_a
            .iter()
            .zip(parent_b.iter())
            .map(|(&a, &b)| if rng.gen_bool(0.5) { a } else { b })
            .collect()
    }
}

/// MutationMethod describes types used in mutation stage of the genetic algorithm.
pub trait MutationMethod {
    fn mutate(&self, rng: &mut dyn RngCore, child: &mut Chromosome);
}

/// GaussianMutation represents mutation with probability in modifying genes with magnitude.
pub struct GaussianMutation {
    chance: f32,    // Probability of change in gene by range [0, 1]
    magnitude: f32, // Magnitude of the change
}

impl GaussianMutation {
    pub fn new(chance: f32, magnitude: f32) -> Self {
        assert!(chance >= 0.0 && chance <= 1.0);
        Self { chance, magnitude }
    }
}

impl MutationMethod for GaussianMutation {
    fn mutate(&self, rng: &mut dyn RngCore, child: &mut Chromosome) {
        for gene in child.iter_mut() {
            let sign = if rng.gen_bool(0.5) { -1.0 } else { 1.0 };
            if rng.gen_bool(self.chance as f64) {
                *gene += self.magnitude * sign * rng.r#gen::<f32>();
            }
        }
    }
}

// ---------------------------------------------------------------------------- //

/// GaussianMutation represents wrapper for all evolutionary components as higher interface.
pub struct GeneticAlgorithm<S> {
    selection_method: S,
    crossover_method: Box<dyn CrossoverMethod>,
    mutation_method: Box<dyn MutationMethod>,
}

impl<S> GeneticAlgorithm<S>
where
    S: SelectionMethod,
{
    /// Creates a new genetic algorithm with specified evolutionary components.
    pub fn new(
        selection_method: S,
        crossover_method: impl CrossoverMethod + 'static,
        mutation_method: impl MutationMethod + 'static,
    ) -> Self {
        Self {
            selection_method,
            crossover_method: Box::new(crossover_method),
            mutation_method: Box::new(mutation_method),
        }
    }

    /// Takes initial population and retuns a genetically improved population for the next step in
    /// evolution.
    pub fn evolve<I>(&self, rng: &mut dyn RngCore, population: &[I]) -> (Vec<I>, Statistics)
    where
        I: Individual,
    {
        assert!(!population.is_empty());

        let new_population = (0..population.len())
            .map(|_| {
                let parent_a = self.selection_method.select(rng, population).chromosome();
                let parent_b = self.selection_method.select(rng, population).chromosome();
                let mut child = self.crossover_method.crossover(rng, parent_a, parent_b);
                self.mutation_method.mutate(rng, &mut child);
                I::create(child)
            })
            .collect();

        let stats = Statistics::new(population);
        (new_population, stats)
    }
}

// ---------------------------------------------------------------------------- //

#[derive(Debug)]
pub struct Statistics {
    pub min_fitness: f32,
    pub max_fitness: f32,
    pub avg_fitness: f32,
}

impl Statistics {
    fn new<I>(population: &[I]) -> Self
    where
        I: Individual,
    {
        assert!(!population.is_empty());

        let mut min_fitness = population[0].fitness();
        let mut max_fitness = min_fitness;
        let mut sum_fitness = 0.0;

        for individual in population {
            let fitness = individual.fitness();
            min_fitness = min_fitness.min(fitness);
            max_fitness = max_fitness.max(fitness);
            sum_fitness += fitness;
        }

        Self {
            min_fitness,
            max_fitness,
            avg_fitness: sum_fitness / (population.len() as f32),
        }
    }
}

// ---------------------------------------------------------------------------- //

#[cfg(test)]
mod test {
    use super::*;
    use rand::SeedableRng;
    use rand_chacha::ChaCha8Rng;
    use std::collections::BTreeMap;
    use std::iter::FromIterator;

    mod gaussian_mutation {
        use super::*;

        fn actual(chance: f32, magnitude: f32) -> Vec<f32> {
            let mut rng = ChaCha8Rng::from_seed(Default::default());
            // .into_iter().collect() converts Vec<f32> to any expected collection type as long as it implements the
            // FromIterator<f32> trait. Parameter &Chromosome works as type Chromosome implements the FromIterator<f32> trait.
            let mut child: Chromosome = vec![1.0, 2.0, 3.0, 4.0, 5.0].into_iter().collect();
            GaussianMutation::new(chance, magnitude).mutate(&mut rng, &mut child);
            child.into_iter().collect() // Non-primitive casts back to Vec<f32>, wow black magic?
        }

        mod given_zero_chance {
            use approx::assert_relative_eq;

            fn actual(magnitude: f32) -> Vec<f32> {
                // Simple abstraction of higher functions
                super::actual(0.0, magnitude)
            }

            mod and_zero_coefficient {
                use super::*;
                #[test]
                fn does_not_change_the_original_chromosome() {
                    let actual = actual(0.0);
                    let expected = vec![1.0, 2.0, 3.0, 4.0, 5.0];
                    assert_relative_eq!(actual.as_slice(), expected.as_slice());
                }
            }

            mod and_nonzero_coefficient {
                use super::*;
                #[test]
                fn does_not_change_the_original_chromosome() {
                    let actual = actual(1.0);
                    let expected = vec![1.0, 2.0, 3.0, 4.0, 5.0];
                    assert_relative_eq!(actual.as_slice(), expected.as_slice());
                }
            }
        }

        mod given_fifty_fifty_chance {
            use approx::assert_relative_eq;

            fn actual(magnitude: f32) -> Vec<f32> {
                // Simple abstraction of higher functions
                super::actual(0.5, magnitude)
            }

            mod and_zero_coefficient {
                use super::*;
                #[test]
                fn does_not_change_the_original_chromosome() {
                    let actual = actual(0.0);
                    let expected = vec![1.0, 2.0, 3.0, 4.0, 5.0];
                    assert_relative_eq!(actual.as_slice(), expected.as_slice());
                }
            }

            mod and_nonzero_coefficient {
                use super::*;
                #[test]
                fn slightly_changes_the_original_chromosome() {
                    let actual = actual(1.0);
                    let expected = vec![1.0, 1.5512497, 3.0, 4.319361, 5.0];
                    assert_relative_eq!(actual.as_slice(), expected.as_slice());
                }
            }
        }

        mod given_max_chance {
            use approx::assert_relative_eq;

            fn actual(magnitude: f32) -> Vec<f32> {
                // Simple abstraction of higher functions
                super::actual(1.0, magnitude)
            }

            mod and_zero_coefficient {
                use super::*;
                #[test]
                fn does_not_change_the_original_chromosome() {
                    let actual = actual(0.0);
                    let expected = vec![1.0, 2.0, 3.0, 4.0, 5.0];
                    assert_relative_eq!(actual.as_slice(), expected.as_slice());
                }
            }

            mod and_nonzero_coefficient {
                use super::*;
                #[test]
                fn entirely_changes_the_original_chromosome() {
                    let actual = actual(1.0);
                    let expected = vec![1.9090631, 2.2324157, 2.5512497, 3.901025, 4.2773824];
                    assert_relative_eq!(actual.as_slice(), expected.as_slice());
                }
            }
        }
    }

    #[test]
    fn uniform_crossover() {
        let mut rng = ChaCha8Rng::from_seed(Default::default());

        let parent_a = (1..=100).map(|x| x as f32).collect();
        let parent_b = (1..=100).map(|x| -x as f32).collect();
        let child = UniformCrossover.crossover(&mut rng, &parent_a, &parent_b);

        let dif_a = child.iter().zip(parent_a).filter(|(c, p)| *c != p).count();
        let dif_b = child.iter().zip(parent_b).filter(|(c, p)| *c != p).count();
        assert_eq!(dif_a, 49);
        assert_eq!(dif_b, 51);
    }

    #[derive(Debug)]
    struct TestFitness {
        fitness: f32,
    }

    impl TestFitness {
        fn new(fitness: f32) -> Self {
            Self { fitness }
        }
    }

    impl Individual for TestFitness {
        fn create(chromosome: Chromosome) -> Self {
            todo!()
        }
        fn fitness(&self) -> f32 {
            self.fitness // igroring calculation for mock objects
        }
        fn chromosome(&self) -> &Chromosome {
            panic!("not supported")
        }
    }

    #[test]
    fn roulette_parent_selection() {
        let mut rng = ChaCha8Rng::from_seed(Default::default());
        let population = vec![
            TestFitness::new(2.0),
            TestFitness::new(1.0),
            TestFitness::new(4.0),
            TestFitness::new(3.0),
        ];
        let mut actual_histogram = BTreeMap::new();
        for _ in 0..1000 {
            let actual = RouletteWheelSelection
                .select(&mut rng, &population)
                .fitness() as i32;
            *actual_histogram.entry(actual).or_insert(0) += 1;
        }

        let expected_histogram = BTreeMap::from_iter([
            // (fitness, how many times this fitness has been chosen)
            (1, 98),
            (2, 202),
            (3, 278),
            (4, 422),
        ]);

        assert_eq!(actual_histogram, expected_histogram);
    }

    mod genetic_algorithm_evolve {
        use super::*;
        use approx::{assert_relative_eq, relative_eq};

        impl PartialEq for Chromosome {
            fn eq(&self, other: &Self) -> bool {
                relative_eq!(self.genes.as_slice(), other.genes.as_slice())
            }
        }

        #[derive(Debug, Clone, PartialEq)]
        enum TestIndividual {
            WithChromosome { chromosome: Chromosome },
            WithFitness { fitness: f32 },
        }

        impl TestIndividual {
            fn new(fitness: f32) -> Self {
                Self::WithFitness { fitness }
            }
        }

        impl Individual for TestIndividual {
            fn create(chromosome: Chromosome) -> Self {
                Self::WithChromosome { chromosome }
            }
            fn chromosome(&self) -> &Chromosome {
                match self {
                    Self::WithChromosome { chromosome } => chromosome,
                    Self::WithFitness { .. } => {
                        panic!(
                            "convertion of fitness to chromosome is not supported; TestIndividual::WithFitness"
                        )
                    }
                }
            }
            fn fitness(&self) -> f32 {
                match self {
                    // Sums all chromosomes together as the fitness function
                    Self::WithChromosome { chromosome } => chromosome.iter().sum(),
                    Self::WithFitness { fitness } => *fitness,
                }
            }
        }

        fn individual(genes: &[f32]) -> TestIndividual {
            // As the iterator has values &f32 which is not implemented in FromIterator<&_>,
            // we clone the value to f32 for FromIterator<f32> to work.
            TestIndividual::create(genes.iter().cloned().collect())
        }

        #[test]
        fn genetic_algorithm() {
            let steps: i32 = 10;
            let mut rng = ChaCha8Rng::from_seed(Default::default());
            let ga = GeneticAlgorithm::new(
                RouletteWheelSelection,
                UniformCrossover,
                GaussianMutation::new(0.5, 0.5),
            );
            let mut population = vec![
                individual(&[0.0, 0.0, 0.0]),
                individual(&[1.0, 1.0, 1.0]),
                individual(&[1.0, 2.0, 1.0]),
                individual(&[1.0, 2.0, 4.0]),
            ];
            let mut stats = Statistics::new(&population);

            for _ in 0..steps {
                (population, stats) = ga.evolve(&mut rng, &population);
            }

            let expected_population = vec![
                individual(&[0.44769490, 2.0648358, 4.3058133]),
                individual(&[1.21268670, 1.5538777, 2.8869110]),
                individual(&[1.06176780, 2.2657390, 4.4287640]),
                individual(&[0.95909685, 2.4618788, 4.0247330]),
            ];

            dbg!(&population);

            assert_eq!(population, expected_population);
        }
    }
}
