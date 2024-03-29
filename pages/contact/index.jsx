import PropTypes from "prop-types"
import { fetchAPI } from "../../lib"
import { TextByImage } from "../../components"
const Contact = ({ contact: { hero } }) => {
  return (
    <TextByImage
      textPosition={hero.TextPosition}
      size="mainstage"
      textData={hero}
      imageName="contact"
      colorType="primary"
    />
  )
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

export const getStaticProps = async () => {
  const contact = await fetchAPI("/contact")

  return {
    props: { contact },
    revalidate: 1,
  }
}

export default Contact
