import PropTypes from "prop-types"
import { useColorMode } from "../../hooks/useColorMode"
import { FooterWrapper } from "./Footer.styles"
import { ColorModeSwitch } from "../../components"

const Footer = () => {
  const { value } = useColorMode()
  return (
    <FooterWrapper colorMode={value}>
      This is the Footer <ColorModeSwitch />
    </FooterWrapper>
  )
}

Footer.propTypes = {
  colorMode: PropTypes.string.isRequired,
}

export default Footer
