/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // --- Brand / Primary Colors ---
        primary: "#ffb533",       // main accent color
        secondary: "#ffeae2",     // soft secondary color
        accent: "#bed0f9",        // accent / highlight
        background: "#fcf9f2",    // main page bg

        // --- Neutrals / Gray Scale ---
        light: "#fff1d7",          // light background / card bg
        muted: "#e9f7f4",          // subtle muted elements
        gray: "#c7c7c5",           // neutral text / borders
        dark: "#323230",            // dark text / headings

        // --- Extra / Optional ---
        lightAccent: "#ffeed1",     // extra highlight
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
      },

      borderRadius: {
        xl2: "2rem",
        xl3: "2.5rem",
      },

      boxShadow: {
        card: "0 10px 30px rgba(255,181,51,0.2)",
      },
    },
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // --- Brand / Primary Colors ---
        primary: "#ffb533",       // main accent color
        secondary: "#ffeae2",     // soft secondary color
        accent: "#bed0f9",        // accent / highlight
        background: "#fcf9f2",    // main page bg

        // --- Neutrals / Gray Scale ---
        light: "#fff1d7",          // light background / card bg
        muted: "#e9f7f4",          // subtle muted elements
        gray: "#999999",           // neutral text / borders
        dark: "#323230",            // dark text / headings

        // --- Extra / Optional ---
        lightAccent: "#ffeed1",     // extra highlight
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        // Replaced Poppins with Fredoka for your headings
        heading: ["Fredoka", "sans-serif"],
      },
      // ... inside theme.extend
fontSize: {
  'hero': ['50px', {
    lineHeight: '100%',
    letterSpacing: '0%',
    fontWeight: '500',
  }],
},
      borderRadius: {
        xl2: "2rem",
        xl3: "2.5rem",
      },
      theme: {
        extend: {
          fontFamily: {
            fontFamily: {
              sans: ["var(--font-inter)"],
              heading: ["var(--font-fredoka)"],
              poppins: ["var(--font-poppins)"],
            },
            
          },
        },
      },
      

      // ... inside theme.extend
borderRadius1: {
  'xl2': '2rem',
  'custom-faq': '12px', // Specific rounding for FAQ cards
},
      boxShadow: {
        card: "0 10px 30px rgba(255,181,51,0.2)",
      },
    },
  },

  // theme: {
  //   extend: {
  //     colors: {
  //       primary: "#ffb533",
  //       secondary: "#ffeae2",
  //       accent: "#bed0f9",
  //       background: "#fcf9f2",
  //       light: "#fff1d7",
  //       muted: "#e9f7f4",
  //       gray: "#c7c7c5",
  //       dark: "#323230",
  //     },
  //     fontFamily: {
  //       sans: ["Inter", "sans-serif"],
  //       heading: ["Poppins", "sans-serif"],
  //     },
  //     borderRadius: {
  //       xl2: "2rem",
  //       xl3: "2.5rem",
  //     },
  //     boxShadow: {
  //       card: "0 10px 30px rgba(255,181,51,0.2)",
  //     },
  //   },
  // },
  plugins: [],
};
