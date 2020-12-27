/** Dynamic page for rendering individual articles at the `/article` path */
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import { fetchAPI } from "../../lib/api"
import { getStrapiMedia } from "../../lib/media"
import { Layout, Image, Seo } from "../../components"
import { Main } from "../../elements"
import { ArticleWrapper } from "./article.styles"

const Article = ({ article, categories }) => {
  console.log(article.content)
  const imageUrl = getStrapiMedia(article.image)

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  }

  return (
    // <Layout categories={categories}>
    <Main>
      <Seo seo={seo} />
      <ArticleWrapper>
        <h1>{article.title}</h1>
        <ReactMarkdown source={article.content} escapeHtml={false} />
        <h1>{article.publishedAt}</h1>
        <h1>{article.author.name}</h1>
      </ArticleWrapper>
      {/* <div
        id="banner"
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
        // style={{ gridColumn: "2 / span 6 " }}
      >
        <h1>{article.title}</h1>
      </div>
      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown source={article.content} escapeHtml={false} />
          <hr className="uk-divider-small" />
          <div className="uk-grid-small uk-flex-left" data-uk-grid="true">
            <div>
              {article.author.picture && (
                <Image
                  image={article.author.picture}
                  style={{
                    position: "static",
                    borderRadius: "50%",
                    height: 30,
                  }}
                />
              )}
            </div>
            <div className="uk-width-expand">
              <p className="uk-margin-remove-bottom">
                By {article.author.name}
              </p>
              <p className="uk-text-meta uk-margin-remove-top">
                <Moment format="MMM Do YYYY">{article.published_at}</Moment>
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </Main>
    // </Layout>
  )
}

Article.propTypes = {
  article: PropTypes.object.isRequired,
  categories: PropTypes.array,
}

Article.defaultProps = {
  categories: [],
}

export const getStaticPaths = async () => {
  const articles = await fetchAPI("/articles")

  return {
    paths: articles.map((article) => ({ params: { slug: article.slug } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const articles = await fetchAPI(
    `/articles?slug=${params.slug}&status=published`
  )
  const categories = await fetchAPI("/categories")

  return {
    props: { article: articles[0], categories },
    revalidate: 1,
  }
}

export default Article
