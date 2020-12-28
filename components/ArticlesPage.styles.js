import styled from "@emotion/styled"
import { Grid } from "../elements"

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
export default ArticlesPageWrapper
