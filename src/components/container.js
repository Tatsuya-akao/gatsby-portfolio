import React from "react"
import { css } from "@emotion/react"
import { container } from "../styles/container"

const Container = props => {
  return <div css={containerStyle}>{props.children}</div>
}

const containerStyle = props => css`
  ${container};
`

export default Container
