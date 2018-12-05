const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    // entry: './src/index.js',
    // output: {
    //   path: path.resolve(__dirname, 'dist'),
    //   filename: 'js/bundle.js'
    // },
    // module: {
    //   rules: [{
    //     test: /\.sass$/,
    //     use: ExtractTextPlugin.extract({
    //       fallback: 'style-loader',
    //       use: [
    //         'css-loader',
    //         'sass-loader'
    //       ]
    //     })
    //   }]
    // },
    // plugins: [
    //   new ExtractTextPlugin('css/mystyles.css'),
    // ]
  })
}