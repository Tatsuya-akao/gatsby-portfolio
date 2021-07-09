import React from "react"
import { css } from "@emotion/react"
import { color, font } from "../../styles/variables"
import { mq } from "../../styles/mq"

const title = ({ titleText, headLevel, titleColor, titleType }) => {
  const CustomTag = `h${headLevel}`
  const chars = titleText.trim().split("")
  const formatText = chars.map((letter, index) => {
    return <span key={index}>{letter}</span>
  })

  return (
    <CustomTag
      css={[
        titleType === "main" ? titleStyle : titleSubStyle,
        titleColor === "white" ? titleWhite : titleMain,
      ]}
    >
      {formatText}
    </CustomTag>
  )
}

const titleStyle = css`
  font-family: ${font.roboto};
  font-weight: bold;
  font-size: 5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: center;

  ${mq("tab")} {
    font-size: 4rem;
  }

  ${mq("sp")} {
    font-size: 3.2rem;
  }
`

const titleSubStyle = css`
  position: relative;
  font-family: ${font.roboto};
  font-weight: bold;
  font-size: 3.6rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-align: left;
  padding: 0.1em 0 0.1em 2em;

  ${mq("tab")} {
    font-size: 2.8rem;
  }

  ${mq("sp")} {
    font-size: 2.4rem;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: 1px;
    width: 1.5em;
    background-color: #fff;
  }
`

const titleWhite = css`
  color: ${color.white};

  &::before {
    background-color: ${color.white};
  }
`

const titleMain = css`
  color: ${color.main};

  &::before {
    background-color: ${color.main};
  }
`

export default title
