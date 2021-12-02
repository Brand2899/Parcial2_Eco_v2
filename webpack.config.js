const path = require("path");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  entry: {
    login: "./src/login.js",
    vote:  "./src/vote.js",
  },
  output: {
      path:path.resolve(__dirname, "public"),
      //filename: "main.js"
  }
};