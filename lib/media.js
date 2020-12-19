import { getStrapiURL } from "./api"

/** This function will return the correct path for an image url. If the image is locally hosted, it will start with a '/' however, if it's stored on Cloudinary it will begin with 'https://' */
export const getStrapiMedia = (media) => {
  const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url
  return imageUrl
}
