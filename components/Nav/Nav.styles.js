import styled from "@emotion/styled"
import { Grid } from "../../elements"

export const NavWrapper = styled(Grid)`
  grid-column: 1 / span 10;
  grid-row: 1 / 2;

  background-color: ${(props) => props.theme[props.colorMode].colors.primary};
  color: ${(props) => props.theme[props.colorMode].colors.textPrimary};

  .container {
    position: relative;
    grid-column: 2 / span 8;
    height: 100%;
    display: flex;
    justify-content: center;

    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 1rem 0rem;
    }

    .hamburger {
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 0;
      height: 8rem;
    }

    .navLinks {
      display: none;
    }
    button {
      all: unset;
      cursor: pointer;
    }
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 12;
    .container {
      grid-column: 2 / span 10;

      & {
        justify-content: space-between;
        align-items: center;
      }
      .navLinks {
        display: flex;
      }
      .navLinks li {
        padding-right: 2rem;
      }
      .navLinks li:last-child {
        padding-right: 0rem;
      }
      .hamburger {
        display: none;
      }
    }
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    grid-column: 1 / span 14;
    .container {
      grid-column: 2 / span 12;
    }
  }
`
