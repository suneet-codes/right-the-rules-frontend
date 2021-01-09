import styled from "@emotion/styled"

export const BlogPostCardWrapper = styled.div`
  /* height: 300px;
  width: 300px; */
  background-color: ${(props) => {
    switch (props.colorType) {
      case "primary":
        return props.theme[props.colorMode].colors.primary
      case "secondary":
        return props.theme[props.colorMode].colors.primaryLight
      default:
        return props.theme[props.colorMode].colors.primary
    }
  }};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  min-height: fit-content;
  padding: 0rem 1rem;

  .label {
    padding-top: 4rem;
  }

  .title {
    padding: 1rem 0rem;
  }
  a {
    margin-bottom: 3rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
  }

  @media ${(props) => props.theme.breakpoints.desktop} {
    /* background-color: lightcoral; */
    /* height: 300px;
    width: 300px; */
    /* .label {
      padding-top: 4rem;
    }

    .title {
      padding: 1rem 0rem;
    }
    a {
      margin-bottom: 3rem;
    } */
  }
`
