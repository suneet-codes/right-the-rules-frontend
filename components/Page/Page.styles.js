import styled from "@emotion/styled"

export const PageWrapper = styled.main`
  grid-column: 2 / span 6;
  grid-row: 2 / 3;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 0 0.5rem;

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 0 1rem;
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    grid-column: 2 / span 12;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0 1rem;
  }
`
