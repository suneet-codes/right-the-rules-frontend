import PropTypes from "prop-types"
import { SectionWrapper } from "./Section.styles"

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
