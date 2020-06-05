const path = require('path');
const merge = require('webpack-merge');

const babelLoader = require('./babelLoader');
const cssLoader = require('./cssLoader');

module.exports = (env) => {
  const isDev = env === 'development';
  console.log(`This is a ${isDev ? 'development' : 'production'} build`);

  const baseConfig = {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'app.bundle.js',
      publicPath: '/dist/',
    },
    resolve: {
      extensions: ['.js', '.jsx', '*'],
    },
  };

  const devConfig = {
    devtool: 'eval-cheap-source-map',
    devServer: {
      port: 3000,
      contentBase: path.resolve(__dirname, 'public'),
      publicPath: '/dist/',
      watchContentBase: true,
      overlay: true,
    },
  };

  const prodConfig = {
    devtool: 'hidden-nosources-source-map',
  };

  if (isDev) {
    return merge(baseConfig, devConfig, babelLoader, cssLoader);
  }
  return merge(baseConfig, prodConfig, babelLoader, cssLoader);
};
