import PropTypes from "prop-types"
import { GridLayoutWrapper } from "./GridLayout.styles"

const GridLayout = ({ children, colorMode }) => {
  return (
    <GridLayoutWrapper colorMode={colorMode}>
      <div className="container">{children}</div>
    </GridLayoutWrapper>
  )
}

GridLayout.propTypes = {
  children: PropTypes.any.isRequired,
  colorMode: PropTypes.string.isRequired,
}

export default GridLayout
