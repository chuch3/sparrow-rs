use crate::*;

#[derive(Debug)]
pub struct World {
    pub(crate) animals: Vec<Animal>,
    pub(crate) foods: Vec<Food>,
    pub(crate) config: WorldConfig,
}

impl World {
    pub fn random(rng: &mut dyn RngCore, settings: Config) -> Self {
        let config = settings.world;
        let animals = (0..config.num_animals)
            .map(|_| Animal::random(rng, settings))
            .collect();
        let foods = (0..config.num_foods).map(|_| Food::random(rng)).collect();
        Self {
            animals,
            foods,
            config,
        }
    }
    pub fn animals(&self) -> &[Animal] {
        &self.animals
    }
    pub fn foods(&self) -> &[Food] {
        &self.foods
    }
}
