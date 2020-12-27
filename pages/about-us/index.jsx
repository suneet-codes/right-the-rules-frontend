import PropTypes from "prop-types"
import { fetchAPI } from "../../lib"
import { TitleSubTitleButton, BannerSVG } from "../../components"
import { Main, Section } from "../../elements"
const AboutUs = ({ aboutUs }) => {
  return (
    <Main>
      <Section size="mainstage">
        <BannerSVG name="aboutUs" />
        <TitleSubTitleButton data={aboutUs} className="textArea" outline />
      </Section>
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
