const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const ruleForJavascript = {
  test: /\.js$/,
  loader: 'babel-loader',
  options: {
    presets: [
      [
        '@babel/preset-react',
        {
          runtime: 'automatic' // 'classic' - con esto no hace falta import react from react
        }
      ]
    ]
  }
}
const ruleForStyles = {
  test: /\.(scss|css)$/,
  use: ['style-loader', 'css-loader', 'sass-loader']
}

const rules = [ruleForJavascript, ruleForStyles]

module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 4000,
    open: true,
    compress: true,
    hot: true
  },
  output: {
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src/index.html')})
  ],
  module: { rules }
}