import React from "react"
import { CgInfo } from "react-icons/cg"
import { css } from "@emotion/react"
import { color } from "../../styles/variables"
import { rgba } from "emotion-rgba"
import { mq } from "../../styles/mq"

const infoBox = ({ children }) => {
  return (
    <div css={infoBoxstyle}>
      <div css={iconWrap}>
        <CgInfo css={icon} />
      </div>
      <div css={content}>{children}</div>
    </div>
  )
}

const infoBoxstyle = css`
  position: relative;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 8rem;
  padding: 4rem 4rem;
  /* border-left: 3px solid #4433ff; */
  border-top: 3px solid #4433ff;
  background-color: ${color.white};
  box-shadow: 0 5px 10px ${rgba("#000", 0.1)};

  ${mq("tab")} {
    width: 100%;
    padding: 3rem 2rem;
  }
`

const iconWrap = css`
  position: absolute;
  left: -1.8rem;
  top: -1.6rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${color.white};

  ${mq("sp")} {
    left: -1.5rem;
  }
`

const icon = css`
  color: #4433ff;
  font-size: 3.2rem;
`

const content = css`
  font-size: 1.8rem;
  line-height: 2;
  text-align: center;

  ${mq("tab")} {
    font-size: 1.6rem;
  }

  ${mq("sp")} {
    font-size: 1.5rem;
    text-align: left;
  }

  small {
    ${mq("sp")} {
      font-size: 1.5rem;
    }
  }
`

export default infoBox
