
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
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        // loader: ["style-loader", "css-loader"],
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
            // options: {
            //   modules: {
            //     compileType: "module",
            //     mode: "local",
            //     auto: true,
            //     exportGlobals: true,
            //     localIdentName: "[path][name]__[local]--[hash:base64:5]",
            //     localIdentContext: path.resolve(__dirname, "src"),
            //     localIdentHashPrefix: "my-custom-hash",
            //     namedExport: true,
            //     exportLocalsConvention: "camelCase",
            //     exportOnlyLocals: false,
            //   },
            // },
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
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
