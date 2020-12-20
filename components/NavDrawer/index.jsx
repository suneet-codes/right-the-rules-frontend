import Link from "next/link"
import { NavDrawerWrapper } from "./NavDrawer.styles"
import { UL, Button } from "../../elements"
import { useColorMode } from "../../hooks/useColorMode"
import { useNavDrawer } from "../../hooks/useNavDrawer"

const NavDrawer = () => {
  const { value, toggle } = useNavDrawer()

  const colorMode = useColorMode()
  return (
    <NavDrawerWrapper colorMode={colorMode.value} position={value}>
      <UL
        className="navDrawer"
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <li>
          <Link href="/our-mission">
            <a onClick={toggle}>our mission</a>
          </Link>
        </li>
        <li>
          <Link href="/about-us">
            <a onClick={toggle}>about us</a>
          </Link>
        </li>
        <li>
          <Link href="/articles">
            <a onClick={toggle}>articles</a>
          </Link>
        </li>
        <li>
          <Button href="/contact" outline>
            contact
          </Button>
        </li>
      </UL>
    </NavDrawerWrapper>
  )
}

export default NavDrawer
