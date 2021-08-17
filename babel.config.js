module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [[
    "module-resolver",
    {
      root: ["."],
      extensions: [".js", ".ts", ".jsx", ".tsx", ".svg"],
      alias: {
        "~": "./src",
        "app.json": "./app.json",
      },
    },
  ]],
};
