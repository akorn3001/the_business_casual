// webpack.config.js
const path = require('path');

module.exports = {
  context: __dirname,
  entry: './frontend/javascripts/entry',
  output: {
    path: path.resolve(__dirname, './app/assets/javascripts'),
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  }
};
