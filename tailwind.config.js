import plugin from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontSize: {
        lg: "1.125rem", // Default large size
        xl: "1.25rem", // Slightly larger
        "2xl": "1.5rem", // Larger for headings
        "3xl": "1.875rem", // Even larger for prominent text
        "4xl": "2.25rem", // Hero text
      },
    },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        "@screen lg": {
          html: {
            fontSize: "18px", // Increase base font size for large screens
          },
          body: {
            fontSize: theme("fontSize.lg"),
          },
        },
        "@screen xl": {
          html: {
            fontSize: "20px", // Further increase for extra-large screens
          },
          body: {
            fontSize: theme("fontSize.xl"),
          },
        },
      });
    }),
  ],
};
