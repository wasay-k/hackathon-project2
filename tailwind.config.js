module.exports = {
    content: ['./src/renderer/**/*.{js,jsx,ts,tsx}',"./src/components/**/*.{js,jsx,ts,tsx}","./src/screens/**/*.{js,jsx,ts,tsx}"],
    theme: {},
    variants: {},
    plugins: [require("daisyui")],
    daisyui: {
      themes: [{mytheme: {
        "primary": "#3a74b3",    // Deep Blue
        "secondary": "#f6d860",  // Yellow
        "accent": "#37cdbe",     // Teal
        "neutral": "#3d4451",    // Grayish Blue
        "base-100": "#ffffff"    // White
      },
      }]
    }
  };
