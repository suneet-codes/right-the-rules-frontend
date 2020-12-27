import PropTypes from "prop-types"
import {
  Articles,
  Layout,
  Seo,
  TitleSubTitleButton,
  BannerSVG,
  BlogPreview,
  TextByImage,
} from "../components"
import { fetchAPI } from "../lib/api"

const Home = ({
  articles,
  categories,
  homepage: { seo, hero, ourMission },
}) => {
  return (
    <>
      <Seo seo={seo} />
      <TextByImage
        textPosition={hero.TextPosition}
        textData={hero}
        size="mainstage"
        colorType="primary"
        imageName="homePage"
      />
      <TextByImage
        textPosition={ourMission.TextPosition}
        textData={ourMission}
        size="medium"
        colorType="secondary"
        imageName="astronaut"
      />
      <BlogPreview articles={articles} />
      {/* <Articles articles={articles} /> */}
    </>
  )
}

export const getStaticProps = async () => {
  /** Run API calls in parallel */
  const [articles, categories, homepage] = await Promise.all([
    fetchAPI("/articles?status=published&_limit=3"),
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
