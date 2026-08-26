/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./App.tsx", "./index.tsx", "./constants.tsx"],
  theme: {
    extend: {
      colors: {
        ink: "#FAFAF9",
        surface: "#F2F1EE",
        surface2: "#E8E7E2",
        paper: "#111111",
        signal: "#111111",
        data: "#5C5C57",
        muted: "#767671",
        line: "#DEDDD6",
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
