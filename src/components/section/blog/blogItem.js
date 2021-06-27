import React from "react"
import { css } from "@emotion/react"
import { color } from "../../../styles/variables"

const blogItem = props => {
  const { title, url, imgUrl } = props

  return (
    <li css={blogCard}>
      {/* <h3>{title}</h3> */}
      <a href={url} target="_blank" rel="noopener noreferrer">
        {imgUrl}
      </a>
    </li>
  )
}

const blogCard = css`
  width: 31%;
  margin-right: 3.5%;
  margin-top: 3.5%;
  padding: 6px;
  background-color: ${color.white};
  transition: all 0.2s ease-out;

  &:hover {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.06);
    transform: scale(1.06);
  }

  &:nth-of-type(3n) {
    margin-right: 0;
  }
`

export default blogItem
