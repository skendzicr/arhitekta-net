module.exports = {
  plugins: {
    autoprefixer: {},
    tailwindcss: { config: "./tailwind.config.js" },
    cssnano: {
      preset: [
        "default",
        {
          discardUnused: {
            removeAll: true,
          },
        },
      ],
    },
  },
};
