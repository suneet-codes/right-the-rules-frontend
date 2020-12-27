import PropTypes from "prop-types"
import { useColorMode } from "../../hooks/useColorMode"
import { BlogPreviewWrapper } from "./BlogPreview.styles"
import { BlogPostCard } from "../../components"

const BlogPreview = ({ articles, colorType }) => {
  const colorMode = useColorMode()
  return (
    <BlogPreviewWrapper
      as="section"
      colorType={colorType}
      colorMode={colorMode.value}
    >
      <div className="container">
        {articles.map((article) => {
          return (
            <BlogPostCard
              key={`${article.id}-${article.title}`}
              {...article}
              className="card"
            />
          )
        })}
      </div>
    </BlogPreviewWrapper>
  )
}

BlogPreview.propTypes = {
  articles: PropTypes.array.isRequired,
  colorType: PropTypes.string,
}

BlogPreview.defaultProps = {
  colorType: "primary",
}

export default BlogPreview
