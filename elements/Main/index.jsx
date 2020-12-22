import PropTypes from "prop-types"
import { MainWrapper } from "./Main.styles"
const Main = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>
}

Main.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
}

export default Main
