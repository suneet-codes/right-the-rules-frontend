/** Add named color values */
const dark1 = "#00161F"
const dark2 = "#112730"
const dark3 = "#324751"
const pewterBlue = "#9DB4C0"
const lightCyan = "#E0FBFC"

const theme = {
  grid: {
    mobile: {
      margin: "minmax(1rem, auto)",
      columns: "repeat(6, 1fr)",
      gridGap: "0 0.5rem",
    },
    tablet: {
      margin: "2rem",
      columns: "repeat(10, 1fr)",
      gridGap: "0 1rem",
    },
    desktop: {
      margin: "minmax(3rem, 1fr)",
      columns: "repeat(12, minmax(auto, 4.2rem))",
      gridGap: "0 1rem",
    },
    rows: "8rem auto 8rem",
  },
  fonts: {
    main: "Noto Sans, sans-serif",
  },
  breakpoints: {
    tablet: `only screen and (min-width: 40rem)`,
    desktop: `only screen and (min-width: 62rem)`,
  },
  light: {
    colors: {
      primary: pewterBlue,
      secondary: dark2,
      textPrimary: dark1,
      link: dark1,
      textSecondary: lightCyan,
    },
  },
  dark: {
    colors: {
      primary: dark2,
      secondary: pewterBlue,
      secondaryLight: "#E0FBFC",
      textPrimary: lightCyan,
      link: lightCyan,
      textSecondary: dark1,
    },
  },
}

export default theme
