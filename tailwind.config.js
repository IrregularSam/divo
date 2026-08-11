/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./App.tsx", "./index.tsx", "./constants.tsx"],
  theme: {
    extend: {
      colors: {
        ink: "#14110D",
        surface: "#1E1A15",
        surface2: "#26211A",
        paper: "#F3EEE4",
        signal: "#E8952F",
        data: "#2BBFA0",
        muted: "#B8AFA0",
        line: "#332C22",
      },
      fontFamily: {
        display: ["'Fraunces'", "serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
      },
      animation: {
        'ticker': 'ticker 38s linear infinite',
        'ticker-slow': 'ticker 55s linear infinite',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      }
    },
  },
  plugins: [],
}
