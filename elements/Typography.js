/** html font-size is being set within the globalStyles.js for each media query, thus the fonts below scale with the size of screen */

/** Each element below consumes theme values for most properties. Some elements below take additional props passed directly into their render:
 *
 * bold: (default render is normal weight, pass bold in for bold variant)
 * mb: (margin-bottom - if this is passed, margin-bottom value is added from theme)
 */

import styled from "@emotion/styled"

export const H5 = styled.h5`
  font-style: normal;
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  line-height: ${(props) => props.theme.typography.h5.lineHeight};
  margin-bottom: ${(props) =>
    props.mb ? props.theme.typography.h5.marginBottom : 0};
`
export const H4 = styled.h4`
  font-style: normal;
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  font-size: ${(props) => props.theme.typography.h4.fontSize};
  line-height: ${(props) => props.theme.typography.h4.lineHeight};
  margin-bottom: ${(props) =>
    props.mb ? props.theme.typography.h4.marginBottom : 0};
`

export const H3 = styled.h3`
  font-style: normal;
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  font-size: ${(props) => props.theme.typography.h3.fontSize};
  line-height: ${(props) => props.theme.typography.h3.lineHeight};
  margin-bottom: ${(props) =>
    props.mb ? props.theme.typography.h3.marginBottom : 0};
`

export const H2 = styled.h2`
  font-style: normal;
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  font-size: ${(props) => props.theme.typography.h2.fontSize};
  line-height: ${(props) => props.theme.typography.h2.lineHeight};
  margin-bottom: ${(props) =>
    props.mb ? props.theme.typography.h2.marginBottom : 0};
`

export const H1 = styled.h1`
  font-style: normal;
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  font-size: ${(props) => props.theme.typography.h1.fontSize};
  line-height: ${(props) => props.theme.typography.h1.lineHeight};
  margin-bottom: ${(props) =>
    props.mb ? props.theme.typography.h1.marginBottom : 0};
`

export const P = styled.p`
  font-style: normal;
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  font-size: ${(props) => props.theme.typography.p.fontSize};
  line-height: ${(props) => props.theme.typography.p.lineHeight};
  margin-bottom: ${(props) =>
    props.mb ? props.theme.typography.p.marginBottom : 0};
`
export const Label = styled.p`
  font-style: normal;
  font-family: ${(props) => props.theme.fonts.main};
  font-weight: ${(props) => (props.bold ? 700 : 400)};
  font-size: ${(props) => props.theme.typography.label.fontSize};
  line-height: ${(props) => props.theme.typography.label.lineHeight};
  margin-bottom: ${(props) =>
    props.mb ? props.theme.typography.label.marginBottom : 0};
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
