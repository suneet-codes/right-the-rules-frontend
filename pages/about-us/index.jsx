import PropTypes from "prop-types"
import { fetchAPI } from "../../lib"
import { TextByImage } from "../../components"

const AboutUs = ({ aboutUs: { hero } }) => {
  return (
    <TextByImage
      size="mainstage"
      textPosition={hero.TextPosition}
      textData={hero}
      imageName="aboutUs"
      colorType="primary"
    />
  )
}

AboutUs.propTypes = {
  aboutUs: PropTypes.object.isRequired,
}

export const getStaticProps = async () => {
  const aboutUs = await fetchAPI("/about-us")

  return {
    props: { aboutUs },
    revalidate: 1,
  }
}

export default AboutUs
