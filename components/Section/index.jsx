import PropTypes from "prop-types"
import { Button } from "../../elements"
import { SectionWrapper } from "./Section.styles"

const Section = ({
  height,
  title,
  tagline,
  buttonLink,
  buttonLabel,
  outline,
}) => {
  return (
    <SectionWrapper height={height}>
      <div className="textArea">
        <h1>{title}</h1>
        <p>{tagline}</p>
        <Button href={buttonLink} outline={outline}>
          {buttonLabel}
        </Button>
      </div>
    </SectionWrapper>
  )
}

Section.propTypes = {
  height: PropTypes.string,
  title: PropTypes.string,
  tagline: PropTypes.string,
  buttonLink: PropTypes.string,
  buttonLabel: PropTypes.string,
}

Section.defaultProps = {
  height: "fit-content",
  title: "Section Title",
  tagline: "This is the section tagline.",
  buttonLink: "/",
}

export default Section
