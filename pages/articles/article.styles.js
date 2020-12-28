import styled from "@emotion/styled"
import { Grid } from "../../elements"
import { colors } from "../../styles"

export const ArticleWrapper = styled(Grid)`
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
