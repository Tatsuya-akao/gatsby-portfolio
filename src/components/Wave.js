import React from "react"
import { css, keyframes } from "@emotion/react"
import waveImg from "../img/wave.svg"
import { mq } from "../styles/mq"

const Wave = ({ position }) => {
  return (
    <div
      css={[
        waveStyle,
        position === "top"
          ? wavePosTop
          : position === "bottom"
          ? wavePosBottom
          : position === "bottom-negative"
          ? wavePosBottomNegative
          : position === "top-negative"
          ? wavePosTopNegative
          : null,
      ]}
    ></div>
  )
}

const waves = keyframes`
  0% {
    background-position: 0 bottom;
  }
  100% {
    /* from width of the svg file */
    background-position: 160rem bottom;
  }
`

const wavesSp = keyframes`
  0% {
    background-position: 0 bottom;
  }
  100% {
    /* from width of the svg file */
    background-position: 80rem bottom;
  }
`

const waveStyle = css`
  width: 100%;
  height: 14rem;
  position: absolute;
  left: 0;
  animation: ${waves} 7s linear infinite;
  background: url(${waveImg});
  background-size: 160rem 14rem;
  background-repeat: repeat-x;

  ${mq("tab")} {
    height: 7rem;
    animation: ${wavesSp} 7s linear infinite;
    background-size: 80rem 7rem;
  }
`

const wavePosTop = css`
  top: -1px;
  transform: scale(-1, -1);
`

const wavePosBottom = css`
  bottom: -1px;
`

const wavePosTopNegative = css`
  top: -13.9rem;
  z-index: 1;

  ${mq("tab")} {
    top: -6.9rem;
  }
`

const wavePosBottomNegative = css`
  bottom: -13.9rem;
  transform: scale(-1, -1);
  z-index: 1;

  ${mq("tab")} {
    bottom: -6.9rem;
  }
`

export default Wave
