import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: { 

    screen:{
      'xs':'360px'
    },
    
    extend: {
      colors:{
        'primary-color':'#202427',
        'secondary-color':'#15191C'
      }
    },
  },
  plugins: [],
} satisfies Config;
