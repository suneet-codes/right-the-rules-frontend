import styled from "@emotion/styled"

export const NavWrapper = styled.nav`
  position: relative;
  grid-column: 2 / span 6;
  grid-row: 1 / 2;
  width: 100%;
  display: flex;
  justify-content: center;

  .logo {
    padding: 1rem 0rem;
    height: 100%;
  }

  .hamburger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 3.5rem;
    position: absolute;
    top: 0;
    right: 0;
  }

  .navLinks {
    display: none;
  }
  button {
    all: unset;
    cursor: pointer;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    & {
      justify-content: space-between;
    }
    .navLinks {
      display: flex;
    }
    .navLinks li {
      padding-right: 1rem;
    }
    .navLinks li:last-child {
      padding-right: 0rem;
    }
    .logo {
      padding: 3rem 0rem;
      justify-content: flex-start;
    }
    .hamburger {
      display: none;
    }
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    grid-column: 2 / span 12;

    .navLinks li {
      padding-right: 2rem;
    }
  }
`
