use crate::*;

const MAX_INERTIA: f32 = 0.4;
const MIN_INERTIA: f32 = 0.7;
const SOCIAL_COEF: f32 = 1.5;
const COGNITIVE_COEF: f32 = 1.5;

pub struct Swarm;

impl Swarm {
    pub fn calc_inertia(max_fitness: f32, fitness_std: f32) -> f32 {
        // Fitness-adaptive inertia,
        // * Higher diversity in fitness induce less inertia (exploitation)
        // * Lower diversity in fitness induce more inertia (exploration)

        // Add a low constant at denominator to prevent undefined numbers
        if max_fitness == 0.0 {
            let max_fitness = max_fitness + 1.0;
        }
        MAX_INERTIA - (fitness_std / max_fitness) * (MAX_INERTIA - MIN_INERTIA)
    }

    pub fn calc_social(
        rng: &mut dyn RngCore,
        global_best: na::Point2<f32>,
        current: na::Point2<f32>,
    ) -> na::Point2<f32> {
        let random_num = rng.gen_range(-1.0..=1.0);
        na::Point2::from(SOCIAL_COEF * random_num * current.coords)
    }

    pub fn calc_cognition(
        rng: &mut dyn RngCore,
        best_position: na::Point2<f32>,
        current: na::Point2<f32>,
    ) -> na::Point2<f32> {
        let random_num = rng.gen_range(-1.0..=1.0);
        na::Point2::from(COGNITIVE_COEF * random_num * (best_position.coords - current.coords))
    }
}
