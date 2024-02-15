import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {},
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: ["night", "winter"],
  },
};
export default config;
