import PropTypes from "prop-types"
import { fetchAPI } from "../../lib"
import { TitleSubTitleButton } from "../../components"
import { Main, Section } from "../../elements"

const OurMission = ({ ourMission }) => {
  console.log(ourMission)
  return (
    <Main>
      <Section>
        <TitleSubTitleButton data={ourMission} className="textArea" outline />
      </Section>
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