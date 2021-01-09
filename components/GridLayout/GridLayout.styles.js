import styled from "@emotion/styled"
import { Grid } from "../../elements"

export const GridLayoutWrapper = styled(Grid)`
  background-color: ${(props) => props.theme[props.colorMode].colors.primary};
  color: ${(props) => props.theme[props.colorMode].colors.textPrimary};

  min-height: calc(100vh - 16rem);
  align-items: center;
  /* justify-items: center; */

  .container {
    grid-column: 1 / span 10;
    /* background-color: lightgreen; */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    /* grid-template-columns: 300px; */
    /* grid-auto-rows: 300px; */
    padding: 3rem 0rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    .container {
      grid-column: 2 / span 10;
      /* grid-template-columns: 300px 300px; */
    }
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    .container {
      grid-column: 2 / span 12;
      /* border: 1px solid
        ${(props) => props.theme[props.colorMode].colors.secondary}; */
      /* grid-template-columns: 300px 300px 300px; */
    }
  }
`
