import PropTypes from "prop-types"
import { PageWrapper } from "./Page.styles"

const Page = ({ children }) => {
  return <PageWrapper>{children}</PageWrapper>
}

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
}
export default Page
