const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.js', '.json'],
  },
  plugins: [new ESLintPlugin(options)],
};
