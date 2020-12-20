import PropTypes from "prop-types"
import { useColorMode } from "../../hooks/useColorMode"
import Link from "next/link"
import { ButtonWrapper } from "./Button.styles"
const Button = ({ children, href, outline }) => {
  const colorMode = useColorMode()
  return (
    <Link href={href}>
      <ButtonWrapper colorMode={colorMode.value} outline={outline}>
        {children}
      </ButtonWrapper>
    </Link>
  )
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  href: PropTypes.string.isRequired,
  outline: PropTypes.bool,
}
Button.defaultProps = {
  outline: false,
}

export default Button
