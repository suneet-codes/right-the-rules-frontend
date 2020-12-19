import React, { useState, useContext } from "react"
import PropTypes from "prop-types"

const ColorModeContext = React.createContext()

const ColorModeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)
  const toggleDarkMode = () => setIsDark((prevState) => !prevState)

  const darkModeState = {
    value: isDark ? "dark" : "light",
    toggle: toggleDarkMode,
    set: setIsDark,
  }

  return (
    <ColorModeContext.Provider value={darkModeState}>
      {children}
    </ColorModeContext.Provider>
  )
}

const useColorMode = () => useContext(ColorModeContext)

ColorModeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf([PropTypes.element]),
  ]),
}

export { ColorModeProvider, useColorMode }
