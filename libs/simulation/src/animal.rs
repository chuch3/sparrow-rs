use crate::*;

#[derive(Debug)]
pub struct Animal {
    pub(crate) eye: Eye,
    pub(crate) brain: Brain,
    pub(crate) position: na::geometry::Point2<f32>,
    pub(crate) rotation: na::geometry::Rotation2<f32>,
    pub(crate) speed: f32,
    pub(crate) hunger: usize,
}

impl Animal {
    pub fn random(rng: &mut dyn RngCore) -> Self {
        let eye = Eye::default();
        let brain = Brain::random(rng, &eye);
        Self::new(rng, eye, brain)
    }

    fn new(rng: &mut dyn RngCore, eye: Eye, brain: Brain) -> Self {
        let config = AnimalConfig::default();
        Self {
            eye,
            brain,
            position: rng.r#gen(),
            rotation: rng.r#gen(),
            speed: config.speed,
            hunger: 0,
        }
    }

    pub(crate) fn as_chromosome(&self) -> ga::Chromosome {
        self.brain.as_chromosome()
    }

    pub(crate) fn from_chromosome(rng: &mut dyn RngCore, chromosome: ga::Chromosome) -> Self {
        let eye = Eye::default();
        let brain = Brain::from_chromosome(chromosome, &eye);
        Self::new(rng, eye, brain)
    }

    pub fn position(&self) -> na::Point2<f32> {
        self.position
    }

    pub fn rotation(&self) -> na::Rotation2<f32> {
        self.rotation
    }

    pub fn speed(&self) -> f32 {
        self.speed
    }
}
