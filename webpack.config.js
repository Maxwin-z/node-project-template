const webpack = require('webpack');
const path = require('path');

const config = {
  entry: {
    test: ['./web/js/test', 'webpack-hot-middleware/client'],
    'test-redux': ['./web/js/test', 'webpack-hot-middleware/client']
  },
  output: {
    path: path.join(__dirname, 'dist/web/js'),
    filename: '[name].js',
    publicPath: '/js/'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'web/js')
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}

module.exports = config;
