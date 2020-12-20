import React, { useState, useContext } from "react"
import PropTypes from "prop-types"

const NavDrawerContext = React.createContext()

const NavDrawerProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => setIsOpen((prevState) => !prevState)

  const drawerState = {
    value: isOpen ? "0%" : "-100%",
    toggle: toggleDrawer,
    set: setIsOpen,
  }

  return (
    <NavDrawerContext.Provider value={drawerState}>
      {children}
    </NavDrawerContext.Provider>
  )
}

const useNavDrawer = () => useContext(NavDrawerContext)

NavDrawerProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf([PropTypes.element]),
  ]),
}

export { NavDrawerProvider, useNavDrawer }
