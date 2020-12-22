import styled from "@emotion/styled"

export const FooterWrapper = styled.footer`
  grid-column: 1 / span 8;
  grid-row: 3 / 4;
  background-color: ${(props) => props.theme[props.colorMode].colors.secondary};
  color: ${(props) => props.theme[props.colorMode].colors.textSecondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .social-icons-container {
    padding-bottom: 0.25rem;
    a {
      padding: 0.25rem;
    }
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 12;
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    grid-column: 1 / span 14;
  }
`
