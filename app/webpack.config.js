
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    chunkFilename: '[id].js',
    publicPath: ''
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src/'),
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            test: /\.css$/,
            loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader?limit=10000&name=img/[name].[ext]'
        }
      }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: __dirname + '/src/index.html',
          filename: 'index.html',
          inject: 'body'
      })
  ]
};
