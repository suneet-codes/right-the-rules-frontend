import Link from "next/link"
import { Button, H5, Hamburger, UL, P } from "../../elements"
import { NavWrapper } from "./Nav.styles"
import { useNavDrawer } from "../../hooks/useNavDrawer"

const Nav = () => {
  const { value, toggle } = useNavDrawer()
  return (
    <NavWrapper>
      <div className="logo">
        <Link href="/">
          <a>
            <H5 bold>Right the Rules</H5>
          </a>
        </Link>
      </div>
      <UL
        className="navLinks"
        alignItems="center"
        justifyContent="space between"
      >
        <li>
          <Link href="/our-mission">
            <a>
              <P>our mission</P>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/about-us">
            <a>
              <P>about us</P>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/articles">
            <a>
              <P>articles</P>
            </a>
          </Link>
        </li>
        <li>
          <Button href="/contact">contact</Button>
        </li>
      </UL>
      <div className="hamburger">
        <button onClick={toggle}>
          <Hamburger />
        </button>
      </div>
    </NavWrapper>
  )
}

export default Nav
