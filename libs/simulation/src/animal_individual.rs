use crate::*;

pub struct AnimalIndividual {
    fitness: f32,
    chromosome: ga::Chromosome,
}

impl AnimalIndividual {
    pub fn from_animal(animal: &Animal) -> Self {
        Self {
            fitness: animal.hunger as f32,
            chromosome: animal.brain.as_chromosome(),
        }
    }
    
    pub fn into_animal(self, rng: &mut dyn RngCore) -> Animal {
        Animal::from_chromosome(rng, self.chromosome)
    }

}

impl ga::Individual for AnimalIndividual {
    fn create(chromosome: ga::Chromosome) -> Self {
        Self {
            fitness: 0.0,
            chromosome,
        }
    }
    fn fitness(&self) -> f32 {
        self.fitness
    }
    fn chromosome(&self) -> &ga::Chromosome {
        &self.chromosome
    }
}
