const blacklist = require('metro').createBlacklist;

module.exports = {
  getTransformModulePath() {
    return require.resolve("react-native-typescript-transformer");
  },
  getSourceExts() {
    return ["ts", "tsx"];
  },
  getBlacklistRE: function() {
    return blacklist([/dist\/mac\/.*/, "dist/mac/*"]);
  }
};
