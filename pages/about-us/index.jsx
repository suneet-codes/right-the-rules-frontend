import PropTypes from "prop-types"
import { fetchAPI } from "../../lib"
import { TextByImage } from "../../components"
import { Main } from "../../elements"

const AboutUs = ({ aboutUs: { hero } }) => {
  return (
    <Main>
      <TextByImage
        size="mainstage"
        textPosition={hero.TextPosition}
        textData={hero}
        imageName="aboutUs"
        colorType="primary"
      />
    </Main>
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
