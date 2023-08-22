/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    theme: {
      screens: {
        xs: '320px',
        xd: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1281px',
        '2xl': '1536px',
        '3xl': '1800px',
        '4xl': '1920px',
        '5xl': '2560px',
        '6xl': '3840px',
      },
    },
    extend: {
      fontFamily: {
        darker: ['Darker Grotesque', 'sans-serif'],
        dmsans: ['DM Sans', 'sans-serif'],
      },
      screens: {
        xs: '320px',
        xd: '375px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1281px',
        '2xl': '1536px',
        '3xl': '1800px',
        '4xl': '1920px',
        '5xl': '2560px',
        '6xl': '3840px',
      },
    },
  },
  plugins: [],
};
