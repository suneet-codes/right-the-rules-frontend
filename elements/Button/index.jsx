import PropTypes from "prop-types"
import { useColorMode } from "../../hooks/useColorMode"
import Link from "next/link"
import { P } from "../../elements"
import { ButtonWrapper } from "./Button.styles"
const Button = ({ children, href, outline, as }) => {
  const colorMode = useColorMode()
  return (
    <Link as={as} href={href}>
      <ButtonWrapper colorMode={colorMode.value} outline={outline}>
        <P>{children}</P>
      </ButtonWrapper>
    </Link>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  as: PropTypes.string,
  outline: PropTypes.bool,
}
Button.defaultProps = {
  outline: false,
  as: "",
}

export default Button

/** https://emotion.sh/docs/styled - Render Button as a tag */
