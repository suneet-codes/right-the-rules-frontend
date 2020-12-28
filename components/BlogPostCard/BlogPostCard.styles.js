import styled from "@emotion/styled"

export const BlogPostCardWrapper = styled.div`
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

  .label {
    padding-top: 1rem;
  }

  .title {
    padding: 1rem 0rem;
  }
  a {
    margin: 2rem;
  }
`
