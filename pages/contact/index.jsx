import PropTypes from "prop-types"
import { fetchAPI } from "../../lib"
import { TitleSubTitleButton } from "../../components"
import { Main, Section } from "../../elements"
const Contact = ({ contact }) => {
  return (
    <Main>
      <Section textPosition="right" size="mainstage">
        <TitleSubTitleButton data={contact} className="textArea" outline />
      </Section>
    </Main>
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
