module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    ["module-resolver", { alias: { "@": "./" } }],
    // Add other plugins here as needed
  ],
};
