/** Add named color values */
const dark1 = "#00161F"
const dark2 = "#112730"
const dark3 = "#324751"
const pewterBlue = "#9DB4C0"
const lightCyan = "#E0FBFC"

const theme = {
  fonts: {
    main: "Noto Sans, sans-serif",
  },
  breakpoints: {
    tablet: `only screen and (min-width: 32rem)`,
    desktop: `only screen and (min-width: 62rem)`,
  },
  light: {
    colors: {
      primary: pewterBlue,
      secondary: dark2,
      textPrimary: dark1,
      textSecondary: lightCyan,
    },
  },
  dark: {
    colors: {
      primary: dark2,
      secondary: pewterBlue,
      secondaryLight: "#E0FBFC",
      textPrimary: lightCyan,
      textSecondary: dark1,
    },
  },
}

export default theme
