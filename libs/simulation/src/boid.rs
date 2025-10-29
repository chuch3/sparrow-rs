use crate::*;

#[derive(Debug)]
pub struct Boid {
    pub(crate) coherence: na::base::Vector1<f32>,
}

impl Boid {
    pub fn random(rng: &mut dyn RngCore) -> Self {
        todo!();
    }
    pub fn calc_coherence(&self) -> na::Vector1<f32> {}
}
