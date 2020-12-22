import { useColorMode } from "../../hooks/useColorMode"
import { faTwitterSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FooterWrapper } from "./Footer.styles"
import { ColorModeSwitch, Icon } from "../../components"
import { Label } from "../../elements"

const Footer = () => {
  const { value } = useColorMode()
  return (
    <FooterWrapper colorMode={value}>
      <div className="social-icons-container">
        <Icon
          link="https://linkedin.com/in/satvinder-misra"
          altText="Linkedin"
          icon={faLinkedin}
        />
        <Icon
          link="https://twitter.com/righttherules"
          altText="twitter"
          icon={faTwitterSquare}
        />
      </div>
      <Label mb>
        made by <strong>suneet.codes</strong>
      </Label>
      <ColorModeSwitch />
    </FooterWrapper>
  )
}

export default Footer
