module.exports = {
  entry: ["./src/script/main.js","./src/script/a.js"],
  output: {
    path: "./dist/js",
    filename: '[name].bundle.js'
  }
}