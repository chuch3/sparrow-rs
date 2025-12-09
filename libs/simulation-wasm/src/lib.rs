/*
* Proxy design pattern module used to interface with Rust workspace
*/

use lib_simulation::{self as sim, Config};
use rand::prelude::*;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct SimulationWasm {
    rng: ThreadRng,
    sim: sim::Simulation,
    settings: Config,
}

#[wasm_bindgen]
impl SimulationWasm {
    #[wasm_bindgen(constructor)]
    pub fn new(config_contents: &str) -> Self {
        let mut rng = thread_rng();
        let settings = Config::parse_config(config_contents);
        let sim = sim::Simulation::random(&mut rng, settings);

        Self { rng, sim, settings }
    }

    pub fn world(&self) -> WorldWasm {
        WorldWasm::from(self.sim.world())
    }

    pub fn step(&mut self) {
        self.sim.step(&mut self.rng, self.settings);
    }

    pub fn fast_forward(&mut self) -> String {
        let stats = self.sim.fast_forward(&mut self.rng, self.settings);
        format!(
            "Fitness : min {:.4}, max {:.4}, average {:4}, std {:4}",
            stats.min_fitness, stats.max_fitness, stats.avg_fitness, stats.fitness_std
        )
    }
}

#[wasm_bindgen]
#[derive(Clone, Debug)]
pub struct WorldWasm {
    #[wasm_bindgen(getter_with_clone)]
    pub animals: Vec<AnimalWasm>,

    #[wasm_bindgen(getter_with_clone)]
    pub foods: Vec<FoodWasm>,
}

#[wasm_bindgen]
#[derive(Clone, Debug)]
pub struct AnimalWasm {
    pub x: f32,
    pub y: f32,
    pub angle: f32,
}

#[wasm_bindgen]
#[derive(Clone, Debug)]
pub struct FoodWasm {
    pub x: f32,
    pub y: f32,
}

// Converting library types into proxy interface with wasm-bindgen
impl From<&sim::World> for WorldWasm {
    fn from(world: &sim::World) -> Self {
        let animals = world.animals().iter().map(AnimalWasm::from).collect();
        let foods = world.foods().iter().map(FoodWasm::from).collect();
        Self { animals, foods }
    }
}

impl From<&sim::Animal> for AnimalWasm {
    fn from(animal: &sim::Animal) -> Self {
        Self {
            x: animal.position().x,
            y: animal.position().y,
            angle: animal.rotation().angle(),
        }
    }
}

impl From<&sim::Food> for FoodWasm {
    fn from(food: &sim::Food) -> Self {
        Self {
            x: food.position().x,
            y: food.position().y,
        }
    }
}
