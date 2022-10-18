/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		animation: {
		  marquee: 'marquee 30s linear infinite',
		  marqueeV: 'marqueeV 150s linear infinite',
		},
		keyframes: {
		  marquee: {
			'from': { transform: 'translateX(0%)' },
			'to': { transform: 'translateX(-100%)' },
		  },
		  marqueeV:{
			'from': { transform: 'translateY(0%)' },
			'to': { transform: 'translateY(-100%)' },
		  }
		},
	  },
	},
	plugins: [
	  function ({ addVariant }) {
		addVariant('child', '& > *');
		addVariant('child-hover', '& > *:hover');
	},
	require('tailwind-scrollbar-hide')
	],
  }
  