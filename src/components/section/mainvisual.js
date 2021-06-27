import React from "react"
import { css, keyframes } from "@emotion/react"
import mvIllust from "../../img/mv_illustration.svg"
import { font } from "../../styles/variables"
import waveImg from "../../img/wave.svg"
import gradientBg from "../../img/bggradient.png"

const Mainvisual = () => {
  return (
    <section css={sectionMv}>
      <div css={mvContainer}>
        <div css={mvTextBlock}>
          <h1 css={title}>
            TATSUYA AKAO
            <span css={titleSub}>Front end Web developer / Designer</span>
          </h1>
          <p css={text}>
            フリーランスとして活動しているフロントエンドエンジニア/デザイナーです。
            <br />
            WEB制作・WEBデザイン・イラスト制作等のお仕事の依頼を
            <br />
            受け付けております。
          </p>
        </div>
        <div css={mvImgBlock}>
          <img css={img} src={mvIllust} alt="" />
        </div>
      </div>
      <div css={waveWrap}></div>
    </section>
  )
}

const sectionMv = css`
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
  /* background-image: url(${gradientBg}); */
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
`

const mvTextBlock = css`
  font-family: ${font.roboto};
  color: #fff;
  flex-shrink: 0;
  flex-basis: 50%;
`

const title = css`
  display: flex;
  flex-direction: column;
  font-size: 7rem;
  font-weight: 500;
  letter-spacing: 0.1em;
`
const titleSub = css`
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 0.47em;
  margin-top: 1.2rem;
`

const text = css`
  font-family: ${font.noto};
  font-size: 1.6rem;
  color: #fff;
  font-weight: 300;
  margin-top: 5rem;
  line-height: 2;
`

const mvImgBlock = css`
  flex-grow: 1;
  flex-basis: 50%;
  margin-left: 3rem;
`

const img = css`
  transform: translateY(30px);
  width: 100%;
  height: auto;
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
  bottom: -14.1rem;
  left: 0;
  animation: ${waves} 7s linear infinite;
  background: url(${waveImg});
  background-size: 1600px 14rem;
  background-repeat: repeat-x;
`

export default Mainvisual
