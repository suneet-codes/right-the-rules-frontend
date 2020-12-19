import PropTypes from "prop-types"
import { Articles, Layout, Seo, Page } from "../../components"
import { fetchAPI } from "../../lib"

const ArticlesPage = () => {
  return (
    <Layout>
      <Page>
        <h1>This is the article page</h1>
      </Page>
    </Layout>
  )
}

export default ArticlesPage
