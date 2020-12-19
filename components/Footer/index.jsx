import PropTypes from "prop-types"
import { FooterWrapper } from "./Footer.styles"
import { ColorModeSwitch } from "../../components"

const Footer = ({ colorMode }) => {
  return (
    <FooterWrapper colorMode={colorMode}>
      This is the Footer <ColorModeSwitch />
    </FooterWrapper>
  )
}

Footer.propTypes = {
  colorMode: PropTypes.string.isRequired,
}

export default Footer
