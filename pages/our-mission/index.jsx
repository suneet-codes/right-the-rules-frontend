import PropTypes from "prop-types"
import { fetchAPI } from "../../lib"

import { Page, Layout, Section } from "../../components"
const OurMission = ({ ourMission }) => {
  return (
    <Layout>
      <Page>
        <Section
          title={ourMission.hero.title}
          tagline={ourMission.hero.Headline}
          buttonLabel="contact"
          buttonLink="/contact"
          outline
          height="70vh"
        ></Section>
      </Page>
    </Layout>
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
