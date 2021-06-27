import React from "react"
import { css, keyframes } from "@emotion/react"
import skillset from "../../constants/skillset"
import Container from "../container"
import { color, font } from "../../styles/variables"
import gradientBg from "../../img/gradient.jpg"
import waveImg from "../../img/wave.svg"
import Bubbles from "../bubbles"
import Title from "../title/title"

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
        <Bubbles bubbleCount="20" />
        <Title
          titleText="Skill"
          headLevel="2"
          titleColor="white"
          titleType="main"
        />
        <div css={skillCat}>
          <p css={category}>Front-End</p>
          <ul css={skillList}>
            {skillset.map(item => {
              if (item.category === "front-end") {
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
              }
            })}
          </ul>
        </div>

        <div css={skillCat}>
          <p css={category}>Back-End</p>
          <ul css={skillList}>
            {skillset.map(item => {
              const totalYear = getYearNum(item.started)
              const totalMonth = getMonthNum(item.started)

              if (item.category === "back-end") {
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
              }
            })}
          </ul>
        </div>

        <div css={skillCat}>
          <p css={category}>CMS</p>
          <ul css={skillList}>
            {skillset.map(item => {
              const totalYear = getYearNum(item.started)
              const totalMonth = getMonthNum(item.started)

              if (item.category === "cms") {
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
              }
            })}
          </ul>
        </div>

        <div css={skillCat}>
          <p css={category}>Design Tools</p>
          <ul css={skillList}>
            {skillset.map(item => {
              const totalYear = getYearNum(item.started)
              const totalMonth = getMonthNum(item.started)

              if (item.category === "design") {
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
              }
            })}
          </ul>
        </div>
        <div css={waveWrap}></div>
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
  background-image: linear-gradient(
    135deg,
    #15aaff 0%,
    #65c7f7 50%,
    #0052d4 100%
  );
  padding: 220px 0 100px;
  /* background-image: url(${gradientBg}); */
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
  position: relative;
`

const skillCat = css`
  padding: 5rem 0;
  position: relative;

  &:not(:first-of-type) {
    margin-top: 30px;
  }

  &::before {
    content: "";
    position: absolute;
    left: -20%;
    top: 10%;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background-image: linear-gradient(-45deg, #5cffe1 0%, #9adeff 100%);

    display: none;
    z-index: 0;
  }
`

const category = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  font-weight: bold;
  letter-spacing: 0.1em;
  margin-bottom: 40px;
  font-size: 24px;
  padding: 0.1em 0 0.1em 2em;

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

const skillList = css`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const skill = css`
  width: calc(50% - 25px);
  padding: 30px 20px;
  font-family: ${font.lato};
  color: ${color.white};
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 10px;

  /* background: rgba(255, 255, 255, 0.1); */
  background-image: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(255, 255, 255, 0.1) 70%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

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
  height: 100%;
  border-radius: 30px;
`

const skillBarLabel = css`
  position: absolute;
  right: 0;
  top: -32px;
  font-size: 1.5rem;
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
  font-size: 1.5rem;
`

const num = css`
  font-weight: bold;
  font-size: 18px;
`

const numStyle = css`
  font-weight: bold;
  font-size: 18px;
`

const waves = keyframes`
0% {
    background-position: 0 bottom;
  }
  100% {
    /* from width of the svg file */
    background-position: 1600px bottom;
  }
`

const waveWrap = css`
  width: 100%;
  height: 14rem;
  position: absolute;
  top: -1px;
  left: 0;
  animation: ${waves} 7s linear infinite;
  background: url(${waveImg});
  background-size: 1600px 14rem;
  background-repeat: repeat-x;
  transform: scale(-1, -1);
`

export default Skill
