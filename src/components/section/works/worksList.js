import React from "react"
import WorksItem from "./worksItem"
import { css } from "@emotion/react"

const worksList = ({ works }) => {
  return (
    <ul css={workListStyle}>
      {works.map((work, index) => {
        return <WorksItem work={work} key={index} />
      })}
    </ul>
  )
}

const workListStyle = css`
  display: flex;
  flex-wrap: wrap;
  margin-top: 4rem;
`

export default worksList
