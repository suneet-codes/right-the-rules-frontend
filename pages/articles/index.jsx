import PropTypes from "prop-types"
import { Articles, Layout, Seo, Page, Section } from "../../components"
import { fetchAPI } from "../../lib"

const ArticlesPage = () => {
  return (
    <Layout>
      <Page>
        <Section
          title="Article Page"
          buttonLabel="button text"
          buttonLink="/"
          outline
          height="70vh"
        ></Section>
      </Page>
    </Layout>
  )
}

export default ArticlesPage
