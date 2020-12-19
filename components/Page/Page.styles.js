import styled from "@emotion/styled"

export const PageWrapper = styled.main`
  grid-column: 2 / span 6;
  grid-row: 2 / 3;

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    grid-column: 2 / span 12;
  }
`
