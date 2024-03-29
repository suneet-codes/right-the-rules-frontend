import PropTypes from "prop-types"
import { TSTBWrapper } from "./TitleSubTitleButton.styles"
import { Button, H3, P } from "../../elements"

const TitleSubTitleButton = ({
  data: { ButtonLabel, ButtonURL, title, Headline },
  className,
  outline,
}) => {
  return (
    <TSTBWrapper className={className}>
      <H3 bold mb>
        {title}
      </H3>
      <P mb>{Headline}</P>
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
