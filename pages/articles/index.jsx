import PropTypes from "prop-types"
import styled from "@emotion/styled"
import { useColorMode } from "../../hooks/useColorMode"
import { Articles, Seo, BlogPostCard, GridLayout } from "../../components"
import { Grid } from "../../elements"
import { fetchAPI } from "../../lib"

const ArticlesPageWrapper = styled(Grid)`
  background-color: ${(props) => props.theme[props.colorMode].colors.primary};
  color: ${(props) => props.theme[props.colorMode].colors.textPrimary};
  min-height: calc(100vh - 16rem);

  .container {
    grid-column: 1 / span 10;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: fit-content;

    .card {
      height: 300px;
      justify-content: center;
      .title {
        max-width: 300px;
      }
    }
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    .container {
      grid-column: 1 / span 12;
    }
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    .container {
      padding-top: 4rem;
      grid-column: 2 / span 12;
      flex-direction: row;
      flex-wrap: wrap;
      .card {
        justify-content: space-between;
        /* flex-basis: auto; */
        min-height: 350px;
        width: 33%;
        background-color: ${(props) =>
          props.theme[props.colorMode].colors.primary};
        padding-bottom: 2rem;
      }
    }
  }
`

const ArticlesPage = ({ articles, categories }) => {
  const colorMode = useColorMode()
  return (
    // <ArticlesPageWrapper colorMode={colorMode.value}>
    //   <div className="container">
    //     {articles.map(({ id, title, publishedAt, slug }, index) => {
    //       return (
    //         <BlogPostCard
    //           colorType={index % 2 > 0 ? "primary" : "secondary"}
    //           key={`${id}-${title}`}
    //           title={title}
    //           publishedAt={publishedAt}
    //           slug={slug}
    //           className="card"
    //         />
    //       )
    //     })}
    //   </div>
    // </ArticlesPageWrapper>
    <GridLayout colorMode={colorMode.value}>
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
    </GridLayout>
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
