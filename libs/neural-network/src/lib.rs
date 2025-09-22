use core::f32;
use rand::{Rng, RngCore};
use std::iter::once;

/*
* # Neural network in Rust
*
* Tutorial code by [link](https://pwy.io/posts/learning-to-fly-pt1)
*
*/

#[derive(Debug)]
pub struct LayerTopology {
    pub neurons: usize,
}

#[derive(Debug)]
pub struct Network {
    layers: Vec<Layer>,
}

impl Network {
    /// Creates a network initialized with random values.
    pub fn random(rng: &mut dyn RngCore, layers: &[LayerTopology]) -> Self {
        assert!(layers.len() > 1);

        let layers = layers
            .windows(2)
            .map(|adj_layer| Layer::random(rng, adj_layer[0].neurons, adj_layer[1].neurons))
            .collect::<Vec<Layer>>();

        Self { layers }
    }

    pub fn weights(&self) -> impl Iterator<Item = f32> {
        self.layers
            .iter()
            .flat_map(|layer| layer.neurons.iter())
            .flat_map(|neuron| once(&neuron.bias).chain(&neuron.weights))
            .copied()
    }

    pub fn from_weights(
        topology: &[LayerTopology],
        weights: impl IntoIterator<Item = f32>,
    ) -> Self {
        // Making the iterators mutable while consuming it.
        let mut weights = weights.into_iter();

        let layers = topology
            .windows(2)
            .map(|topology| {
                Layer::from_weights(topology[0].neurons, topology[1].neurons, &mut weights)
            })
            .collect();

        if weights.next().is_some() {
            panic!("got too much weights!");
        }

        Self { layers }
    }

    pub fn propagate(&self, inputs: Vec<f32>) -> Vec<f32> {
        self.layers
            .iter()
            .fold(inputs, |inputs, layer| layer.propagate(inputs)) // Folding design pattern
    }
}

#[derive(Debug)]
struct Layer {
    neurons: Vec<Neuron>,
}

impl Layer {
    // `|_|` toilet closure...
    fn random(rng: &mut dyn RngCore, input_size: usize, output_size: usize) -> Self {
        let neurons = (0..output_size)
            .map(|_| Neuron::random(rng, input_size))
            .collect();
        Self { neurons }
    }

    fn from_weights(
        input_size: usize,
        output_size: usize,
        weights: &mut dyn Iterator<Item = f32>,
    ) -> Self {
        let neurons = (0..output_size)
            .map(|_| Neuron::from_weights(input_size, weights))
            .collect();

        Self { neurons }
    }

    fn propagate(&self, inputs: Vec<f32>) -> Vec<f32> {
        self.neurons
            .iter()
            .map(|neuron| neuron.propagate(&inputs))
            .collect()
    }
}

#[derive(Debug)]
struct Neuron {
    weights: Vec<f32>,
    bias: f32,
}

impl Neuron {
    // rand::RngCore implements the rand::Rng trait that contains the gen_range() method
    // in comparison to rand_core::RngCore, which requires trait bounds for Rng trait.
    fn random(rng: &mut dyn RngCore, input_size: usize) -> Self {
        let bias = rng.gen_range(-1.0..=1.0);
        let weights = (0..input_size).map(|_| rng.gen_range(-1.0..=1.0)).collect();

        Self { weights, bias }
    }

    fn from_weights(input_size: usize, weights: &mut dyn Iterator<Item = f32>) -> Self {
        let bias = weights.next().expect("got not enough bias!");
        let weights: Vec<_> = (0..input_size)
            .map(|_| weights.next().expect("got not enough weights!"))
            .collect();
        Self { bias, weights }
    }

    fn propagate(&self, inputs: &[f32]) -> f32 {
        assert_eq!(inputs.len(), self.weights.len());
        // Instead of using bound checks in indexing, using combinators speeds up checks
        // `::<>` turbofish explicitize generic arguments
        let output = inputs
            .iter()
            .zip(&self.weights)
            .map(|(input, weight)| input * weight)
            .sum::<f32>();
        (output + self.bias).max(0.0) // Mimics ReLU activation in range [0, R)
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use approx::assert_relative_eq;
    use rand::SeedableRng;
    use rand_chacha::ChaCha8Rng;

    mod network {
        use super::*;

        #[test]
        fn random() {
            let mut rng = ChaCha8Rng::from_seed(Default::default());
            let topology = vec![LayerTopology { neurons: 2 }, LayerTopology { neurons: 3 }];
            let network = Network::random(&mut rng, &topology);
            assert_relative_eq!(
                network.layers[0].neurons[0].weights.as_slice(),
                [0.67383957, 0.8181262].as_ref()
            );
            assert_relative_eq!(network.layers[0].neurons[0].bias, -0.6255188);
        }

        #[test]
        fn propagate() {
            let mut rng = ChaCha8Rng::from_seed(Default::default());
            let topology = vec![LayerTopology { neurons: 2 }, LayerTopology { neurons: 1 }];
            let network = Network::random(&mut rng, &topology);
            assert_relative_eq!(
                network.propagate(vec![1.0, 1.0]).as_slice(),
                [0.866447].as_ref()
            );
        }

        #[test]
        fn weights() {
            let network = Network {
                layers: vec![
                    Layer {
                        neurons: vec![Neuron {
                            bias: 0.1,
                            weights: vec![0.2, 0.3, 0.4],
                        }],
                    },
                    Layer {
                        neurons: vec![Neuron {
                            bias: 0.5,
                            weights: vec![0.6, 0.7, 0.8],
                        }],
                    },
                ],
            };

            let actual: Vec<_> = network.weights().collect();
            let expected = vec![0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8];

            assert_relative_eq!(actual.as_slice(), expected.as_slice());
        }
    }

    mod layers {
        use super::*;

        #[test]
        fn random() {
            let mut rng = ChaCha8Rng::from_seed(Default::default());
            let layer = Layer::random(&mut rng, 2, 3);
            assert_relative_eq!(
                layer.neurons[0].weights.as_slice(),
                [0.67383957, 0.8181262].as_ref()
            );
            assert_eq!(layer.neurons.len(), 3);
        }

        #[test]
        fn propagate() {
            let mut rng = ChaCha8Rng::from_seed(Default::default());
            let layer = Layer::random(&mut rng, 2, 3);

            let output = layer.propagate(vec![9.0, 1.0]);
            assert_relative_eq!(output.as_slice(), [6.2571635, 4.4426074, 0.0].as_ref());
        }
    }

    mod neuron {
        use super::*;
        #[test]
        fn random() {
            let mut rng = ChaCha8Rng::from_seed(Default::default());
            let neuron = Neuron::random(&mut rng, 4);
            assert_relative_eq!(
                neuron.weights.as_slice(),
                [0.67383957, 0.8181262, 0.26284897, 0.5238807].as_ref()
            );
        }

        #[test]
        fn propagate() {
            let neuron = Neuron {
                bias: 0.5,
                weights: vec![-0.3, 0.8],
            };

            // Ensures `.max()` (our ReLU) works:
            assert_relative_eq!(neuron.propagate(&[-10.0, -10.0]), 0.0,);

            // `0.5` and `1.0` chosen by a fair dice roll:
            assert_relative_eq!(
                neuron.propagate(&[0.5, 1.0]),
                (-0.3 * 0.5) + (0.8 * 1.0) + 0.5,
            );
        }
    }
}
