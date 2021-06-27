import React from "react"
import { css } from "@emotion/react"
import Bubble from "./bubble"

const Bubbles = ({ bubbleCount }) => {
  const bubbleEls = []
  for (let i = 0; i < bubbleCount; i++) {
    bubbleEls.push(<Bubble key={i} />)
  }

  return <div css={bubbleWrap}>{bubbleEls}</div>
}

const bubbleWrap = css`
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

export default Bubbles
