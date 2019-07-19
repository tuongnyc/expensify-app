// NodeJS file.  no import, use require!
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CSSExtract = new ExtractTextPlugin('styles.css');

module.exports = (env) => {
  const isProduction = env === 'production';

  return {
    //entry: './playground/hoc.js',
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: 'css-loader',
              options: { sourceMap: true }
            },
            {
              loader: 'sass-loader',
              options: { sourceMap: true }
            }
          ]
        })
      }]
    }, 
    plugins: [
      CSSExtract
    ],
    devtool: isProduction ? 'source-map' : 'inline-source-map', //'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  };  
};

/*
module.exports = {
  //entry: './playground/hoc.js',
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};
*/
