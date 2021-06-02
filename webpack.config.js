
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'minified.js',
    // chunkFilename: '[id].js',
    publicPath: '/dist/'
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      assets: path.resolve(__dirname, 'src/assets/'),
      utils: path.resolve(__dirname, 'src/utils/'),
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          }
        ]
      },
      // global css, don't load as css-module
      {
        test: /\.gcss$/i,
        use: [
          "style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: {
          loader: 'url-loader?limit=10000&name=img/[name].[ext]'
        }
      },
      {
        test: /\.(mp4|mov|pdf)$/,
        use: {
          loader: 'file-loader?name=assets/[name].[ext]'
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /\//, to: '/index.html' }],
    },
  },
};
