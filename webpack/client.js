const webpack = require('webpack');
const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const CSSNano = require('cssnano');

module.exports = {

  context: path.resolve(__dirname, '../app'),
  entry: [
    'babel-regenerator-runtime',
    './client.jsx',
  ],

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: 'assets',
              // name: "assets/[hash].[ext]",
            }
          },
         
        ],
      },

     
      
    ],
  },
  plugins: [
    
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        ENV: JSON.stringify('browser'),
      },
    }),
   
  ],
};
