/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        royalblue: "#4169e1",
      },
      fontFamily: {
        geistThin: ["Geist Thin", "sans-serif"],
        geistLight: ["Geist Light", "sans-serif"],
        geistRegular: ["Geist Regular", "sans-serif"],
        geistMedium: ["Geist Medium", "sans-serif"],
        geistSemiBold: ["Geist Semibold", "sans-serif"],
        geistBold: ["Geist Bold", "sans-serif"],
        geistBlack: ["Geist Black", "sans-serif"],
      },
      keyframes: {
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
        fly: {
          from: { transform: "translateY(0.1em)" },
          to: { transform: "translateY(-0.1em)" },
        },
        before8: {
          "0%": {
            width: "0.5em",
            boxShadow:
              "1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75)",
          },
          "35%": {
            width: "2.5em",
            boxShadow:
              "0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75)",
          },
          "70%": {
            width: "0.5em",
            boxShadow:
              "-1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75)",
          },
          "100%": {
            boxShadow:
              "1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75)",
          },
        },
        after6: {
          "0%": {
            height: "0.5em",
            boxShadow:
              "0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75)",
          },
          "35%": {
            height: "2.5em",
            boxShadow:
              "0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75)",
          },
          "70%": {
            height: "0.5em",
            boxShadow:
              "0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75)",
          },
          "100%": {
            boxShadow:
              "0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75)",
          },
          pulse: {
            "0%": {
              transform: "scale(0.8)",
              backgroundColor: "#b3d4fc",
              boxShadow: "0 0 0 0 rgba(178, 212, 252, 0.7)",
            },
            "50%": {
              transform: "scale(1.2)",
              backgroundColor: "#6793fb",
              boxShadow: "0 0 0 10px rgba(178, 212, 252, 0)",
            },
            "100%": {
              transform: "scale(0.8)",
              backgroundColor: "#b3d4fc",
              boxShadow: "0 0 0 0 rgba(178, 212, 252, 0.7)",
            },
          },
          shimmer: {
            "0%": { "background-position-x": "150%" },
            "40%, 100%": { "background-position-x": "-150%" },
          },
        },
        drop: {
          "0%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(80px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        square1: {
          "0%": {
            left: "calc(0 * 30px)",
            top: "calc(0 * 30px)",
          },
          "8.333%": {
            left: "calc(0 * 30px)",
            top: "calc(1 * 30px)",
          },
          "100%": {
            left: "calc(0 * 30px)",
            top: "calc(1 * 30px)",
          },
        },
        square2: {
          "0%": {
            left: "calc(0 * 30px)",
            top: "calc(1 * 30px)",
          },
          "8.333%": {
            left: "calc(0 * 30px)",
            top: "calc(2 * 30px)",
          },
          "16.67%": {
            left: "calc(1 * 30px)",
            top: "calc(2 * 30px)",
          },
          "25%": {
            left: "calc(1 * 30px)",
            top: "calc(1 * 30px)",
          },
          "83.33%": {
            left: "calc(1 * 30px)",
            top: "calc(1 * 30px)",
          },
          "91.67%": {
            left: "calc(1 * 30px)",
            top: "calc(0 * 30px)",
          },
          "100%": {
            left: "calc(0 * 30px)",
            top: "calc(0 * 30px)",
          },
        },
        square3: {
          "0%, 100%": {
            left: "calc(1 * 30px)",
            top: "calc(1 * 30px)",
          },
          "16.67%": {
            left: "calc(1 * 30px)",
            top: "calc(1 * 30px)",
          },
          "25%": {
            left: "calc(1 * 30px)",
            top: "calc(0 * 30px)",
          },
          "33.33%": {
            left: "calc(2 * 30px)",
            top: "calc(0 * 30px)",
          },
          "41.67%": {
            left: "calc(2 * 30px)",
            top: "calc(1 * 30px)",
          },
          "66.67%": {
            left: "calc(2 * 30px)",
            top: "calc(1 * 30px)",
          },
          "75%": {
            left: "calc(2 * 30px)",
            top: "calc(2 * 30px)",
          },
          "83.33%": {
            left: "calc(1 * 30px)",
            top: "calc(2 * 30px)",
          },
          "91.67%": {
            left: "calc(1 * 30px)",
            top: "calc(1 * 30px)",
          },
        },
        square4: {
          "0%": {
            left: "calc(2 * 30px)",
            top: "calc(1 * 30px)",
          },
          "33.33%": {
            left: "calc(2 * 30px)",
            top: "calc(1 * 30px)",
          },
          "41.67%": {
            left: "calc(2 * 30px)",
            top: "calc(2 * 30px)",
          },
          "50%": {
            left: "calc(3 * 30px)",
            top: "calc(2 * 30px)",
          },
          "58.33%": {
            left: "calc(3 * 30px)",
            top: "calc(1 * 30px)",
          },
          "100%": {
            left: "calc(3 * 30px)",
            top: "calc(1 * 30px)",
          },
        },
        square5: {
          "0%": {
            left: "calc(3 * 30px)",
            top: "calc(1 * 30px)",
          },
          "50%": {
            left: "calc(3 * 30px)",
            top: "calc(1 * 30px)",
          },
          "58.33%": {
            left: "calc(3 * 30px)",
            top: "calc(0 * 30px)",
          },
          "66.67%": {
            left: "calc(2 * 30px)",
            top: "calc(0 * 30px)",
          },
          "75%": {
            left: "calc(2 * 30px)",
            top: "calc(1 * 30px)",
          },
          "100%": {
            left: "calc(2 * 30px)",
            top: "calc(1 * 30px)",
          },
        },
        circle: {
          "0%": {
            top: "60px",
            height: "5px",
            borderRadius: "50px 50px 25px 25px",
            transform: "scaleX(1.7)",
          },
          "40%": {
            height: "20px",
            borderRadius: "50%",
            transform: "scaleX(1)",
          },
          "100%": {
            top: "0%",
          },
        },
        shadow: {
          "0%": {
            transform: "scaleX(1.5)",
          },
          "40%": {
            transform: "scaleX(1)",
            opacity: ".7",
          },
          "100%": {
            transform: "scaleX(.2)",
            opacity: ".4",
          },
        },
        spinWords: {
          "0%": {
            transform: "translateY(0)",
          },
          "20%": {
            transform: "translateY(-100%)",
          },
          "40%": {
            transform: "translateY(-200%)",
          },
          "60%": {
            transform: "translateY(-300%)",
          },
          "80%": {
            transform: "translateY(-400%)",
          },
          "100%": {
            transform: "translateY(-400%)",
          },
        },
      },
      animation: {
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
        fly: "fly 0.6s ease-in-out infinite alternate",
        before8: "before8 2s infinite",
        after6: "after6 2s infinite",
        drop: "drop 5s ease-in-out infinite",
        drop1: "drop 3s ease-in-out infinite",
        drop2: "drop 4s ease-in-out infinite",
        drop3: "drop 6s ease-in-out infinite",
        pulse1: "pulse 1.5s ease-in-out infinite -0.3s",
        pulse2: "pulse 1.5s ease-in-out infinite -0.1s",
        pulse3: "pulse 1.5s ease-in-out infinite 0.1s",
        pulse4: "pulse 1.5s ease-in-out infinite 0.3s",
        pulse5: "pulse 1.5s ease-in-out infinite 0.5s",
        square1: "square1 2.4s ease-in-out infinite",
        square2: "square2 2.4s ease-in-out infinite",
        square3: "square3 2.4s ease-in-out infinite",
        square4: "square4 2.4s ease-in-out infinite",
        square5: "square5 2.4s ease-in-out infinite",
        circle1: "circle 0.5s alternate infinite ease",
        circle2: "circle 0.5s alternate infinite ease 0.2s",
        circle3: "circle 0.5s alternate infinite ease 0.3s",
        shadow1: "shadow 0.5s alternate infinite ease",
        shadow2: "shadow 0.5s alternate infinite ease 0.2s",
        shadow3: "shadow 0.5s alternate infinite ease 0.3s",
        "spin-words": "spinWords 8s infinite",
        shimmer: "shimmer 2s infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      backgroundImage: {
        "custom-badge-gradient":
          "linear-gradient(-60deg, #fffff00 0%, #fffff00 40%, #fffff44 40%, #fffff44 60%, #fffff00 60%, #fffff00 100%)",
      },
      backgroundSize: {
        "200-100": "200% 100%",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
