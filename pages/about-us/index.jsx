import PropTypes from "prop-types"
import { fetchAPI } from "../../lib"
import { Page, Layout, Section } from "../../components"
const AboutUs = ({ aboutUs }) => {
  return (
    <Layout>
      <Page>
        <Section
          title={aboutUs.hero.title}
          tagline={aboutUs.hero.Headline}
          buttonLabel="contact"
          buttonLink="/contact"
          outline
          height="70vh"
        ></Section>
      </Page>
    </Layout>
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
