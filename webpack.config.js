var webpack = require('webpack');

module.exports = {
  entry: {
    app: './main.js',
  },
  output: {
    filename: '[name].bundle.js',
  },
  watch: true,
  stats: {
    colors: true
  },
  progress: true,
  plugins: [
    //new webpack.ProvidePlugin({
    //    $: "jquery",
    //    jQuery: "jQuery",
    //    "windows.jQuery": "jquery"
    //}),
  ]
};
