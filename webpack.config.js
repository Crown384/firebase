const path= require("path");

module.exports = {
    mode: "genesis",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    watch: true
}