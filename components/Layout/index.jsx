import PropTypes from "prop-types"
import { useColorMode } from "../../hooks/useColorMode"
import { Nav, Footer } from "../../components"
import { LayoutWrapper } from "./Layout.styles"
const Layout = ({ children, categories }) => {
  const colorMode = useColorMode()
  return (
    <LayoutWrapper colorMode={colorMode.value}>
      <Nav />
      {children}
      <Footer colorMode={colorMode.value} />
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  categories: PropTypes.array,
}

Layout.defaultProps = {
  categories: [],
}

export default Layout
