import PropTypes from "prop-types"
import { Articles, Seo, TitleSubTitleButton } from "../../components"
import { Main, Section } from "../../elements"
import { fetchAPI } from "../../lib"
import { ArticlesPageWrapper } from "./ArticlesPage.styles"

const ArticlesPage = () => {
  return (
    <ArticlesPageWrapper>
      <h1>Articles</h1>
    </ArticlesPageWrapper>
  )
}

export default ArticlesPage
