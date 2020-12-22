import styled from "@emotion/styled"

export const IconWrapper = styled.a`
  color: ${(props) => props.theme[props.colorMode].colors.primary};
  .svg-inline--fa.fa-w-14 {
    width: 1.375rem;
    height: 1.375rem;
  }
`
