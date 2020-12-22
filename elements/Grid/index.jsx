import PropTypes from "prop-types"
import { useColorMode } from "../../hooks/useColorMode"
import { GridWrapper } from "./Grid.styles"

const Grid = ({ children }) => {
  const colorMode = useColorMode()
  return <GridWrapper colorMode={colorMode.value}>{children}</GridWrapper>
}

Grid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
}

export default Grid
