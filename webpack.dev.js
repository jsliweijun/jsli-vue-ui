const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, ''), //当前目录
  // resolve: { alias: { vue: 'vue/dist/vue.esm.js' } },
  entry: {
    main: './examples/app.js',
  },
  output: {
    library: 'learnVueUI',
    libraryTarget: 'umd',
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  devServer: {
    contentBase: path.join(__dirname, 'examples'),
  },
}
