import PropTypes from "prop-types"
import { SectionWrapper } from "./Section.styles"
import { SubGrid } from "../../elements"

const Section = ({ children, textPosition, size }) => {
  return (
    <SectionWrapper size={size} textPosition={textPosition}>
      {children}
    </SectionWrapper>
  )
}

Section.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  textPosition: PropTypes.string,
  size: PropTypes.string,
}

Section.defaultProps = {
  textPosition: "left",
  size: "medium",
}

export default Section
