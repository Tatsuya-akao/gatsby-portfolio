import React from "react"
import { css } from "@emotion/react"
import skillset from "../../constants/skillset"
import Container from "../container"
import { color, font } from "../../styles/variables"
import gradientBg from "../../img/gradient.jpg"
import Bubbles from "../Bubbles"
import Title from "../title/title"
import { mq } from "../../styles/mq"
import Wave from "../Wave"

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
  const frontEndItems = skillset.filter(skill => {
    return skill.category === "front-end"
  })

  const backEndItems = skillset.filter(skill => {
    return skill.category === "back-end"
  })

  const cmsItems = skillset.filter(skill => {
    return skill.category === "cms"
  })

  const designItems = skillset.filter(skill => {
    return skill.category === "design"
  })

  return (
    <section css={skillSection} id="skill">
      <Container>
        <Bubbles bubbleCount="20" bubbleCountSp="40" />
        <Title
          titleText="Skill"
          headLevel="2"
          titleColor="white"
          titleType="main"
        />
        <div css={skillCat}>
          <p css={category}>Front-End</p>
          <ul css={skillList}>
            {frontEndItems.map(item => {
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
                    {totalYear === 0 || totalMonth === 0 ? "" : " and "}
                    {getDateStr(totalMonth, "month", numStyle)}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>

        <div css={skillCat}>
          <p css={category}>Back-End</p>
          <ul css={skillList}>
            {backEndItems.map(item => {
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
                    {totalYear === 0 || totalMonth === 0 ? "" : " and "}
                    {getDateStr(totalMonth, "month", numStyle)}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>

        <div css={skillCat}>
          <p css={category}>CMS</p>
          <ul css={skillList}>
            {cmsItems.map(item => {
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
                    {totalYear === 0 || totalMonth === 0 ? "" : " and "}
                    {getDateStr(totalMonth, "month", numStyle)}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>

        <div css={skillCat}>
          <p css={category}>Design Tools</p>
          <ul css={skillList}>
            {designItems.map(item => {
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
                    {totalYear === 0 || totalMonth === 0 ? "" : " and "}
                    {getDateStr(totalMonth, "month", numStyle)}
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
      <Wave position="bottom" />
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
  padding: 24rem 0 24rem;
  /* background-image: url(${gradientBg}); */
  background-size: contain;
  background-position: center bottom;
  background-repeat: no-repeat;
  position: relative;

  ${mq("sp")} {
    padding: 16rem 0;
  }
`

const skillCat = css`
  padding: 5rem 0;
  position: relative;

  ${mq("tab")} {
    padding: 3rem 0;
  }

  &:not(:first-of-type) {
    margin-top: 3rem;
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
  margin-bottom: 4rem;
  font-size: 2.4rem;
  padding: 0.1em 0 0.1em 2em;

  ${mq("sp")} {
    margin-bottom: 0;
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

const skillList = css`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const skill = css`
  width: calc(50% - 2.5rem);
  padding: 3rem 2rem;
  font-family: ${font.lato};
  color: ${color.white};
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 10px;
  background-image: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.18) 0%,
    rgba(255, 255, 255, 0.1) 70%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  ${mq("tab")} {
    width: calc(50% - 1rem);
    padding: 2rem;
  }

  ${mq("sp")} {
    width: 100%;
    margin-top: 2rem;
  }

  &:nth-of-type(n + 3) {
    margin-top: 5rem;

    ${mq("tab")} {
      margin-top: 2rem;
    }
  }
`

const skillBarContainer = css`
  width: 100%;
  height: 1.2rem;
  background: #ffffff;
  position: relative;
  margin: 15px 0;
  border-radius: 10px;

  ${mq("tab")} {
    height: 1rem;
  }
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
  top: -3.2rem;
  font-size: 1.5rem;
  letter-spacing: 0.05em;

  ${mq("tab")} {
    font-size: 1.2rem;
  }
`

const skillTitle = css`
  display: flex;
  font-family: ${font.roboto};
  font-size: 2rem;
  letter-spacing: 0.1em;

  ${mq("tab")} {
    font-size: 1.6rem;
  }
`

const skillIcon = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
`

const skillDate = css`
  letter-spacing: 0.1em;
  font-size: 1.5rem;

  ${mq("tab")} {
    font-size: 1.4rem;
  }
`

const numStyle = css`
  font-weight: bold;
  font-size: 1.8rem;

  ${mq("tab")} {
    font-size: 1.5rem;
  }
`

export default Skill
