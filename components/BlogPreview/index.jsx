import PropTypes from "prop-types"
import { BlogPreviewWrapper } from "./BlogPreview.styles"
import { BlogPostCard } from "../../components"

const BlogPreview = ({ articles }) => {
  return (
    <BlogPreviewWrapper>
      {articles.map((article) => {
        return (
          <BlogPostCard key={`${article.id}-${article.title}`} {...article} />
        )
      })}
    </BlogPreviewWrapper>
  )
}

BlogPreview.propTypes = {
  articles: PropTypes.array.isRequired,
}

export default BlogPreview
