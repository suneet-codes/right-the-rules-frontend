import styled from "@emotion/styled"

export const FooterWrapper = styled.footer`
  grid-column: 1 / span 8;
  grid-row: 3 / 4;
  background-color: ${(props) => props.theme[props.colorMode].colors.secondary};
  color: ${(props) => props.theme[props.colorMode].colors.textSecondary};
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.desktop} {
    grid-column: 1 / span 14;
  }
`
