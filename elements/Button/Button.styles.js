import styled from "@emotion/styled"

export const ButtonWrapper = styled.a`
  padding: 0.5rem 1.5rem;
  background-color: ${(props) =>
    props.outline ? "transparent" : props.theme[props.colorMode].colors.link};
  border-style: ${(props) => (props.outline ? "solid" : "none")};
  border-color: ${(props) =>
    props.outline && props.theme[props.colorMode].colors.link};
  color: ${(props) => {
    switch (props.outline) {
      case true:
        return props.theme[props.colorMode].colors.textPrimary
      case false:
        return props.theme[props.colorMode].colors.textSecondary
      default:
        return props.theme[props.colorMode].colors.textSecondary
    }
  }};
  border-radius: 0.5rem;
  border-width: ${(props) => (props.outline ? "2px" : "0px")};
  cursor: pointer;
`
