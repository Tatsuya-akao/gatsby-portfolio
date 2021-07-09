import React from "react"
import { css, keyframes } from "@emotion/react"
import { mq } from "../styles/mq"
import { useMediaQuery } from "../hooks/mediaQuery"

const Bubble = () => {
  const mq = useMediaQuery()

  let bubbleSize
  if (mq.isPc) {
    bubbleSize = Math.random() * 20 + 20
  } else if (mq.isMobile) {
    bubbleSize = Math.random() * 15 + 10
  }

  let sec
  if (mq.isPc) {
    sec = 15
  } else if (mq.isMobile) {
    sec = 30
  }

  return (
    <span
      css={bubbleStyle}
      style={{
        width: `${bubbleSize}px`,
        height: `${bubbleSize}px`,
        left: `${Math.random() * 100 + "%"}`,
        // animationDelay: `${Math.random() * 20}s`,
        animationDelay: `${Math.random() * sec}s`,
      }}
    ></span>
  )
}

const bubbleAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    transform: translateY(-2200px);
    opacity: 0;
  }
`

const bubbleAnimationSp = keyframes`
0% {
    transform: translateY(0);
    opacity: 1;
  }
  95% {
    opacity: 1;
  }
  100% {
    transform: translateY(-3000px);
    opacity: 0;
  }
`

const bubbleStyle = css`
  display: block;
  position: absolute;
  bottom: -50px;
  background-color: transparent;
  border-radius: 50%;
  pointer-events: none;
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.1);
  animation: ${bubbleAnimation} 20s linear infinite;

  ${mq("sp")} {
    animation: ${bubbleAnimationSp} 30s linear infinite;
  }

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    transform: scale(0.25) translate(-70%, -70%);
    background: radial-gradient(rgba(255, 255, 255, 0.5), transparent);
    border-radius: 50%;
  }
`

export default Bubble
