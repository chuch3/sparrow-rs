use crate::*;

// TODO:
// - [ ] Apply PSO force
//      - Global fitness score, social parameter
//      - Best fitness and position for current generation, cognitive parameter
//      - Inertia, exploration then convergence (similar to simulated annealing)
//
// - [ ] Fitness landspace
//
//
//

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

    // Implementation of Craig Reynold's Boid Algorithms to simulate flocking
    // on top of our food-searching goal-setting.
    //
    // Reference pseudo-code : [link](http://www.kfish.org/boids/pseudocode.html)

    /// Rule 1, Coherence; Aims to fly towards the centre of mass in among surrounding boids.
    /// To create a single or multiple murmuration of boids in following the same direction
    /// and goal.
    pub fn calc_coherence(&self, boid: &Animal) -> na::Point2<f32> {
        let animals: Vec<_> = self.animals().iter().filter(|a| boid != *a).collect();
        let perceived_center = if animals.is_empty() {
            boid.position()
        } else {
            let sum = self
                .animals()
                .iter()
                .map(|a| a.position().coords)
                .fold(na::Vector2::zeros(), |acc, a| acc + a);
            na::Point2::from(sum / (animals.len() - 1) as f32)
        };
        na::Point2::from((perceived_center - boid.position()) / 100.0)
    }

    /// Rule 2, Separation; To prevent collision of neighbouring boids by displacing the
    /// position when distance of boids is close.
    pub fn calc_separation(&self, boid: &Animal) -> na::Point2<f32> {
        let boid_pos = boid.position();
        let separation_units = 0.01;
        let animals: Vec<_> = self.animals().iter().filter(|a| boid != *a).collect();
        let new_pos = if animals.is_empty() {
            boid.position()
        } else {
            let update_pos = self.animals().iter().map(|a| a.position()).fold(
                na::Vector2::zeros(),
                |acc, other_pos| {
                    let distance = na::distance(&boid_pos, &other_pos);
                    let separation = if distance < separation_units {
                        other_pos.coords - boid_pos.coords
                    } else {
                        na::Point2::from([0.0, 0.0]).coords
                    };
                    acc - separation
                },
            );
            na::Point2::from(update_pos)
        };
        new_pos
    }

    /// Rule 3, Alignment; Averages the velocities of neighbouring boids and to enable
    /// more smooth and consistent flocking.
    pub fn calc_alignment(&self, boid: &Animal) -> na::Point2<f32> {
        let animals: Vec<_> = self.animals().iter().filter(|a| boid != *a).collect();
        let average_velocity = if animals.is_empty() {
            boid.position()
        } else {
            let sum = self
                .animals()
                .iter()
                .map(|a| a.rotation() * na::Vector2::new(0.0, a.speed()))
                .fold(na::Vector2::zeros(), |acc, velocity| acc + velocity);

            na::Point2::from(sum / (animals.len() - 1) as f32)
        };
        na::Point2::from(average_velocity)
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn test_basics() {
        let v1 = na::Point2::new(1.0, 0.0);
        let v2 = na::Point2::new(0.0, 1.0);
        let v3 = v1.coords + v2.coords;
        let v4 = na::Point2::from(v3);
        assert_eq!(v4, na::Point2::new(1.0, 1.0));
    }
}
