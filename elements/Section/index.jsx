import PropTypes from "prop-types"
import { SectionWrapper } from "./Section.styles"
import { SubGrid } from "../../elements"

const Section = ({ children, textPosition }) => {
  return <SectionWrapper textPosition={textPosition}>{children}</SectionWrapper>
}

Section.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  textPosition: PropTypes.string,
}

Section.defaultProps = {
  textPosition: "left",
}

export default Section
