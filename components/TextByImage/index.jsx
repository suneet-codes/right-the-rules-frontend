import PropTypes from "prop-types"
import { useColorMode } from "../../hooks/useColorMode"
import { TitleSubTitleButton, BannerSVG } from "../../components"
import { TextByImageWrapper } from "./TextByImage.styles"
const TextByImage = ({
  textPosition,
  size,
  textData,
  colorType,
  imageName,
}) => {
  const colorMode = useColorMode()
  return (
    <TextByImageWrapper
      size={size}
      textPosition={textPosition}
      as="section"
      colorMode={colorMode.value}
      colorType={colorType}
    >
      <div className="container">
        <TitleSubTitleButton data={textData} className="textArea" outline />
        <BannerSVG name={imageName} />
      </div>
    </TextByImageWrapper>
  )
}

TextByImage.propTypes = {
  textData: PropTypes.object.isRequired,
  textPosition: PropTypes.string,
  size: PropTypes.string,
  imageName: PropTypes.string.isRequired,
  colorType: PropTypes.string,
}

TextByImage.defaultProps = {
  textPosition: "left",
  size: "medium",
  className: "",
  colorType: "primary",
}

export default TextByImage
