import React from "react"
import { css } from "@emotion/react"
import BlogItem from "./blogItem"
import blogData from "../../../data/blogData"
import { mq } from "../../../styles/mq"

const blogList = () => {
  return (
    <ul css={blogListStyle}>
      {blogData.map(blog => {
        return <BlogItem {...blog} key={blog.id} />
      })}
    </ul>
  )
}

const blogListStyle = css`
  display: flex;
  flex-wrap: wrap;

  ${mq("tab")} {
    justify-content: space-between;
  }
`

export default blogList
