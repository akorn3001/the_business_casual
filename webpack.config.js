// webpack.config.js
const path = require('path');
const webpack = require('webpack');
// var plugins = [];
// var devPlugins = [];
//
// var prodPlugins = [
//   new webpack.DefinePlugin({
//     'process.env': {
//       'NODE_ENV': JSON.stringify('production')
//     }
//   }),
//   new webpack.optimize.UglifyJsPlugin({
//     compress: {
//       warnings: true
//     }
//   })
// ];
//
// plugins = plugins.concat(
//   process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
// );

module.exports = {
  context: __dirname,
  entry: './frontend/components/entry',
  output: {
    path: path.resolve(__dirname, './app/assets/javascripts'),
    filename: './bundle.js',
  },
  // plugins: plugins,
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
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
