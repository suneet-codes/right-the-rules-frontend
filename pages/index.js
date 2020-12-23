import PropTypes from "prop-types"
import {
  Articles,
  Layout,
  Seo,
  TitleSubTitleButton,
  Image,
  BannerSVG,
} from "../components"
import { Main, SubGrid, Section } from "../elements"
import { fetchAPI } from "../lib/api"

const Home = ({ articles, categories, homepage }) => {
  return (
    <>
      <Seo seo={homepage.seo} />
      <Main>
        <Section textPosition="left" size="mainstage">
          <TitleSubTitleButton data={homepage} className="textArea" outline />
          {/* <Image image={homepage.image} /> */}
          <BannerSVG name="homepage" />
        </Section>
        {/* <Articles articles={articles} /> */}
      </Main>
    </>
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
  articles: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
  homepage: PropTypes.object.isRequired,
}

export default Home
