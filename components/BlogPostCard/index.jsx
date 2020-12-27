import PropTypes from "prop-types"
import Link from "next/link"
import { BlogPostCardWrapper } from "./BlogPostCard.styles"
import { H4, Label, Button } from "../../elements"

import React from "react"

const BlogPostCard = ({ title, publishedAt, slug }) => {
  console.log(publishedAt)
  const publishedDate = new Date(publishedAt).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  console.log(publishedDate)
  return (
    <BlogPostCardWrapper>
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
}

export default BlogPostCard
