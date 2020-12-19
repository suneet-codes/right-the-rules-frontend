import Link from "next/link"
import { NavWrapper, NavLinks } from "./Nav.styles"

const Nav = () => {
  return (
    <NavWrapper>
      <div className="logo">
        <Link href="/">
          <a>Right the Rules</a>
        </Link>
      </div>
      <NavLinks className="navLinks">
        <li>
          <Link href="/our-mission">
            <a>our mission</a>
          </Link>
        </li>
        <li>
          <Link href="/about-us">
            <a>about us</a>
          </Link>
        </li>
        <li>
          <Link href="/articles">
            <a>articles</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>contact</a>
          </Link>
        </li>
      </NavLinks>
      <div className="hamburger">HBG</div>
    </NavWrapper>
  )
}

export default Nav
