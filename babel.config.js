module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "@atoms": "./src/components/atoms",
          "@molecules": "./src/components/molecules",
          "@templates": "./src/components/templates",
          "@screens": "./src/screens",
          "@utilities": "./src/utilities",
          "@data": "./src/data",
          "@styles": "./src/styles",
          "@services":"./src/services",
          "@model":"./src/model"
        },
      },
    ],
  ],
};
