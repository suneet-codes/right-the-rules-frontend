import styled from "@emotion/styled"
import { Grid } from "../../elements"

export const TextByImageWrapper = styled(Grid)`
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

  .container {
    padding: 5rem 0rem;
    grid-column: 2 / span 8;
    min-height: ${(props) => {
      switch (props.size) {
        case "small":
          return "fit-content"
        case "medium":
          return "500px"
        case "large":
          return "1000px"
        case "mainstage":
          return "calc(100vh - 8rem)"
        default:
          return "500px"
      }
    }};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .textArea {
      order: 2;
      max-width: 400px;
    }
    svg {
      padding-bottom: 5rem;
      order: 1;
      width: 300px;
      height: fit-content;
    }
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    .container {
      grid-column: 2 / span 10;
      display: grid;
      grid-template-columns: calc(50% - 1.5rem) calc(50% - 1.5rem);
      grid-column-gap: 3rem;
      grid-template-areas:
        "left right"
        "left right";

      .textArea {
        grid-area: ${(props) =>
          props.textPosition === "left" ? "left" : "right"};
        justify-self: ${(props) =>
          props.textPosition === "left" ? "start" : "end"};
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: center;
        text-align: left;
      }

      svg {
        padding-bottom: 0;
        align-self: center;
        width: 100%;
        grid-area: ${(props) =>
          props.textPosition === "left" ? "right" : "left"};
      }
    }
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    .container {
      grid-column: 2 / span 12;
    }
  }
`
