import PropTypes from "prop-types"
import { SubGridWrapper } from "./SubGrid.styles"

const SubGrid = ({ children }) => {
  return <SubGridWrapper>{children}</SubGridWrapper>
}

SubGrid.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
}

export default SubGrid
