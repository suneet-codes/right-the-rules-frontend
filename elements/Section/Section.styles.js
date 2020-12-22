import styled from "@emotion/styled"

export const SectionWrapper = styled.section`
  min-height: fit-content;
  width: 100%;
  grid-column: 1 / span 6;
  /* background: lavender; */
  display: flex;
  flex-direction: column;

  .textArea {
    /* text-align: center; */
    padding: 2rem;
    height: 50%;
    order: 2;
  }

  img {
    order: 1;
    height: 50%;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 10;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 32rem;
    .textArea {
      padding-top: 0rem;
      padding-bottom: 0rem;
      padding-right: ${(props) =>
        props.textPosition === "left" ? "4rem" : "0rem"};
      padding-left: ${(props) =>
        props.textPosition === "left" ? "0rem" : "4rem"};
      width: 50%;
      order: ${(props) => (props.textPosition === "left" ? 1 : 2)};
      justify-content: center;
      align-items: flex-start;
      text-align: left;
    }
    img {
      order: ${(props) => (props.textPosition === "left" ? 2 : 1)};
      width: 50%;
      justify-content: center;
    }
  }
  @media ${(props) => props.theme.breakpoints.desktop} {
    grid-column: 2 / span 10;
  }
`
