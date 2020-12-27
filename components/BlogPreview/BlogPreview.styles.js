import styled from "@emotion/styled"
import { Grid } from "../../elements"

const paddingTop = "4rem"

export const BlogPreviewWrapper = styled(Grid)`
  /* height: 500px; */
  background-color: ${(props) => {
    switch (props.colorType) {
      case "primary":
        return props.theme[props.colorMode].colors.primary
      case "secondary":
        return props.theme[props.colorMode].colors.primaryLight
      default:
        return props.theme[props.colorMode].colors.primary
    }
  }};
  color: ${(props) => props.theme[props.colorMode].colors.textPrimary};
  padding-top: ${paddingTop};

  .container {
    grid-column: 3 / span 6;
    display: flex;
    flex-direction: column;

    .card {
      margin-bottom: ${paddingTop};
    }
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    .container {
      grid-column: 4 / span 6;
    }
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    height: 500px;
    .container {
      padding: ${paddingTop} 0rem;
      grid-column: 2 / span 12;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 2rem;
      /* background-color: lightgreen; */
      margin-bottom: ${paddingTop};
      align-items: center;

      .card {
        margin-bottom: 0;
        align-self: stretch;
      }
    }
  }
`
