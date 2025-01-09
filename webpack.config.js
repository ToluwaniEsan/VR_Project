const path = require('path');

module.exports = {
  entry: './index.js', // your entry file (create index.js inside src folder)
  output: {
    filename: 'bundle.js', // output bundled file
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'development', // or 'production'
  devServer: {
    static: './dist',
    open: true, // open the browser automatically
    port: 8080, // or another port if you prefer
  },
};
