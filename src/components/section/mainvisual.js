import React, { useEffect, useRef } from "react"
import { css } from "@emotion/react"
import mvIllust from "../../img/mv_illustration.svg"
import { font } from "../../styles/variables"
import { mq } from "../../styles/mq"
import { showSp, showTab } from "../../styles/display"
import Wave from "../Wave"

const Mainvisual = ({ setMvHeight }) => {
  const ref = useRef(null)

  useEffect(() => {
    setMvHeight(ref.current.clientHeight)
  })

  return (
    <section css={sectionMv} ref={ref}>
      <div css={mvContainer}>
        <div css={mvTextBlock}>
          <h1 css={title}>
            TATSUYA AKAO
            <span css={titleSub}>Front end Web developer / Designer</span>
          </h1>
          <p css={text}>
            フリーランスとして活動している
            <br css={showTab} />
            フロントエンドエンジニア/デザイナーです。
            <br />
            WEB制作・WEBデザイン・
            <br css={showSp} />
            イラスト制作等のお仕事の依頼を
            <br />
            受け付けております。
          </p>
        </div>
        <div css={mvImgBlock}>
          <img css={img} src={mvIllust} alt="" />
        </div>
      </div>
      {/* <div css={waveWrap}></div> */}
      <Wave position="bottom" />
    </section>
  )
}

const sectionMv = css`
  position: relative;
  height: calc(100vh + 14rem);
  padding-bottom: 14rem;
  width: 100%;
  background-image: linear-gradient(135deg, #152b9b 0%, #72f6f5 100%);
  background-image: linear-gradient(
    -30deg,
    #9cecfb 0%,
    #65c7f7 50%,
    #0052d4 100%
  );

  ${mq("tab")} {
    padding-bottom: 0;
    height: 100%;
  }
`

const mvContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 140rem;
  margin: 0 auto;
  padding: 3rem;

  ${mq("tab")} {
    flex-wrap: wrap;
    align-content: center;
    padding: 14rem 0 22rem;
  }

  ${mq("sp")} {
    padding: 24% 0 36%;
  }
`

const mvTextBlock = css`
  font-family: ${font.roboto};
  color: #fff;
  flex-shrink: 0;
  flex-basis: 50%;

  ${mq("tab")} {
    flex-basis: 100%;
  }
`

const title = css`
  display: flex;
  flex-direction: column;
  font-size: 7rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  white-space: nowrap;

  ${mq("tab")} {
    font-size: 6rem;
    text-align: center;
  }

  ${mq("sp")} {
    white-space: normal;
    font-size: 10vw;
  }
`
const titleSub = css`
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 0.47em;
  margin-top: 1.2rem;

  ${mq("tab")} {
    font-size: 1.5rem;
  }

  ${mq("sp")} {
    font-size: 2.7vw;
    letter-spacing: 0.4em;
  }
`

const text = css`
  font-family: ${font.noto};
  font-size: 1.6rem;
  color: #fff;
  font-weight: 300;
  margin-top: 5rem;
  line-height: 2.5;

  ${mq("tab")} {
    font-size: 1.6rem;
    margin-top: 5rem;
    text-align: center;
  }

  ${mq("sp")} {
    font-size: 1.5rem;
  }
`

const mvImgBlock = css`
  flex-grow: 1;
  flex-basis: 50%;
  margin-left: 3rem;

  ${mq("tab")} {
    flex-basis: 100%;
    flex-grow: 0;
    margin: 5rem auto 0;
    max-width: 50rem;
  }

  ${mq("sp")} {
    max-width: 30rem;
    flex-basis: 80%;
  }
`

const img = css`
  transform: translateY(3rem);
  width: 100%;
  height: auto;

  ${mq("tab")} {
    transform: translateY(0);
  }
`

export default Mainvisual
