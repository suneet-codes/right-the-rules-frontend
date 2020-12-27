import styled from "@emotion/styled"

export const SubGridWrapper = styled.div`
  grid-column: 1 / span 10;
  /* display: grid;
  grid-template-columns: ${(props) => props.theme.grid.mobile.columns};
  grid-gap: ${(props) => props.theme.grid.mobile.gridGap}; */

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 12;
    /* grid-template-columns: ${(props) => props.theme.grid.tablet.columns};
    grid-gap: ${(props) => props.theme.grid.tablet.gridGap}; */
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    grid-column: 1 / span 14;
    /* grid-template-columns: ${(props) => props.theme.grid.desktop.columns};
    grid-gap: ${(props) => props.theme.grid.desktop.gridGap};
  } */
  }
`
