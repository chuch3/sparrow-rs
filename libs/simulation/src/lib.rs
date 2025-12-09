use nalgebra::{self as na};
use rand::{Rng, RngCore};
use std::f32::consts::FRAC_PI_4;

mod animal;
mod animal_individual;
mod brain;
mod config;
mod eye;
mod food;
mod swarm;
mod world;

pub use self::{
    animal::*, animal_individual::*, brain::*, config::*, eye::*, food::*, swarm::*, world::*,
};

use lib_genetic_algorithm as ga;
use lib_neural_network as nn;

pub struct Simulation {
    world: World,
    ga: ga::GeneticAlgorithm<ga::RouletteWheelSelection>,
    age: usize,
    global_best_fitness: f32,
    global_best_position: na::Point2<f32>,
    max_fitness: f32,
    fitness_std: f32,
    max_position: na::Point2<f32>,
    config: SimulationConfig,
}

impl Simulation {
    pub fn random(rng: &mut dyn RngCore, settings: Config) -> Self {
        let config = settings.simulation;
        let world = World::random(rng, settings);
        let ga = ga::GeneticAlgorithm::new(
            ga::RouletteWheelSelection,
            ga::UniformCrossover,
            ga::GaussianMutation::new(config.mutation_chance, config.mutation_weight),
        );

        Self {
            world,
            ga,
            age: 0,
            global_best_fitness: 0.0,
            global_best_position: na::Point2::from([0.0, 0.0]),
            max_fitness: 0.001, // Avoiding division by zero in inertia calculation
            fitness_std: 0.001,
            max_position: na::Point2::from([0.0, 0.0]),
            config,
        }
    }

    pub fn world(&self) -> &World {
        &self.world
    }

    pub fn step(&mut self, rng: &mut dyn RngCore, settings: Config) -> Option<ga::Statistics> {
        self.calc_movement();
        self.calc_brain();
        self.calc_collision(rng);
        self.age += 1;
        if self.age > self.config.max_generation {
            Some(self.evolve(rng, settings))
        } else {
            None
        }
    }

    pub fn fast_forward(&mut self, rng: &mut dyn RngCore, settings: Config) -> ga::Statistics {
        loop {
            if let Some(summary) = self.step(rng, settings) {
                return summary;
            }
        }
    }

    fn evolve(&mut self, rng: &mut dyn RngCore, settings: Config) -> ga::Statistics {
        self.age = 0;

        // Gather the current population.
        let current_population: Vec<AnimalIndividual> = self
            .world
            .animals
            .iter()
            .map(AnimalIndividual::from_animal)
            .collect();

        // Evolve the current population with genetic algorithms.
        let (new_population, stats) = self.ga.evolve(rng, &current_population);

        self.max_position = self.world.animals[stats.best_index].position();
        self.max_fitness = stats.max_fitness;
        self.fitness_std = stats.fitness_std;

        if self.max_fitness > self.global_best_fitness {
            self.global_best_fitness = self.max_fitness;
            self.global_best_position = self.max_position;
        }

        // Create our evolved population into the ecosystem.
        self.world.animals = new_population
            .into_iter()
            .map(|individual| individual.into_animal(rng, settings))
            .collect();

        // Randomizing food after each evolution to be easily recognizable.
        for food in &mut self.world.foods {
            food.position = rng.r#gen();
        }

        stats
    }

    fn calc_brain(&mut self) {
        for animal in &mut self.world.animals {
            let speed_accel = self.config.speed_accel;
            let rotation_accel = self.config.rotation_accel;
            let speed_min = self.config.speed_min;
            let speed_max = self.config.speed_max;

            let vision =
                animal
                    .eye
                    .calc_vision(animal.position, animal.rotation, &self.world.foods);

            let output = animal.brain.nn.propagate(vision);
            let speed = output[0].clamp(-speed_accel, speed_accel);
            let angle = output[1].clamp(-rotation_accel, rotation_accel);

            animal.speed = (animal.speed + speed).clamp(speed_min, speed_max);
            animal.rotation = na::Rotation2::new(animal.rotation.angle() + angle);
        }
    }

    fn calc_movement(&mut self) {
        let mut updates: Vec<na::Vector2<f32>> = Vec::new();
        let coherence_weight = 0.1;
        let separation_weight = 0.55;
        let alignment_weight = 0.1;

        // Computing boid algorithm movement separately, following some reddit comment
        // (should really reference it huh)
        for animal in &self.world.animals {
            let coherence = self.world.calc_coherence(&animal);
            let separation = self.world.calc_separation(&animal);
            let alignment = self.world.calc_alignment(&animal);

            // We dont' want the animal to teleport to the flock center, etc.
            // So we convert it to a direction vector for the animal to go towards it.
            let delta = coherence.coords * coherence_weight
                + separation.coords * separation_weight
                + alignment.coords * alignment_weight;
            updates.push(delta)
        }

        for (animal, delta) in self.world.animals.iter_mut().zip(updates) {
            /*
            let inertia = Swarm::calc_inertia(self.max_fitness, self.fitness_std);
            let cognition = Swarm::calc_cognition(rng, self.max_position, animal.position());
            let social = Swarm::calc_social(rng, self.global_best_position, animal.position());
            */

            // Scales speed relative with y-axis as the boids points upward
            // when there is no rotation.
            let mut velocity = delta + (animal.rotation * na::Vector2::new(0.0, animal.speed));

            if velocity.magnitude() > animal.speed() {
                velocity = velocity.normalize() * animal.speed();
            }
            animal.position += velocity;
            animal.position.x = na::wrap(animal.position.x, 0.0, 1.0);
            animal.position.y = na::wrap(animal.position.y, 0.0, 1.0);
        }
    }

    fn calc_collision(&mut self, rng: &mut dyn RngCore) {
        for animal in &mut self.world.animals {
            // Brute force implementation
            for food in &mut self.world.foods {
                let distance = na::distance(&animal.position, &food.position);
                if distance <= 0.01 {
                    animal.hunger += 1;
                    food.position = rng.r#gen();
                }
            }
        }
    }
}
