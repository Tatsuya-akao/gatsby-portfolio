import React from "react"
import WorksItem from "./worksItem"
import { css } from "@emotion/react"
import { mq } from "../../../styles/mq"

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

  ${mq("tab")} {
    justify-content: space-between;
  }

  ${mq("sp")} {
    margin-top: 2rem;
  }
`

export default worksList
