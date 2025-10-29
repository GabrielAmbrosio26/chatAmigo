module.exports = {
  // Use array form so build tooling that expects ordered plugin entries can parse it
  plugins: [
    ["@tailwindcss/postcss", {}],
    ["autoprefixer", {}],
  ],
};

