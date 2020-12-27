import PropTypes from "prop-types"
import AboutUsSVG from "./aboutUsSVG"
import HomePageSVG from "./homePageSVG"
import OurMissionSVG from "./ourMissionSVG"
import ContactSVG from "./contactSVG"
import AstronautSVG from "./astronautSVG"
import { H3 } from "../../elements"

const BannerSVG = ({ name }) => {
  switch (name) {
    case "aboutUs":
      return <AboutUsSVG />
    case "homePage":
      return <HomePageSVG />
    case "ourMission":
      return <OurMissionSVG />
    case "contact":
      return <ContactSVG />
    case "astronaut":
      return <AstronautSVG />
    default:
      return <H3>SVG HERE</H3>
  }
}

BannerSVG.propTypes = {
  name: PropTypes.string.isRequired,
}

export default BannerSVG
