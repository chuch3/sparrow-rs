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
    devServer: {
        static: "./dist",
        hot: true,
    },
};
