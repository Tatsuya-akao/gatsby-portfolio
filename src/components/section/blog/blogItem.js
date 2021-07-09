import React from "react"
import { css } from "@emotion/react"
import { color } from "../../../styles/variables"
import { mq } from "../../../styles/mq"

const blogItem = props => {
  const { url, imgUrl } = props

  return (
    <li css={blogCard}>
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

  ${mq("tab")} {
    width: calc(50% - 2.66%);
    margin-right: 0;
    margin-top: 5.33%;
  }

  ${mq("sp")} {
    width: 100%;
  }

  &:hover {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.06);
    transform: translateY(-0.8rem);

    ${mq("tab")} {
      transform: translateY(-0.8rem);
    }
  }

  &:nth-of-type(3n) {
    margin-right: 0;
  }
`

export default blogItem
