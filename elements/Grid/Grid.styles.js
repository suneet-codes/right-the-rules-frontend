import styled from "@emotion/styled"

export const GridWrapper = styled.div`
  display: grid;
  min-height: 100vh;
  position: relative;
  font-family: ${(props) => props.theme.fonts.main};
  background-color: ${(props) => props.theme[props.colorMode].colors.primary};
  color: ${(props) => props.theme[props.colorMode].colors.textPrimary};
  grid-template-columns: ${(props) => {
    const mobileCols =
      props.theme.grid.mobile.margin +
      " " +
      props.theme.grid.mobile.columns +
      " " +
      props.theme.grid.mobile.margin
    return mobileCols
  }};
  grid-gap: ${(props) => props.theme.grid.mobile.gridGap};
  grid-template-rows: ${(props) => props.theme.grid.rows};

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-template-columns: ${(props) => {
      const tabletCols =
        props.theme.grid.tablet.margin +
        " " +
        props.theme.grid.tablet.columns +
        " " +
        props.theme.grid.tablet.margin
      return tabletCols
    }};
    grid-gap: ${(props) => props.theme.grid.tablet.gridGap};
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    grid-template-columns: ${(props) => {
      const desktopCols =
        props.theme.grid.desktop.margin +
        " " +
        props.theme.grid.desktop.columns +
        " " +
        props.theme.grid.desktop.margin
      return desktopCols
    }};
    grid-gap: ${(props) => props.theme.grid.desktop.gridGap};
  }
`
