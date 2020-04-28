/*
 * @Description: webpack配置文件
 * @Author: 郭军伟
 * @Date: 2020-03-09 09:46:45
 * @lastEditTime: Do not edit
 */
const path = require('path');
const devServer = require('./config/devServer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const webpack = require('webpack')
const HappyPick = require('happypack');
const cpuLen = require('os').cpus().length;
const happyThreadPool = HappyPick.ThreadPool({ size: cpuLen });

const isDev = process.env.NODE_ENV === 'development';

const webpackConfig = {
  mode: isDev ? 'development' : 'production',
  devtool: isDev ? "cheap-module-eval-source-map" : "none",
  entry: {
    main: './src/index',
  },
  devServer: devServer,
  cache: true,
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ''
  },
  resolve: {
    extensions: ['.jsx', '.js'],
    modules: ['node_modules'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        use: 'happypack/loader?id=jsx'
      },
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: isDev
            }
          },
          "css-loader",
          "postcss-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|webp|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 10,
              esModule: false,
              name: '[name]_[hash:8].[ext]',
              outputPath: 'assets/images'
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 10,
              esModule: false,
              name: '[name]_[hash:8].[ext]',
              outputPath: 'assets/fonts'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      Component: ['react', 'Component'],
      lazy: ['react', 'lazy'],
      PropTypes: 'prop-types',
      styled: ['styled-components', 'default']
    }),
    new HappyPick({
      id: 'jsx',
      threads: 4,
      loaders: ['babel-loader'],
      threadPool: happyThreadPool
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css'
    }),
    new OptimizeCssAssetsPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`Your applacation is running here ${devServer.host}:${devServer.port}`]
      }
    }),
    new Visualizer({
      filename: './statistics.html'
    }),
    new webpack.NamedModulesPlugin(),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vender: {
          test: /node_modules/,
          name: 'vender',
          chunks: 'all'
        },
      }
    },
    runtimeChunk: 'single'
  }
}

module.exports = webpackConfig;