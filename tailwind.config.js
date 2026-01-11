import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontSize: {
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
      },
    },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        "@screen lg": {
          html: {
            fontSize: "18px",
          },
          body: {
            fontSize: theme("fontSize.lg"),
          },
        },
        "@screen xl": {
          html: {
            fontSize: "20px",
          },
          body: {
            fontSize: theme("fontSize.xl"),
          },
        },
      });
    }),
  ],
};
