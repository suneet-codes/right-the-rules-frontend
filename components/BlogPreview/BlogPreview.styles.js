import styled from "@emotion/styled"

export const BlogPreviewWrapper = styled.section`
  background: rgba(177, 195, 205);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  a {
    margin-bottom: 2rem;
  }

  @media ${(props) => props.theme.breakpoints.tablet} {
    height: 500px;
    a {
      margin-bottom: 2rem;
    }
  }
`
