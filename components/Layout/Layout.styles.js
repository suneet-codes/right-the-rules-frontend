import styled from "@emotion/styled"

export const LayoutWrapper = styled.div`
  min-height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: minmax(auto 1rem) repeat(6, 1fr) minmax(auto 1rem);
  grid-gap: 0 0.5rem;
  grid-template-rows: 8rem auto 8rem;
  font-family: ${(props) => props.theme.fonts.main};
  background-color: ${(props) => props.theme[props.colorMode].colors.primary};
  color: ${(props) => props.theme[props.colorMode].colors.textPrimary};

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    grid-gap: 0 1rem;
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    grid-template-columns: minmax(3rem, 1fr) repeat(12, minmax(auto, 4.2rem)) minmax(
        3rem,
        1fr
      );
    grid-gap: 0 1rem;
  }
`
