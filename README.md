# sparrow

## Respository is STILL IN PROGRESS for public use (i hope)

### Description 

Evolution environment with genetic algorithms written in Rust

### Neural Network

A simple feedforward neural network is used with genetic algorithms 
replacing its weights optimization, compared to the general backpropagation.

### Genetic Algorithm

Genetic algorithms (GA) is a heuristic optimization approach operating
through nondeterministic, randomized search.

*Population of individuals* are the set of possible solutions
for an optimization problem.

*Agents* can be represented as antennas or query plans in which we are
trying to evolve that are individually modeled with a brain / network.

Each individual contains *genes* or collectively *genome* represented
with neural network's weight tuned by GA. 

#### Fitness 

We evaluate with **fitness function**, returning fitness scores representing 
the degree of adaptation to its environment.

- Count of foods consumed by the boids is our main metric of fitness.

> Creating fitness function that accounts for many metrics of each
agent is one such problem in GA. We can add more metrics like sunlight, 
food, bloodthrist and water.

#### Reproduction

**Reproduction** builds new offsprings with improved genes. 
Two *new* individuals are randomly chosen, priotizing higher fitness. 

Genomes of both parents are combined by performing **selection**, 
**crossover** and **mutation**. 
* Selection : Sampling individual genomes with focus on higher fitness
* Crossover : Mixing two different genomes to get an approximate solution
* Mutation : Discover new solutions from initial population

#### Evolution

As the neural network's search space are large, brute forcing combinations
are not feasible. 

We start with a random suboptimal population which are improved 
with genetic algorithms (mutation and crossover), using fitness functions 
to evaluate.

In the parent selection stage, we use one simple *fitness proportionate 
selection* algorithm called **Roulette Wheel Selection**. Fitness
score represents the portion of the circular wheel where a fixed point
is placed and wheel is rotated. 

> "In practice, fitness proportionate selection is rather frowned upon - it's because it allows for the best individuals to dominate the simulation. "
"... the more diverse humans you have, the greater chance that one of them happens to be a trombone prodigy"
> Rank selection is better as it shouldn't exhibit this dominating behavior

[More on Parent Selection](https://www.tutorialspoint.com/genetic_algorithms/genetic_algorithms_parent_selection.htm)

After selecting both parents, the *crossover phase* tries to preserve knowledge 
by mixing **chromosomes** or genotypes (encoding) from both parents which 
are built from genes, represented by the weights of neural network. 
The result will be at least as good as the previous two solutions.

We apply **uniform crossover** in sampling each gene in both parent's 
chromosome in flipping a fair coin chance (50/50). After obtaining
the new chlid chromosome, we move on to *mutation phase*.

Mutation explores solutions not present in the initial population
and prevents the GA stuck in a local optimum. Using **Gaussian
mutation** by adding and subtracting random numbers from the 
child chromosome. 

The final chromosomes are then used to create new individuals in our
next update in the population.

#### Workspace 

The frontend communicates with the backend through a **bridge** module 
using WASM.

By compiling the WASM library into `cdylib` (C dynamic library) artifact:
* Exports only functions that intended to called from outside library
or executables and ignore Rust-specific internals.
* Prevents bloat from unused Rust methods.
* Generates a dynamic library to be invoked by other programs at runtime

As Javascript doesn't support Rust's types, it has to cross
the **foreign function interface (FFI)** boundary. Different memory 
representation of objects needs to be serialized (let's say JSON 
in this case) first and then deserialized in the target language.

WASM can only read binaries, so wasm-pack has to compile the Rust
code with **shim** or glue-function, converting Rust types to 
metadata to recreate / deserialize.

This explains the multiple packages when initializing the crate with 
wasm-pack.

In summary, 
* WASM : library binary modules for our frontend (JS) to run in the web
* wasm-pack : builds WASM packages from Rust code for JS compatibility 
* webpack : bundler compatible with `wasm-bindgen` for native WASM ES modules 
Resulting in a *Rust workspace (wasm-pack) + WebAssembly + Webpack + 
JS Frontend* project.

### Simulation

After creating the simulation crate, a proxy crate is used by the frontend
to interface with Rust. Each step in the simulation adds the rotation scaled by speed in each boid's position. As the boids points upwards during no 
rotation, the speed is relative by y-axis.

Interface is shown using the `<canvas>` HTML element with JS as the frontend
scripting. It manually draws the shape of boids on the generated position,
with its rotation computed using basic trigonometry. 

#### Collisions 

According to the general shape of our objects (triangle boids and circular
foods), we apply hit-testing in a circle-triangle intersection.
Hit-testing only computes the intersection of a point and object,
while collision detection assess multiple objects.

As circle-triangle are complex algorithms, we use assume a circle-circle
intersection between the boids and foods. If the distance between 
the two circle is larger than the sum of radii, it doesn't hit / collide.
Else, it does!

$$
    \text{no collision} = \text{distance}(a, b) \ge r_a + r_b 
$$

$$
    \text{collision} = \text{distance}(a, b) \le r_a + r_b 
$$

#### Vision 

Each boids has an array of vision cells where each number represents
how close the food matching the eye cell. The eyes contains parameters:
* `fov_range` : How far the eyes can see the food in ratio of the entire map
* `fov_angle` : How wide the eyes can see relative to the rotation
* `cells`: Number of photoreceptors for having more detailed vision

#### Brain

For protoyping, we use the number of eye cells as the input layer of 
our network. Outputs are represented as the shift of speed and rotation 
of our boids, which are limited by the specified range and acceleration.

The population will start a new generation after a certain period of steps.
Using genetic algorithms, we maximize fitness determined by number of food 
consumed by each boid.

#### Implementation with Genetic Algorithm 

The genetic algorithm evolves every brain by taking its weights from every layer
in the our current population as chromosomes. The layers of network takes
on the topology of our senses which are passed into our input. 

We had to implement back-and-forth convertion for our networks (weights <-> network)
and animals (animal <-> chromosome). Additional senses like sound, hearing, etc.
requires the chromosome and network input to be extended. Output weights of
the network is the action of our boids.

...

- If the types doesn't implement the `Copy` trait, returning value
**moves the ownership**. Elsewise, it returns a bitwise copy where
duplicates the value while providing ownership to each values of
caller and callee.

If the types contains little memory, `Copy` returns are cheaper than
borrow-checking rules. Usually non-`Copy` types like `String` contains
way larger memory, borrowing is cheaper than cloning / deep clones. 

* If type has `Copy`, return by value.
* If type has no `Copy`, return by reference.

----------

### TODO

- [ ] Visual the (sensors) eyes and brains for the boids
- [ ] Configuration
    - [ ] Error handling, cargo packages docs
    - [ ] Traits for additional files to parse

- [ ] Better repo documentation and description
- [ ] Refactor 
- [ ] `--release` build for optimizations
- [ ] Output every evolution instead of fast-forward.
    - Statistics in step / evolve

#### Future

- [ ] Implement other senses like ears, nerves, mood, etc.
- [ ] Entity Component System design pattern
- [ ] Color mutation with chromosome and weights
- [ ] Cannibalism having lower or higher effect on the fitness
- [ ] Rayon data pararellization
