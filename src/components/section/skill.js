import React from "react"
import { css } from "@emotion/react"
import skillset from "../constants/skillset"
import Container from "./container"
import { color, font } from "../styles/variables"

const getYearNum = startedDateValue => {
  const today = new Date()
  const startedDate = new Date(startedDateValue)
  const diff = today - startedDate
  return Math.floor(diff / 1000 / 60 / 60 / 24 / 30 / 12)
}

const getMonthNum = startedDateValue => {
  const today = new Date()
  const startedDate = new Date(startedDateValue)
  const diff = today - startedDate
  return Math.floor((diff / 1000 / 60 / 60 / 24 / 30) % 12)
}

const getDateStr = (num, str, className) => {
  if (num === 0) {
    return ""
  } else if (num === 1) {
    return (
      <span>
        <span css={className}>{num}</span> {str}
      </span>
    )
  } else {
    return (
      <span>
        <span css={className}>{num}</span> {str}s
      </span>
    )
  }
}

const Skill = () => {
  return (
    <section css={skillSection}>
      <Container>
        <p css={category}>Front End</p>
        <ul css={skillList}>
          {skillset.map(item => {
            const totalYear = getYearNum(item.started)
            const totalMonth = getMonthNum(item.started)

            return (
              <li css={skill} key={item.id}>
                <h4 css={skillTitle}>
                  <span css={skillIcon}>{item.icon}</span>
                  {item.text}
                </h4>
                <div css={skillBarContainer}>
                  <span
                    css={skillBar}
                    style={{ width: `${item.proficiency}%` }}
                  ></span>
                  <span css={skillBarLabel}>{item.proficiency}%</span>
                </div>
                <p css={skillDate}>
                  {getDateStr(totalYear, "year", numStyle)}
                  {totalYear === 0 || totalMonth == 0 ? "" : " and "}
                  {getDateStr(totalMonth, "month", numStyle)}
                </p>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}

const skillSection = css`
  background-image: linear-gradient(-45deg, #152b9b 0%, #61e4e3 100%);
  background-image: linear-gradient(
    135deg,
    #15daff 0%,
    #65c7f7 50%,
    #0052d4 100%
  );
  padding: 100px 0;
`

const category = css`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  font-weight: bold;
  letter-spacing: 0.1em;
  margin-bottom: 40px;
  font-size: 20px;

  &::before {
    margin-right: 20px;
  }

  &::after {
    margin-left: 20px;
  }

  &::before,
  &::after {
    content: "";
    flex-grow: 1;
    height: 1px;
    background-color: #fff;
  }
`

const skillList = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const skill = css`
  width: calc(50% - 25px);
  padding: 30px 20px;
  font-family: ${font.lato};
  color: ${color.white};

  background: rgba(255, 255, 255, 0.1);
  /* box-shadow: 0 2px 12px 0 rgba(31, 38, 135, 0.1); */
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.04);

  &:nth-of-type(n + 3) {
    margin-top: 50px;
  }
`

const skillBarContainer = css`
  width: 100%;
  height: 12px;
  background: #ffffff;
  border-radius: 30px;
  position: relative;
  margin: 15px 0;
  border-radius: 10px;
`

const skillBar = css`
  position: absolute;
  top: 0;
  left: 0;
  background-color: #40f7e6;
  /* background-image: linear-gradient(90deg, #0dc7ff 0%, #00edc6 100%); */
  height: 100%;
  border-radius: 30px;
`

const skillBarLabel = css`
  position: absolute;
  right: 0;
  top: -20px;
`

const skillTitle = css`
  display: flex;
  font-size: 20px;
  letter-spacing: 0.1em;
`

const skillIcon = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`

const skillDate = css`
  letter-spacing: 0.1em;
`

const num = css`
  font-weight: bold;
  font-size: 18px;
`

const numStyle = css`
  font-weight: bold;
  font-size: 18px;
`

export default Skill
