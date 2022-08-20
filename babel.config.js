module.exports = (api) => {
  api.cache(true);
  return {
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "~": "./src",
          },
          root: ["./"],
        },
      ],
    ],
    presets: ["babel-preset-expo"],
  };
};
