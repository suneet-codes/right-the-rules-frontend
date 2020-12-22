import PropTypes from "prop-types"
import { IconWrapper } from "./Icon.styles"
import { useColorMode } from "../../hooks/useColorMode"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Icon = ({ link, altText, icon }) => {
  const { value } = useColorMode()
  return (
    <IconWrapper
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      alt={altText}
      colorMode={value}
    >
      <FontAwesomeIcon icon={icon} />
    </IconWrapper>
  )
}

Icon.propTypes = {
  link: PropTypes.string,
  altText: PropTypes.string,
  icon: PropTypes.object.isRequired,
}

Icon.defaultProps = {
  link: "/",
  altText: "icon",
}

export default Icon
