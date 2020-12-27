import PropTypes from "prop-types"
import { useColorMode } from "../../hooks/useColorMode"
import { GridWrapper } from "./Grid.styles"

const Grid = ({ children, className, main, as }) => {
  const colorMode = useColorMode()
  return (
    <GridWrapper
      as={as}
      className={className}
      main={main}
      colorMode={colorMode.value}
    >
      {children}
    </GridWrapper>
  )
}

Grid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  className: PropTypes.string,
  as: PropTypes.string,
  main: PropTypes.bool,
}

Grid.defaultProps = {
  className: "",
  main: false,
  as: "div",
}

export default Grid
