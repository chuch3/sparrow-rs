use crate::*;
use serde::Deserialize;
use std::f32::consts::PI;
use std::fs;
use toml;

// Must only be used for initialization and customization.

const CONFIG_FILE: &str = "config.toml";

const SPEED_MAX: f32 = 0.0025;
const SPEED_MIN: f32 = 0.0001;
const SPEED_ACCEL: f32 = 0.05;
const ROTATION_ACCEL: f32 = FRAC_PI_4;
const MUTATION_CHANCE: f32 = 0.01;
const MUTATION_WEIGHT: f32 = 0.3;
const MAX_GENERATION: usize = 2000;

const NUM_ANIMALS: usize = 40;
const NUM_FOODS: usize = 60;

const FOV_RANGE: f32 = 0.5;
const FOV_ANGLE: f32 = PI * FRAC_PI_4;
const CELLS: usize = 10;

const INITIAL_SPEED: f32 = 0.002;

#[derive(Debug, Deserialize)]
pub struct SimulationConfig {
    pub speed_max: f32,
    pub speed_min: f32,
    pub speed_accel: f32,
    pub rotation_accel: f32,
    pub mutation_chance: f32,
    pub mutation_weight: f32,
    pub max_generation: usize,
    pub world: WorldConfig,
}

#[derive(Debug, Deserialize)]
pub struct WorldConfig {
    pub num_animals: usize,
    pub num_foods: usize,
    pub animal: AnimalConfig,
}

#[derive(Debug, Deserialize)]
pub struct AnimalConfig {
    pub speed: f32,
    pub eye: EyeConfig,
}

#[derive(Debug, Deserialize)]
pub struct EyeConfig {
    pub fov_range: f32,
    pub fov_angle: f32,
    pub cells: usize,
}


#[derive(Debug, Deserialize)]
pub struct Config {}

impl Config {
    pub fn read_file() -> Config {
        let file = fs::read_to_string(CONFIG_FILE).expect("unable to read config.toml file");
        let config: Config =
            toml::from_str(&file).expect(format!("unable to parse {CONFIG_FILE}").as_str());
        config
    }
}

impl Default for AnimalConfig {
    fn default() -> Self {
        Self {
            speed: INITIAL_SPEED,
            eye: EyeConfig::default(),
        }
    }
}

impl Default for EyeConfig {
    fn default() -> Self {
        Self {
            fov_range: FOV_RANGE,
            fov_angle: FOV_ANGLE,
            cells: CELLS,
        }
    }
}

impl Default for WorldConfig {
    fn default() -> Self {
        Self {
            animal: AnimalConfig::default(),
            num_foods: NUM_FOODS,
            num_animals: NUM_ANIMALS,
        }
    }
}

impl Default for SimulationConfig {
    fn default() -> Self {
        Self {
            speed_max: SPEED_MAX,
            speed_min: SPEED_MIN,
            speed_accel: SPEED_ACCEL,
            rotation_accel: ROTATION_ACCEL,
            mutation_chance: MUTATION_CHANCE,
            mutation_weight: MUTATION_WEIGHT,
            max_generation: MAX_GENERATION,
            world: WorldConfig::default(),
        }
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn output_file_name() {
        Config::read_file();
    }
}
