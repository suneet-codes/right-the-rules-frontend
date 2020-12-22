import styled from "@emotion/styled"

export const SectionWrapper = styled.section`
  grid-column: 2 / span 4;
  /* background-color: lightpink;
  height: ${(props) => props.height}; */
  display: flex;
  .textArea {
    display: flex;
    flex-direction: column;
    /* width: 100%; */
    /* background-color: lightgreen; */
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
    .textArea {
      width: 50%;
      align-items: flex-start;
      text-align: left;
    }
  }
  @media ${(props) => props.theme.breakpoints.desktop} {
    grid-column: 2 / span 10;
  }
`
