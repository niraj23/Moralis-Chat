module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        noise:
          "250ms steps(10, end) 0s infinite alternate-reverse none running noiseAnimation",
      },
      keyframes: {
        noiseAnimation: {
          "0%": {
            backgroundPosition: "0% 0%",
          },
          "10%": {
            backgroundPosition: "-5% -5%",
          },
          "20%": {
            backgroundPosition: "-10% 5%",
          },
          "30%": {
            backgroundPosition: "5% -10%",
          },
          "40%": {
            backgroundPosition: "-5% 15%",
          },
          "50%": {
            backgroundPosition: "-10% 5%",
          },
          "60%": {
            backgroundPosition: "5% 5%",
          },
          "70%": {
            backgroundPosition: "0% 10%",
          },
          "80%": {
            backgroundPosition: "-5% -5%",
          },
          "90%": {
            backgroundPosition: "10% 5%",
          },
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
