import styled from "@emotion/styled"

export const SubGridWrapper = styled.div`
  grid-column: 2 / span 6;
  display: grid;
  grid-template-columns: ${(props) => props.theme.grid.mobile.columns};
  grid-gap: ${(props) => props.theme.grid.mobile.gridGap};

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 10;
    grid-template-columns: ${(props) => props.theme.grid.tablet.columns};
    grid-gap: ${(props) => props.theme.grid.tablet.gridGap};
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    grid-column: 2 / span 12;
    grid-template-columns: ${(props) => props.theme.grid.desktop.columns};
    grid-gap: ${(props) => props.theme.grid.desktop.gridGap};
  }
`
