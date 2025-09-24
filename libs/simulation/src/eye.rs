use crate::*;

use std::{f32::consts::PI, usize};

#[derive(Debug)]
pub struct Eye {
    fov_range: f32,
    fov_angle: f32,
    cells: usize,
}

impl Eye {
    pub fn config_new(settings: Config) -> Self {
        let config = settings.eye;
        Self::new(&config.fov_range, &config.fov_angle, &config.cells)
    }
    pub fn new(fov_range: &f32, fov_angle: &f32, cells: &usize) -> Self {
        assert!(*fov_range > 0.0);
        assert!(*fov_angle > 0.0);
        assert!(*cells > 0);

        Self {
            fov_range: *fov_range,
            fov_angle: *fov_angle,
            cells: *cells,
        }
    }

    pub fn cells(&self) -> usize {
        self.cells
    }

    pub fn calc_vision(
        &self,
        position: na::Point2<f32>,
        rotation: na::Rotation2<f32>,
        foods: &[Food],
    ) -> Vec<f32> {
        let mut cells = vec![0.0; self.cells];

        for food in foods {
            let vec = food.position() - position;
            let distance = vec.norm();
            if distance >= self.fov_range {
                continue; // Out of range
            }

            // Gets angle of food relative to y-axis.
            let angle = na::Rotation2::rotation_between(&na::Vector2::y(), &vec).angle();
            let angle = angle - rotation.angle(); // Applying relative to boid's rotation.
            let angle = na::wrap(angle, -PI, PI); // TODO: Try to remove this.
            if angle < -self.fov_angle / 2.0 || angle > self.fov_angle / 2.0 {
                continue;
            }

            // Makes angle relative to boids's fov by transforming <-FOV_ANGLE/2, FOV_ANGLE/2> to
            // <0, FOV_ANGLE>. Ex: [-PI, PI] adds fov angle of 2 * PI has [0, 2*PI]
            let angle = angle + self.fov_angle / 2.0;

            // Normalizing from <0, FOV_ANGLE> to <0, 1> as cell's perception.
            let cell_angle = angle / self.fov_angle;

            // As the cell's value represents the percentage of FOV_ANGLE, multiplying by total
            // cell count can represent our index.
            let cell_idx = cell_angle * (self.cells as f32);

            // Converting back to usize (removing decimal). If the cell shows full angle (1.0) which indexes at
            // cells.len() (out-of-range), we limit to cells.len() - 1.
            let cell_idx = (cell_idx as usize).min(cells.len() - 1);

            // Inverse proportional distance over FOV's range as cell's energy
            let energy = (self.fov_range - distance) / self.fov_range;
            cells[cell_idx] += energy;
        }
        cells
    }
}

impl Default for Eye {
    fn default() -> Self {
        let config = EyeConfig::default();
        Self::new(&config.fov_range, &config.fov_angle, &config.cells)
    }
}

#[cfg(test)]
mod test {
    use std::f32::consts::FRAC_PI_2;

    use super::*;
    use test_case::test_case;

    const TEST_EYE_CELLS: usize = 13;

    struct TestCase {
        foods: Vec<Food>,
        x: f32,
        y: f32,
        fov_range: f32,
        fov_angle: f32,
        rotation: f32,
        expected_vision: &'static str,
    }

    fn food(x: f32, y: f32) -> Food {
        Food {
            position: na::Point2::new(x, y),
        }
    }

    impl TestCase {
        fn run(&self) {
            let eye = Eye::new(&self.fov_range, &self.fov_angle, &TEST_EYE_CELLS);

            let actual_vision = eye.calc_vision(
                na::Point2::new(self.x, self.y),
                na::Rotation2::new(self.rotation),
                &self.foods,
            );

            let actual_vision: Vec<&'static str> = actual_vision
                .into_iter()
                .map(|cell| {
                    if cell >= 0.7 {
                        "#"
                    } else if cell >= 0.3 {
                        "+"
                    } else if cell > 0.0 {
                        "."
                    } else {
                        " "
                    }
                })
                .collect();
            let actual_vision = actual_vision.join("");
            assert_eq!(actual_vision, self.expected_vision);
        }
    }

    #[test_case(0.00 * PI, "         +   ")] // Food is to our right
    #[test_case(0.25 * PI, "        +    ")]
    #[test_case(0.50 * PI, "      +      ")] // Food is in front of us
    #[test_case(0.75 * PI, "    +        ")]
    #[test_case(1.00 * PI, "   +         ")] // Food is to our left
    #[test_case(1.25 * PI, " +           ")]
    #[test_case(1.50 * PI, "            +")] // Food is behind us
    #[test_case(1.75 * PI, "           + ")] // (we continue to see it
    #[test_case(2.00 * PI, "         +   ")] // due to 360° fov_angle.)
    #[test_case(2.25 * PI, "        +    ")]
    #[test_case(2.50 * PI, "      +      ")]
    fn test_rotation(rotation: f32, expected_vision: &'static str) {
        TestCase {
            foods: vec![food(0.0, 0.5)],
            x: 0.5,
            y: 0.5,
            fov_range: 1.0,
            fov_angle: 2.0 * PI,
            rotation: rotation,
            expected_vision: expected_vision,
        }
        .run()
    }

    // Checking the X axis:
    // (you can see the bird is "flying away" from the foods)
    #[test_case(0.9, 0.5, "#           #")]
    #[test_case(0.8, 0.5, "  #       #  ")]
    #[test_case(0.7, 0.5, "   +     +   ")]
    #[test_case(0.6, 0.5, "    +   +    ")]
    #[test_case(0.5, 0.5, "    +   +    ")]
    #[test_case(0.4, 0.5, "     + +     ")]
    #[test_case(0.3, 0.5, "     . .     ")]
    #[test_case(0.2, 0.5, "     . .     ")]
    #[test_case(0.1, 0.5, "     . .     ")]
    #[test_case(0.0, 0.5, "             ")]
    // Checking the Y axis:
    // (you can see the bird is "flying alongside" the foods)
    #[test_case(0.5, 0.0, "            +")]
    #[test_case(0.5, 0.1, "          + .")]
    #[test_case(0.5, 0.2, "         +  +")]
    #[test_case(0.5, 0.3, "        + +  ")]
    #[test_case(0.5, 0.4, "      +  +   ")]
    #[test_case(0.5, 0.6, "   +  +      ")]
    #[test_case(0.5, 0.7, "  + +        ")]
    #[test_case(0.5, 0.8, "+  +         ")]
    #[test_case(0.5, 0.9, ". +          ")]
    #[test_case(0.5, 1.0, "+            ")]
    fn test_position(x: f32, y: f32, expected_vision: &'static str) {
        TestCase {
            foods: vec![food(1.0, 0.4), food(1.0, 0.6)],
            x,
            y,
            fov_range: 1.0,
            fov_angle: FRAC_PI_2,
            rotation: 3.0 * FRAC_PI_2,
            expected_vision: expected_vision,
        }
        .run()
    }

    #[test_case(1.0, "      +      ")] // Food is inside the FOV
    #[test_case(0.9, "      +      ")] // ditto
    #[test_case(0.8, "      +      ")] // ditto
    #[test_case(0.7, "      .      ")] // Food slowly disappears
    #[test_case(0.6, "      .      ")] // ditto
    #[test_case(0.5, "             ")] // Food disappeared!
    #[test_case(0.4, "             ")]
    #[test_case(0.3, "             ")]
    #[test_case(0.2, "             ")]
    #[test_case(0.1, "             ")]
    fn test_fov_range(fov_range: f32, expected_vision: &'static str) {
        TestCase {
            foods: vec![food(0.5, 1.0)],
            x: 0.5,
            y: 0.5,
            rotation: 0.0,
            fov_angle: FRAC_PI_2,
            fov_range: fov_range,
            expected_vision: expected_vision,
        }
        .run()
    }

    #[test_case(0.25 * PI, " +         + ")] // FOV is narrow = 2 foods
    #[test_case(0.50 * PI, ".  +     +  .")]
    #[test_case(0.75 * PI, "  . +   + .  ")] // FOV gets progressively
    #[test_case(1.00 * PI, "   . + + .   ")] // wider and wider...
    #[test_case(1.25 * PI, "   . + + .   ")]
    #[test_case(1.50 * PI, ".   .+ +.   .")]
    #[test_case(1.75 * PI, ".   .+ +.   .")]
    #[test_case(2.00 * PI, "+.  .+ +.  .+")] // FOV is the widest = 8 foods
    fn test_fov_angle(fov_angle: f32, expected_vision: &'static str) {
        TestCase {
            foods: vec![
                food(0.0, 0.0),
                food(0.0, 0.33),
                food(0.0, 0.66),
                food(0.0, 1.0),
                food(1.0, 0.0),
                food(1.0, 0.33),
                food(1.0, 0.66),
                food(1.0, 1.0),
            ],
            x: 0.5,
            y: 0.5,
            fov_range: 1.0,
            rotation: 3.0 * FRAC_PI_2,
            fov_angle: fov_angle,
            expected_vision: expected_vision,
        }
        .run()
    }
}
