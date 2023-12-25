const path = require('path'),
      babel = require('./config/buildBabel.js'),
      loaders = require('./config/buildLoaders.js'),
      plugins = require('./config/buildPlugins.js'),
      resolve = require('./config/buildResolve'),
      devServer = require('./config/buildDevServer.js');

module.exports = function webpackBuild() {
  let config = {
      entry: './src/js/main.js',
      mode: 'development',
      output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].[contenthash].js',
        clean: true,
      },
      module: {
        rules: [
          babel(),
          ...loaders()
        ]
      },
      devtool: 'inline-source-map',
      optimization: {
        runtimeChunk: 'single',
      },
      plugins: plugins(),
      devServer: devServer(),
      resolve: resolve()
    }

    return config;
}

