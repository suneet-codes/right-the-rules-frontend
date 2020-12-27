import PropTypes from "prop-types"
import { fetchAPI } from "../../lib"
import { TextByImage } from "../../components"
import { Main } from "../../elements"

const OurMission = ({ ourMission: { hero } }) => {
  console.log(hero)
  return (
    <Main>
      <TextByImage
        textPosition={hero.TextPosition}
        size="mainstage"
        textData={hero}
        imageName="ourMission"
        colorType="primary"
      />
    </Main>
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
