import * as sim from "lib-simulation-wasm";
import config from "./config.toml";

// ctxt parameter has to implement the drawTriangle() function beforehand.
function main() {
    const simulation = new sim.SimulationWasm(config);

    document.getElementById("train").onclick = function() {
        var output = document.getElementById("output");
        output.value += simulation.fast_forward() + "\n";
    };

    const viewport = document.getElementById("viewport");
    const viewportScale = window.devicePixelRatio || 1;

    // Scaling-up canvas buffer to match our physical pixel ratio.
    viewport.width = viewport.width * viewportScale;
    viewport.height = viewport.height * viewportScale;

    // Matching the canvas buffer with canvas element pixels which are internally
    // scaled up by the browser, but doesn't affect the buffer size.
    viewport.style.width = viewport.width + "px";
    viewport.style.height = viewport.height + "px";

    const ctxt = viewport.getContext("2d");


    CanvasRenderingContext2D.prototype.drawTriangle = function(
        x,
        y,
        size,
        rotation,
        extrude,
    ) {
        this.beginPath();
        this.moveTo(
            x - Math.sin(rotation) * size * extrude,
            y + Math.cos(rotation) * size * extrude,
        );
        this.lineTo(
            x - Math.sin(rotation + (2.0 / 3.0) * Math.PI) * size,
            y + Math.cos(rotation + (2.0 / 3.0) * Math.PI) * size,
        );
        this.lineTo(
            x - Math.sin(rotation + (4.0 / 3.0) * Math.PI) * size,
            y + Math.cos(rotation + (4.0 / 3.0) * Math.PI) * size,
        );
        this.lineTo(
            x - Math.sin(rotation) * size * extrude,
            y + Math.cos(rotation) * size * extrude,
        );

        this.fillStyle = "#d3d3ed";
        this.fill();
    };

    CanvasRenderingContext2D.prototype.drawCircle = function(x, y, radius) {
        this.beginPath();
        this.arc(x, y, radius, 0, 2.0 * Math.PI);
        this.fillStyle = "#6c36f5";
        this.fill();
    };

    // All operation with canvas context are scaled
    ctxt.scale(viewportScale, viewportScale);

    function redraw() {
        ctxt.clearRect(0, 0, viewport.width, viewport.height);

        simulation.step();

        const world = simulation.world();

        for (const food of world.foods) {
            ctxt.drawCircle(
                food.x * viewport.width,
                food.y * viewport.height,
                viewport.width * (1.0 / 200.0),
            );
        }

        for (const animal of world.animals) {
            ctxt.drawTriangle(
                animal.x * viewport.width,
                animal.y * viewport.height,
                viewport.width * 0.01,
                animal.angle,
                1.5,
            );
        }

        // To prevent blocking code in creating hanging tabs in our web
        // browser, this function schedules our animation.
        requestAnimationFrame(redraw);
    }

    redraw();
}

main();
