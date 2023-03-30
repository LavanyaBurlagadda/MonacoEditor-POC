const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = {
  webpack: {
    configure: {
      experiments: {
        topLevelAwait: true
      },
      plugins: [new MonacoWebpackPlugin()]
    }
  }
};
