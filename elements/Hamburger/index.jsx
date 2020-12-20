import PropTypes from "prop-types"
const Hamburger = ({ open }) => {
  return open ? (
    <svg width="14" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.643 7.835l5.012-5.328a1.29 1.29 0 00.343-.882c0-.331-.123-.648-.343-.882a1.135 1.135 0 00-.827-.366c-.31 0-.608.132-.828.366L7 6.084 2 .743a1.135 1.135 0 00-.828-.366C.862.377.564.51.345.743a1.29 1.29 0 00-.343.882c0 .33.123.648.343.882l5.012 5.328-5.012 5.33c-.11.115-.196.252-.255.404a1.313 1.313 0 000 .955c.059.151.146.289.255.404.108.117.237.21.38.272a1.103 1.103 0 00.896 0c.142-.063.27-.155.379-.272l5-5.341 5 5.341c.108.117.237.21.38.272a1.103 1.103 0 00.896 0c.142-.063.27-.155.38-.272a1.25 1.25 0 00.254-.404 1.315 1.315 0 000-.955 1.248 1.248 0 00-.255-.405L8.643 7.835z"
        fill="#00161F"
      />
    </svg>
  ) : (
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x=".5" y=".5" width="23" height="23" rx="7.5" stroke="#00161F" />
      <path
        stroke="#00161F"
        strokeWidth="3"
        strokeLinecap="round"
        d="M5.25 6h13.5M5.25 12h13.5M5.25 18h13.5"
      />
    </svg>
  )
}

Hamburger.propTypes = {
  open: PropTypes.bool,
}

Hamburger.defaultProps = {
  open: false,
}
export default Hamburger
