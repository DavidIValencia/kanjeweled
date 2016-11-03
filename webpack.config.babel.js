import path from 'path';

export default {
  devtool: 'eval',
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  repository: {

  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname,
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192',
      },
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.ttf/,
        loader: 'url-loader?limit=100000&mimetype=application/font-ttf',
      },
    ],
  },
};
