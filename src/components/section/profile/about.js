import React from "react"
import { css } from "@emotion/react"
import { color, font } from "../../../styles/variables"
import Title from "../../title/title"
import myAge from "./myAge"
import myPic from "../../../img/me.jpg"
import { mq } from "../../../styles/mq"

const about = () => {
  return (
    <div css={sectionAbout}>
      <Title titleText="about me" headLevel="2" />
      <div css={aboutCols}>
        <div css={aboutImgCol}>
          <div css={aboutImgWrap}>
            <img src={myPic} alt="" />
          </div>
        </div>
        <dl css={aboutDescCol}>
          <div css={aboutDescRow}>
            <dt>NAME</dt>
            <dd css={myName}>TATSUYA AKAO</dd>
          </div>
          <div css={aboutDescRow}>
            <dt>AGE</dt>
            <dd>{myAge()}</dd>
          </div>
          <div css={aboutDescRow}>
            <dt>HOBBIES</dt>
            <dd>ギター、海外旅行、英語</dd>
          </div>
          <div css={aboutDescRow}>
            <dt>ABOUT</dt>
            <dd>
              兵庫県出身のフロントエンドエンジニア/デザイナーとして活動しています。海外留学や海外インターンを経て、フリーランスとして独立しました。現在は旅をしながら仕事をしています。
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

const sectionAbout = css`
  margin-top: 8rem;
  padding: 0 4rem;

  ${mq("tab")} {
    padding: 0;
  }
`

const aboutCols = css`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;

  ${mq("tab")} {
    flex-wrap: wrap;
  }
`

const aboutImgCol = css`
  position: relative;
  width: 25%;
  flex-shrink: 0;
  margin-right: 6rem;

  ${mq("pc")} {
    margin-right: 5rem;
    width: 28%;
  }

  ${mq("tab")} {
    width: 24rem;
    margin: 0 auto;
  }
`

const aboutImgWrap = css`
  position: relative;
  img {
    width: 100%;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &::before {
    background-color: ${color.lightBlue};
    left: -1rem;
    top: -1rem;
  }

  &::after {
    background-color: ${color.main};
    right: -1rem;
    bottom: -1rem;
  }
`

const aboutDescCol = css`
  flex-grow: 1;
  font-size: 1.8rem;
  line-height: 2;
  width: calc(75% - 6rem);

  ${mq("pc")} {
    width: calc(72% - 5rem);
  }

  ${mq("tab")} {
    width: 100%;
    font-size: 1.6rem;
    margin-top: 4rem;
  }

  ${mq("sp")} {
    font-size: 1.5rem;
  }
`

const aboutDescRow = css`
  display: flex;
  padding: 1.6rem;
  border-bottom: 2px dashed #ccc;

  ${mq("tab")} {
    padding: 1rem;
  }

  ${mq("sp")} {
    flex-wrap: wrap;
    padding: 1.4rem 0;
  }

  dt {
    font-family: ${font.roboto};
    font-weight: 500;
    letter-spacing: 0.1em;
    color: ${color.main};
    width: 12rem;
    flex-shrink: 0;

    ${mq("sp")} {
      width: 100%;
    }
  }

  dd {
    flex-shrink: 1;
  }
`

const myName = css`
  letter-spacing: 0.1em;
`

export default about
