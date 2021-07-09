import React from "react"
import { css, keyframes } from "@emotion/react"
import { color, font } from "../../../styles/variables"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../../title/title"
import { mq } from "../../../styles/mq"
import { hideSp } from "../../../styles/display"

const History = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMicrocmsHistory(sort: { fields: date, order: ASC }) {
        nodes {
          historyId
          date
          content
        }
      }
    }
  `)

  const {
    allMicrocmsHistory: { nodes: history },
  } = data

  return (
    <div css={sectionHistory}>
      <Title titleText="History" headLevel="2" />
      <ul css={historyList}>
        {history.map((item, index) => {
          return (
            <li css={historyLi} key={item.historyId}>
              <div css={[historyCard, index % 2 !== 0 ? cardEven : ""]}>
                <span css={historyDate}>{item.date}</span>
                <p css={historyText}>{item.content}</p>
              </div>
            </li>
          )
        })}
        <li css={historyLi}>
          <div css={[historyCard, historyLastCard]}>
            <p css={historyText}>
              複数の制作会社様やフリーランスチームと提携しながら、
              <br css={hideSp} />
              Web制作・Webデザインの案件対応をしています。
              <br />
              お仕事の依頼は、お問い合わせフォームから気軽にご連絡ください。
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

const sectionHistory = css`
  margin-top: 10rem;
  padding: 0 4rem;

  ${mq("tab")} {
    padding: 0;
  }
`

const historyList = css`
  margin-top: 20rem;
  position: relative;

  ${mq("sp")} {
    margin-top: 12rem;
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 2px;
    height: calc(100% + 10rem);
    transform: translateY(-10rem);
    background-color: #f3f9ff;

    ${mq("sp")} {
      right: auto;
      left: 1rem;
      height: 100%;
      transform: translateY(-4rem);
    }
  }
`

const pulse = keyframes`
0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
   transform: scale(1);
   opacity: 0;
  }
`

const historyLi = css`
  position: relative;
  display: flex;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border-radius: 50%;
    z-index: 2;

    ${mq("sp")} {
      right: auto;
      left: 0.5rem;
    }
  }

  &::before {
    width: 3rem;
    height: 3rem;
    background: ${color.lightBlue};
    animation: ${pulse} 1.6s infinite;

    ${mq("sp")} {
      left: -0.4rem;
    }
  }

  &::after {
    width: 1.2rem;
    height: 1.2rem;
    background-color: ${color.main};
  }

  &:not(:first-of-type) {
    margin-top: 4rem;
  }

  &:nth-of-type(even) {
    justify-content: flex-end;
  }

  &:nth-of-type(1),
  &:nth-of-type(2),
  &:nth-of-type(5),
  &:last-of-type {
    div {
      &::after {
        content: "2018";
        font-family: ${font.roboto};
        font-size: 5rem;
        font-weight: bold;
        color: ${color.main};
        background-color: ${color.white};
        position: absolute;
        left: 0;
        right: 0;
        top: -13rem;
        margin: 0 auto;
        width: 100%;
        text-align: center;

        ${mq("tab")} {
          font-size: 4rem;
        }

        ${mq("sp")} {
          top: -7rem;
          font-size: 2.4rem;
          text-align: left;
          padding: 0.5rem 0;
        }
      }
    }
  }

  &:nth-of-type(2) {
    margin-top: 20rem;

    ${mq("sp")} {
      margin-top: 10rem;
    }

    div {
      &::after {
        content: "2019";
      }
    }
  }

  &:nth-of-type(5) {
    margin-top: 20rem;

    ${mq("sp")} {
      margin-top: 10rem;
    }

    div {
      &::after {
        content: "2020";
      }
    }
  }

  &:last-of-type {
    margin-top: 20rem;

    ${mq("sp")} {
      margin-top: 8rem;
    }

    &::before {
      top: 1.6rem;
      bottom: auto;

      ${mq("sp")} {
        display: none;
      }
    }
    &::after {
      top: 2.5rem;
      bottom: auto;

      ${mq("sp")} {
        display: none;
      }
    }

    div {
      &::after {
        content: "NOW";
      }
    }
  }
`

const historyCard = css`
  width: calc(50% - 3.5rem);
  box-shadow: 0 3px 10px rgba(157, 214, 247, 0.39);
  padding: 2rem;
  background-color: ${color.white};

  ${mq("tab")} {
    padding: 1.6rem 1.2rem;
  }

  ${mq("sp")} {
    width: 88%;
    margin-left: auto;
  }

  &::before {
    content: "";
    position: absolute;
    height: 0;
    width: 3.5rem;
    right: 0;
    left: 0;
    border-top: 2px dashed #cbe1f9;
    top: 0;
    bottom: 0;
    margin: auto;
    transform: translateX(-1.75rem);

    ${mq("sp")} {
      transform: translateX(0);
      right: auto;
      left: 2.5rem;
      z-index: -1;
      width: 5rem;
    }
  }
`

const cardEven = css`
  &::before {
    transform: translateX(1.75rem);

    ${mq("sp")} {
      transform: translateX(0);
      left: 2.5rem;
      right: auto;
      width: 5rem;
    }
  }
`

const historyLastCard = css`
  width: 80%;
  position: relative;
  margin: 0 auto;
  transform: translateY(3rem);
  text-align: center;
  padding: 3rem 2rem;

  ${mq("tab")} {
    padding: 1.6rem 1.2rem 2.4rem;
    width: 100%;
  }

  ${mq("sp")} {
    text-align: left;
  }

  &::before {
    display: none;
  }
`

const historyDate = css`
  color: ${color.main};
  font-weight: bold;
  font-size: 1.8rem;

  ${mq("tab")} {
    font-size: 1.5rem;
  }
`

const historyText = css`
  font-size: 1.8rem;
  margin-top: 1rem;
  line-height: 2;
  letter-spacing: 0.05em;
  color: #000;

  ${mq("tab")} {
    font-size: 1.5rem;
    line-height: 1.75;
  }
`

export default History
