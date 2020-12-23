import styled from "@emotion/styled"

export const SectionWrapper = styled.section`
  height: ${(props) => {
    switch (props.size) {
      case "small":
        return "fit-content"
      case "medium":
        return "500px"
      case "large":
        return "1000px"
      case "mainstage":
        return "calc(100vh - 8rem)"
      default:
        return "500px"
    }
  }};
  display: flex;
  flex-direction: column;
  align-items: center;

  .textArea {
    order: 2;
    width: 100%;
  }

  svg {
    padding: 2rem;
    order: 1;
    width: 90%;
    height: fit-content;
  }
  /* display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto 100%;
  grid-row-gap: 1rem;
  grid-template-areas:
    "top"
    "bottom"; 
     */
  /* .textArea {
    padding: 0 1rem;
    align-self: start;
    grid-area: bottom;
    width: 100%;
  } */

  /* svg {
    padding: 0 1rem;
    grid-area: top;
    width: 100%;
    align-self: end;
  } */

  @media ${(props) => props.theme.breakpoints.tablet} {
    display: grid;
    grid-template-columns: calc(50% - 1.5rem) calc(50% - 1.5rem);
    grid-column-gap: 3rem;
    grid-template-areas:
      "left right"
      "left right";

    .textArea {
      grid-area: ${(props) =>
        props.textPosition === "left" ? "left" : "right"};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-self: center;
      text-align: left;
    }

    svg {
      align-self: center;
      width: 100%;
      grid-area: ${(props) =>
        props.textPosition === "left" ? "right" : "left"};
    }
  }
  @media ${(props) => props.theme.breakpoints.desktop} {
  }
`

// export const SectionWrapper = styled.section`
//   height: ${(props) => {
//     switch (props.size) {
//       case "small":
//         return "fit-content"
//       case "medium":
//         return "500px"
//       case "large":
//         return "1000px"
//       default:
//         return "500px"
//     }
//   }};
//   grid-column: 1 / span 6;
//   display: grid;
//   grid-template-columns: ${(props) => props.theme.grid.mobile.columns};
//   grid-template-rows: auto auto;
//   grid-gap: ${(props) => props.theme.grid.mobile.gridGap};
//   /* background-color: lightpink; */
//   grid-template-areas:
//     ". top top top top ."
//     "bottom bottom bottom bottom bottom bottom";

//   .textArea {
//     grid-area: bottom;
//     padding: 1rem;
//   }

//   svg {
//     /* width: 100%; */
//     padding: 1rem;
//     grid-area: top;
//   }

//   @media ${(props) => props.theme.breakpoints.tablet} {
//     grid-column: 1 / span 10;
//     grid-template-columns: ${(props) => props.theme.grid.tablet.columns};
//     grid-gap: ${(props) => props.theme.grid.tablet.gridGap};
//     grid-template-rows: auto;
//     grid-template-areas: ". left left left left right right right right .";

//     .textArea {
//       grid-area: ${(props) =>
//         props.textPosition === "left" ? "left" : "right"};
//       display: flex;
//       flex-direction: column;
//       align-items: flex-start;
//       align-self: center;
//       text-align: left;
//     }

//     svg {
//       align-self: center;
//       width: 100%;
//       grid-area: ${(props) =>
//         props.textPosition === "left" ? "right" : "left"};
//     }
//   }

//   @media ${(props) => props.theme.breakpoints.desktop} {
//     grid-column: 2 / span 12;
//     grid-template-columns: ${(props) => props.theme.grid.desktop.columns};
//     grid-gap: ${(props) => props.theme.grid.desktop.gridGap};
//     grid-template-rows: auto;
//     grid-template-areas: " . left left left left left right right right right right . ";
//   }
// `

// export const SectionWrapper = styled.section`
//   min-height: fit-content;
//   width: 100%;
//   grid-column: 1 / span 6;
//   /* background: lavender; */
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   .textArea {
//     order: 2;
//     padding: 2rem;
//     justify-content: flex-start;
//     /* background-color: red; */
//     /* height: 50%; */
//   }

//   svg {
//     order: 1;
//     max-width: 300px;
//     height: fit-content;
//   }

//   @media ${(props) => props.theme.breakpoints.tablet} {
//     grid-column: 1 / span 10;
//     flex-direction: row;
//     justify-content: center;
//     align-items: center;
//     height: 32rem;
//     .textArea {
//       padding-top: 0rem;
//       padding-bottom: 0rem;
//       padding-right: ${(props) =>
//         props.textPosition === "left" ? "4rem" : "0rem"};
//       padding-left: ${(props) =>
//         props.textPosition === "left" ? "0rem" : "4rem"};
//       width: 50%;
//       order: ${(props) => (props.textPosition === "left" ? 1 : 2)};
//       justify-content: center;
//       align-items: flex-start;
//       text-align: left;
//     }
//     svg {
//       order: ${(props) => (props.textPosition === "left" ? 2 : 1)};
//       max-width: 300px;
//       justify-content: center;
//     }
//   }
//   @media ${(props) => props.theme.breakpoints.desktop} {
//     grid-column: 2 / span 10;
//   }
// `
