import PropTypes from "prop-types"
import { fetchAPI } from "../../lib"
import { Page, Layout, Section } from "../../components"
const Contact = ({ contact }) => {
  return (
    <Layout>
      <Page>
        <Section
          title={contact.hero.title}
          tagline={contact.hero.Headline}
          buttonLabel="home"
          buttonLink="/"
          outline
          height="70vh"
        ></Section>
      </Page>
    </Layout>
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
