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
      gridGap: "0 1rem",
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
    tablet: `only screen and (min-width: 640px)`,
    desktop: `only screen and (min-width: 992px)`,
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
  typography: {
    h1: {
      fontSize: "3.0625rem",
      lineHeight: "3.6875rem",
      marginBottom: "1rem",
    },
    h2: {
      fontSize: "2.4375rem",
      lineHeight: "2.9375rem",
      marginBottom: "1rem",
    },
    h3: {
      fontSize: "1.953rem",
      lineHeight: "2.3125rem",
      marginBottom: "1rem",
    },
    h4: {
      fontSize: "1.5625rem",
      lineHeight: "1.875rem",
      marginBottom: "1rem",
    },
    h5: {
      fontSize: "1.25rem",
      lineHeight: "1.5rem",
      marginBottom: "1rem",
    },
    p: {
      fontSize: "1rem",
      lineHeight: "1.5rem",
      marginBottom: "1rem",
    },
    label: {
      fontSize: "0.75rem",
      lineHeight: "0.875rem",
      marginBottom: "1rem",
    },
  },
}

export default theme
