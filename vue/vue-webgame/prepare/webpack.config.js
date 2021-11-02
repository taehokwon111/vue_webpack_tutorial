const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  devtool: 'eval',
  mode: 'development',
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },
  entry: {
    app: [path.join(__dirname, 'App.vue')],
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
    }],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  },
};
