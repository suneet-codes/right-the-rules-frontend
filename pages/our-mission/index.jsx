import PropTypes from "prop-types"
import { fetchAPI } from "../../lib"
import { TextByImage } from "../../components"

const OurMission = ({ ourMission: { hero } }) => {
  return (
    <TextByImage
      textPosition={hero.TextPosition}
      size="mainstage"
      textData={hero}
      imageName="ourMission"
      colorType="primary"
    />
  )
}

OurMission.propTypes = {
  ourMission: PropTypes.object.isRequired,
}

export const getStaticProps = async () => {
  const ourMission = await fetchAPI("/our-mission")

  return {
    props: { ourMission },
    revalidate: 1,
  }
}
export default OurMission
