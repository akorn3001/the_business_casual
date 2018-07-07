const path = require('path');

module.exports = {
  context: _dirname,
  entry: "./frontend/entry.jsx",
  output: {
    path: path.resolve(_dirname),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ["", ".js", ".jsx", "*"]
  }
};
