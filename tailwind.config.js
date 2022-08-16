module.exports = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      nuecha: ['Neucha', 'cursive']
    },
    extend: {
      maxWidth: {
        '8xl': '90rem'
      },
      colors: {
        dark: {
          DEFAULT: '#131414'
        },
        black: {
          DEFAULT: "#090909",
        },
        white: {
          DEFAULT: "#ffffff",
        },
        primary: {
          DEFAULT: "#1D718B",
        },
        secondary: {
          DEFAULT: "#F0941B",
        },
        alt: {
          DEFAULT: "#012438",
        },
        pastel: {
          DEFAULT: "#F0EBE8",
        },

      },
      backgroundImage: {
        'five': "url('../images/bg/5.png')",
        'seven': "url('../images/bg/7.svg')",
        'inspire': "url('https://images.unsplash.com/photo-1600363740518-6812785e6814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80')",
        'evangelism': "url('https://images.unsplash.com/photo-1636300780710-bd19649fc8a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3262&q=80')",
      }
    },
  },
  plugins: [],
}
