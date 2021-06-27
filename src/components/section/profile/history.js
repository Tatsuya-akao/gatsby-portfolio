import React from "react"
import { css, keyframes } from "@emotion/react"
import { color, font } from "../../../styles/variables"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../../title/title"

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
              <br />
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
`

const historyList = css`
  margin-top: 20rem;
  position: relative;

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
  }

  &::before {
    width: 3rem;
    height: 3rem;
    background: ${color.lightBlue};
    animation: ${pulse} 1.6s infinite;
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
      }
    }
  }

  &:nth-of-type(2) {
    margin-top: 20rem;

    div {
      &::after {
        content: "2019";
      }
    }
  }

  &:nth-of-type(5) {
    margin-top: 20rem;

    div {
      &::after {
        content: "2020";
      }
    }
  }

  &:last-of-type {
    margin-top: 20rem;

    &::before {
      top: 1.6rem;
      bottom: auto;
    }
    &::after {
      top: 2.5rem;
      bottom: auto;
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
  }
`

const cardEven = css`
  /* background-color: #f3f9ff; */

  &::before {
    transform: translateX(1.75rem);
  }
`

const historyLastCard = css`
  width: 80%;
  position: relative;
  margin: 0 auto;
  transform: translateY(3rem);
  text-align: center;
  padding: 3rem 2rem;

  &::before {
    display: none;
  }
`

const historyDate = css`
  color: ${color.main};
  font-weight: bold;
  font-size: 1.8rem;
`

const historyText = css`
  font-size: 1.8rem;
  margin-top: 1rem;
  line-height: 2;
  letter-spacing: 0.05em;
  color: #000;
`

export default History
