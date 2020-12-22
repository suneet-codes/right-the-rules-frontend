import { css } from "@emotion/react"

const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 12px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  @media only screen and (min-width: 640px) {
    html {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 992px) {
    html {
      font-size: 16px;
    }
  }
`
export default globalStyles
