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

#[derive(Debug, Deserialize, Clone, Copy)]
#[serde(default)]
pub struct SimulationConfig {
    pub speed_max: f32,
    pub speed_min: f32,
    pub speed_accel: f32,
    pub rotation_accel: f32,
    pub mutation_chance: f32,
    pub mutation_weight: f32,
    pub max_generation: usize,
}

#[derive(Debug, Deserialize, Clone, Copy)]
#[serde(default)]
pub struct WorldConfig {
    pub num_animals: usize,
    pub num_foods: usize,
}

#[derive(Debug, Deserialize, Clone, Copy)]
#[serde(default)]
pub struct AnimalConfig {
    pub speed: f32,
}

#[derive(Debug, Deserialize, Clone, Copy)]
#[serde(default)]
pub struct EyeConfig {
    pub fov_range: f32,
    pub fov_angle: f32,
    pub cells: usize,
}

#[derive(Debug, Deserialize, Clone, Copy)]
pub struct Config {
    #[serde(default)]
    pub simulation: SimulationConfig,
    #[serde(default)]
    pub eye: EyeConfig,
    #[serde(default)]
    pub world: WorldConfig,
    #[serde(default)]
    pub animal: AnimalConfig,
}

impl Config {
    pub fn parse_config (config_contents: &str) -> Self {
        let config: Config =
            toml::from_str(config_contents).expect(format!("unable to parse {CONFIG_FILE}").as_str());
        config
    }
}

impl Default for AnimalConfig {
    fn default() -> Self {
        Self {
            speed: INITIAL_SPEED,
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
            num_animals: NUM_ANIMALS,
            num_foods: NUM_FOODS,
        }
    }
}

impl Default for SimulationConfig {
    fn default() -> Self {
        Self {
            speed_min: SPEED_MIN,
            speed_max: SPEED_MAX,
            speed_accel: SPEED_ACCEL,
            rotation_accel: ROTATION_ACCEL,
            mutation_chance: MUTATION_CHANCE,
            mutation_weight: MUTATION_WEIGHT,
            max_generation: MAX_GENERATION,
        }
    }
}

#[cfg(test)]
mod test {
    use super::*;

    #[test]
    fn test_default_toml() {

    }

}
