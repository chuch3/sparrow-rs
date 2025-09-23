const { type } = require("os");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
    target: "web",
    experiments: {
        asyncWebAssembly: true,
    },
    module: {
        rules: [
            {
                test: /\.toml$/i,
                type: "asset/source",
            },
        ],
    },
    devServer: {
        static: "./dist",
        hot: true,
    },
};
