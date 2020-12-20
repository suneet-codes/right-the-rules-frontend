import styled from "@emotion/styled"

export const NavDrawerWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: ${(props) => props.theme[props.colorMode].colors.primary};
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateX(${(props) => props.position});
  transition: 0.5s;

  .navDrawer li {
    padding: 2rem 0rem;
  }
`
