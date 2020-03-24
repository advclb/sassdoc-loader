const path = require("path");
const webpack = require("webpack");

module.exports = function (fixture) {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname, "build"),
      filename: "bundle.js",
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: {
            loader: path.resolve(__dirname, "../lib/index.js"),
          },
        },
      ],
    },
  });

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);
      if (stats.hasErrors()) reject(new Error(stats.toJson().errors));

      resolve(stats);
    });
  });
};
