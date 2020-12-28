import PropTypes from "prop-types"
import Link from "next/link"
import { useColorMode } from "../../hooks/useColorMode"
import { BlogPostCardWrapper } from "./BlogPostCard.styles"
import { H4, Label, Button } from "../../elements"

import React from "react"

const BlogPostCard = ({ title, publishedAt, slug, className, colorType }) => {
  const colorMode = useColorMode()
  const publishedDate = new Date(publishedAt).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  return (
    <BlogPostCardWrapper
      className={className}
      colorType={colorType}
      colorMode={colorMode.value}
    >
      <div>
        <Label className="label">{publishedDate}</Label>
        <H4 className="title">{title}</H4>
      </div>
      <Button mb outline href={`/articles/${slug}`}>
        read more
      </Button>
    </BlogPostCardWrapper>
  )
}

BlogPostCard.propTypes = {
  title: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  className: PropTypes.string,
  colorType: PropTypes.string,
}

BlogPostCard.defaultProps = {
  className: "",
  colorType: "primary",
}

export default BlogPostCard
