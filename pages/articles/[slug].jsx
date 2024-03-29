/** Dynamic page for rendering individual articles at the `/article` path */
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import ReactMarkdown from "react-markdown"
import { fetchAPI } from "../../lib/api"
import { useColorMode } from "../../hooks/useColorMode"
import { getStrapiMedia } from "../../lib/media"
import { colors } from "../../styles"
import { Image, Seo } from "../../components"
import { H1, Label, Button, Grid } from "../../elements"

const ArticleWrapper = styled(Grid)`
  background-color: ${(props) => props.theme[props.colorMode].colors.primary};
  color: ${(props) => props.theme[props.colorMode].colors.textPrimary};
  min-height: calc(100vh - 16rem);

  .container {
    grid-column: 2 / span 8;
    margin-bottom: 3rem;
    h1 {
      text-align: center;
      padding-top: 3rem;
    }

    p {
      line-height: 2rem;
    }
    .content {
      padding-top: 2.5rem;
    }

    .content p {
      margin-bottom: 2rem;
    }

    .label {
      padding-top: 2.5rem;
      text-align: center;
    }

    .content a {
      font-weight: 700;
      color: ${colors.pink3};
      &:hover {
        color: ${colors.dark1};
      }
    }

    .buttonContainer {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      a {
        margin: 0rem 0.25rem;
        width: 120px;
        text-align: center;
        p {
          line-height: 1.5rem;
        }
      }
    }
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    .container {
      grid-column: 3 / span 8;

      /* h1 {
        padding-top: 3rem;
      } */

      /* .label {
        padding-top: 2.5rem;
        text-align: center;
      } */
      /* .content {
        padding-top: 2.5rem;
      } */
    }
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    .container {
      grid-column: 3 / span 10;
    }
  }
`

const Article = ({
  article,
  categories,
  articleCount,
  currentIndex,
  nextArticle,
  prevArticle,
}) => {
  const colorMode = useColorMode()
  const imageUrl = getStrapiMedia(article.image)

  const seo = {
    metaTitle: article.title,
    metaDescription: article.description,
    shareImage: article.image,
    article: true,
  }

  const publishedDate = new Date(article.publishedAt).toLocaleDateString(
    "en-GB",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  )

  return (
    <>
      <Seo seo={seo} />
      <ArticleWrapper colorMode={colorMode.value}>
        <div className="container">
          <H1>{article.title}</H1>
          <Label className="label">{`by ${article.author.name} on ${publishedDate}`}</Label>
          <ReactMarkdown
            source={article.content}
            escapeHtml={false}
            className="content"
          />
          <div className="buttonContainer">
            {prevArticle ? (
              <Button disabled href={`/articles/${prevArticle}`} outline>
                previous
              </Button>
            ) : (
              <Button disabled href={`/articles`} outline>
                articles
              </Button>
            )}
            {nextArticle ? (
              <Button href={`/articles/${nextArticle}`} outline>
                next
              </Button>
            ) : (
              <Button disabled href={`/articles`} outline>
                articles
              </Button>
            )}
          </div>
        </div>
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
    </>
  )
}

Article.propTypes = {
  article: PropTypes.object.isRequired,
  categories: PropTypes.array,
  nextArticle: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
    .isRequired,
  prevArticle: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
    .isRequired,
}

Article.defaultProps = {
  categories: [],
}

export const getStaticPaths = async () => {
  const articles = await fetchAPI("/articles")

  return {
    paths: articles.map(({ slug }) => {
      return {
        params: { slug },
      }
    }),
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const [article] = await fetchAPI(`/articles?slug=${slug}&status=published`)
  const categories = await fetchAPI("/categories")
  const articles = await fetchAPI("/articles?status=published")

  const totalArticles = articles.length - 1
  const currentIndex = articles.findIndex((article) => {
    return article.slug === slug
  })

  return {
    props: {
      article,
      categories,
      currentIndex,
      nextArticle:
        currentIndex < totalArticles ? articles[currentIndex + 1].slug : false,
      prevArticle: currentIndex > 0 ? articles[currentIndex - 1].slug : false,
    },
    revalidate: 1,
  }
}

export default Article
