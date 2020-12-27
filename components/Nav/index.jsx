import Link from "next/link"
import { useColorMode } from "../../hooks/useColorMode"

import { Button, H5, Hamburger, UL, P } from "../../elements"
import { NavWrapper } from "./Nav.styles"
import { useNavDrawer } from "../../hooks/useNavDrawer"

const Nav = () => {
  const colorMode = useColorMode()

  const { value, toggle } = useNavDrawer()
  return (
    <NavWrapper colorMode={colorMode.value} as="nav">
      <div className="container">
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
      </div>
    </NavWrapper>
  )
}

export default Nav
