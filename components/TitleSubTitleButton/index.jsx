import PropTypes from "prop-types"
import { TSTBWrapper } from "./TitleSubTitleButton.styles"
import { Button } from "../../elements"

const TitleSubTitleButton = ({
  data: { ButtonLabel, ButtonURL, hero },
  className,
  outline,
}) => {
  return (
    <TSTBWrapper className={className}>
      <h2>{hero.title}</h2>
      <p>{hero.Headline}</p>
      <Button href={ButtonURL} outline={outline}>
        {ButtonLabel}
      </Button>
    </TSTBWrapper>
  )
}

TitleSubTitleButton.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
  outline: PropTypes.bool,
}

TitleSubTitleButton.defaultProps = {
  className: "",
  outline: false,
}

export default TitleSubTitleButton
