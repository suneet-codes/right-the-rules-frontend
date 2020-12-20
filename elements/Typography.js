import styled from "@emotion/styled"

export const H5 = styled.h5`
  font-family: ${(props) => props.theme.fonts.main};
  font-style: normal;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  margin: 0;
`

export const UL = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  flex-direction: ${(props) => {
    switch (props.direction) {
      case "row":
        return "row"
      case "column":
        return "column"
      default:
        return "row"
    }
  }};
`
