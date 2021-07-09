import React from "react"
import { css } from "@emotion/react"
import Bubble from "./Bubble"
import { useMediaQuery } from "../hooks/mediaQuery"

const Bubbles = ({ bubbleCount, bubbleCountSp }) => {
  const mq = useMediaQuery()
  const bubbleEls = []
  let bubbleTotal
  if (mq.isPc) {
    bubbleTotal = bubbleCount
  } else {
    bubbleTotal = bubbleCountSp
  }

  for (let i = 0; i < bubbleTotal; i++) {
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
