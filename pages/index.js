import PropTypes from "prop-types"
import { Articles, Layout, Seo } from "../components"
import { fetchAPI } from "../lib/api"

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <div style={{ gridColumn: "2 / span 6" }}>
        <div className="uk-container uk-container-large">
          <h1>Home</h1>
          {/* <Articles articles={articles} /> */}
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  /** Run API calls in parallel */
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
    fetchAPI("/homepage"),
  ])

  return { props: { articles, categories, homepage }, revalidate: 1 }
}

Home.propTypes = {
  articles: PropTypes.array,
  categories: PropTypes.array,
  homepage: PropTypes.object,
}

export default Home
