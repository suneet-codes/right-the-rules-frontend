import styled from "@emotion/styled"

export const MainWrapper = styled.main`
  grid-column: 1 / span 10;

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 12;
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    grid-column: 1 / span 14;
  }
`
