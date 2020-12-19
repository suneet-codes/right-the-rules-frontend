import { NavWrapper, NavLinks } from "./Nav.styles"

const Nav = () => {
  return (
    <NavWrapper>
      <div className="logo">Right the Rules</div>
      <NavLinks className="navLinks">
        <li>our mission</li>
        <li>about us</li>
        <li>blog</li>
        <li>contact</li>
      </NavLinks>
      <div className="hamburger">HBG</div>
    </NavWrapper>
  )
}

export default Nav
