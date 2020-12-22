import styled from "@emotion/styled"

export const H5 = styled.h5`
  font-family: ${(props) => props.theme.fonts.main};
  font-style: normal;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  margin: 0;
`
export const H4 = styled.h4`
  font-family: ${(props) => props.theme.fonts.main};
  font-style: normal;
  font-size: 1.5625rem;
  line-height: 1.875rem;
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  margin: 0;
`

export const H3 = styled.h3`
  font-family: ${(props) => props.theme.fonts.main};
  font-style: normal;
  font-size: 1.953rem;
  line-height: 2.3125rem;
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  margin: 0;
`

export const H2 = styled.h2`
  font-family: ${(props) => props.theme.fonts.main};
  font-style: normal;
  font-size: 2.4375rem;
  line-height: 2.9375rem;
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  margin: 0;
`

export const H1 = styled.h1`
  font-family: ${(props) => props.theme.fonts.main};
  font-style: normal;
  font-size: 3.0625rem;
  line-height: 3.6875rem;
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  margin: 0;
`

export const P = styled.p`
  font-family: ${(props) => props.theme.fonts.main};
  font-style: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  margin: 0;
`
export const Label = styled.p`
  font-family: ${(props) => props.theme.fonts.main};
  font-style: normal;
  font-size: 0.75rem;
  line-height: 0.875rem;
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
