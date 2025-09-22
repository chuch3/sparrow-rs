use crate::*;

#[derive(Debug)]
pub struct World {
    pub(crate) animals: Vec<Animal>,
    pub(crate) foods: Vec<Food>,
}

impl World {
    pub fn random(rng: &mut dyn RngCore) -> Self {
        let config = WorldConfig::default();
        let animals = (0..config.num_animals).map(|_| Animal::random(rng)).collect();
        let foods = (0..config.num_foods).map(|_| Food::random(rng)).collect();
        Self { animals, foods }
    }
    pub fn animals(&self) -> &[Animal] {
        &self.animals
    }
    pub fn foods(&self) -> &[Food] {
        &self.foods
    }
}
