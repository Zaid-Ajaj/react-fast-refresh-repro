module.exports = {
    entry: "src/App.fsproj",
    outDir: "compiled-js",
    babel: {
        sourceMaps: false,
        presets: [
            ["@babel/preset-react"],
            ["@babel/preset-env", { modules: "commonjs" }]
        ]
    }
}