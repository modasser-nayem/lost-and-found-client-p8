import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
         colors: {
            primary: "#9B276D",
         },
      },
      container: {
         center: true,
         padding: "1rem",
         screens: {
            sm: "100%", // At small screens and up
            md: "640px", // At medium screens and up
            lg: "768px", // At large screens and up
            xl: "1024px", // At extra-large screens and up
            "2xl": "1180px", // At 2xl screens and up
            "3xl": "1436px", // At 3xl screens and up
         },
      },
   },
   plugins: [],
};
export default config;
