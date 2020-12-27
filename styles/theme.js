/** Add named color values */
export const dark1 = "#00161F"
export const dark2 = "#112730"
export const dark2Light = "#17303A"
export const dark3 = "#324751"
export const pewterBlue = "#9DB4C0"
export const pewterBlueLight = "#B1C3CD"
export const lightCyan = "#E0FBFC"
export const powderBlue = "#C2DFE3"
export const pink2 = "#C0AABD"
export const pink3 = "#824F65"

export const colors = {
  dark1,
  dark2,
  dark2Light,
  dark3,
  pewterBlue,
  pewterBlueLight,
  lightCyan,
  powderBlue,
  pink2,
  pink3,
}

const theme = {
  grid: {
    mobile: {
      margin: "minmax(1rem, auto)",
      columns: "repeat(8, 1fr)",
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
      primaryLight: pewterBlueLight,
      secondary: dark2,
      textPrimary: dark1,
      link: dark1,
      textSecondary: lightCyan,
    },
  },
  dark: {
    colors: {
      primary: dark2,
      primaryLight: dark2Light,
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
