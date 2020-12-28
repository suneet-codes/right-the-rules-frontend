import PropTypes from "prop-types"
import { useColorMode } from "../../hooks/useColorMode"
import { Articles, Seo, BlogPostCard } from "../../components"
import { fetchAPI } from "../../lib"
import { ArticlesPageWrapper } from "../../components/ArticlesPage.styles"

const ArticlesPage = ({ articles, categories }) => {
  const colorMode = useColorMode()
  return (
    <ArticlesPageWrapper colorMode={colorMode.value}>
      <div className="container">
        {articles.map(({ id, title, publishedAt, slug }, index) => {
          return (
            <BlogPostCard
              colorType={index % 2 > 0 ? "primary" : "secondary"}
              key={`${id}-${title}`}
              title={title}
              publishedAt={publishedAt}
              slug={slug}
              className="card"
            />
          )
        })}
      </div>
    </ArticlesPageWrapper>
  )
}

ArticlesPage.propTypes = {
  articles: PropTypes.array.isRequired,
  categories: PropTypes.array.isRequired,
}

export const getStaticProps = async () => {
  /** Run API calls in parallel */
  const [articles, categories] = await Promise.all([
    fetchAPI("/articles?status=published"),
    fetchAPI("/categories"),
  ])

  return {
    props: { articles, categories },
    revalidate: 1,
  }
}

export default ArticlesPage
