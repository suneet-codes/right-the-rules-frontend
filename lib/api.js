/** Create function to retreive correct path for API access - if .env contains strapi url then uses that, else uses localhost address */
export const getStrapiURL = (path = "") => {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`
}

/** Create function for consuming path to fetch data from Strapi API */
export const fetchAPI = async (path) => {
  const requestUrl = getStrapiURL(path)
  const response = await fetch(requestUrl)
  const data = await response.json()
  return data
}
