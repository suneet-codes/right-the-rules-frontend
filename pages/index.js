import PropTypes from "prop-types"
import { Articles, Layout, Seo, Page, Section } from "../components"
import { fetchAPI } from "../lib/api"

const Home = ({ articles, categories, homepage }) => {
  return (
    <Layout categories={categories}>
      <Seo seo={homepage.seo} />
      <Page>
        <Section
          title={homepage.hero.title}
          tagline={homepage.hero.Headline}
          buttonLabel="about us"
          buttonLink="/our-mission"
          outline
          height="70vh"
        >
          {/* <Articles articles={articles} /> */}
        </Section>
      </Page>
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

  return {
    props: { articles, categories, homepage },
    revalidate: 1,
  }
}

Home.propTypes = {
  articles: PropTypes.array,
  categories: PropTypes.array,
  homepage: PropTypes.object,
}

export default Home
