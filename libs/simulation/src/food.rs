use crate::*;

//const RASTRIGIN_RANGE: f32 = 5.12;

/*
pub fn rastrigin(pos: na::geometry::Point2<f32>) -> f32 {
    let x = pos.x;
    let y = pos.y;
    let a = 10.0;
    a * 2.0
        + (x.powi(2) - a * (2.0 * std::f32::consts::PI * x).cos())
        + (y.powi(2) - a * (2.0 * std::f32::consts::PI * y).cos())
}
*/

#[derive(Debug)]
pub struct Food {
    pub(crate) position: na::geometry::Point2<f32>,
    //pub(crate) value: f32,
}

impl Food {
    pub fn random(rng: &mut dyn RngCore) -> Self {
        Self {
            position: rng.r#gen(),
        }
    }
    /*
    pub fn new(rng: &mut dyn RngCore) -> food::Food {
        let pos = na::geometry::Point2::new(
            rng.gen_range(-RASTRIGIN_RANGE..RASTRIGIN_RANGE),
            rng.gen_range(-RASTRIGIN_RANGE..RASTRIGIN_RANGE),
        );
        let ras = rastrigin(pos);
        let food_value = 1.0 / (1.0 + ras);
        Self {
            position: pos,
            value: food_value,
        }
    }
    pub fn rastrigin_random(food: &mut Food, rng: &mut dyn RngCore) {
        let pos = na::geometry::Point2::new(
            rng.gen_range(-RASTRIGIN_RANGE..RASTRIGIN_RANGE),
            rng.gen_range(-RASTRIGIN_RANGE..RASTRIGIN_RANGE),
        );
        let ras = rastrigin(pos);
        let food_value = 1.0 / (1.0 + ras);
        food.position = pos;
        food.value = food_value;
    }
    pub fn value(&self) -> f32 {
        self.value
    }
    */

    pub fn position(&self) -> na::Point2<f32> {
        self.position
    }
}
