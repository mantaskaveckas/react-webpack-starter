module.exports = {
  cache: true,
  entry: './index',
  output: {
    filename: 'bundle.js'
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  }
};
