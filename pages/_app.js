import App from "next/app"
import Head from "next/head"
import { Global, ThemeProvider } from "@emotion/react"
import { ColorModeProvider } from "../hooks/useColorMode"
import { NavDrawerProvider } from "../hooks/useNavDrawer"
import { theme, globalStyles } from "../styles"
import { createContext } from "react"
import { getStrapiMedia } from "../lib/media"
import { fetchAPI } from "../lib/api"
import { NavDrawer, Nav, Footer } from "../components"
import { Grid, Main } from "../elements"
import PropTypes from "prop-types"

/** Store Strapi Global object in context */
export const GlobalContext = createContext({})

const MyApp = ({ Component, pageProps }) => {
  const { global } = pageProps

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalContext.Provider value={global}>
        <NavDrawerProvider>
          <ColorModeProvider>
            <ThemeProvider theme={theme}>
              <Global styles={globalStyles} />
              <Grid main={true}>
                {/* <NavDrawer /> */}
                <Nav />
                <Main>
                  <Component {...pageProps} />
                </Main>
                <Footer />
              </Grid>
            </ThemeProvider>
          </ColorModeProvider>
        </NavDrawerProvider>
      </GlobalContext.Provider>
    </>
  )
}

MyApp.getInitialProps = async (ctx) => {
  /**
   * getInitialProps disables automatic static optimization for pages that don't
   * have getStaticProps. So article, category and home pages still get SSG.
   * Hopefully we can replace this with getStaticProps once this issue is fixed:
   * https://github.com/vercel/next.js/discussions/10949
   */

  /** Calls page's getInitialProps and fills appProps.pageProps */
  const appProps = await App.getInitialProps(ctx)

  /** Fetch glogal site settings from Strapi */
  const global = await fetchAPI("/global")

  /** Pass the data to our page via props */
  return { ...appProps, pageProps: { global } }
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default MyApp
