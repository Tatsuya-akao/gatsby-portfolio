import React from "react"
import { css } from "@emotion/react"
import { color } from "../../../styles/variables"
import Container from "../../container"
import Title from "../../title/title"
import { mq } from "../../../styles/mq"

const Contact = () => {
  return (
    <section css={sectionContact} id="contact">
      <Container>
        <Title titleText="contact" headLevel="2" titleType="main" />
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/"
          netlify-honeypot="bot-field"
          css={form}
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <div css={formRow}>
            <label css={formLabel} htmlFor="name">
              お名前
            </label>
            <input id="name" type="text" name="name" css={input} />
          </div>
          <div css={formRow}>
            <label css={formLabel} htmlFor="email">
              メールアドレス
            </label>
            <input id="email" type="email" name="email" css={input} />
          </div>
          <div css={formRow}>
            <label css={formLabel}>お問い合わせ内容</label>
            <ul css={optionList}>
              <li css={optionItem}>
                <input
                  type="radio"
                  id="option-development"
                  name="category"
                  value="development"
                />
                <label htmlFor="option-development">
                  ホームページ制作について
                </label>
              </li>
              <li css={optionItem}>
                <input
                  type="radio"
                  id="option-job"
                  name="category"
                  value="job"
                />
                <label htmlFor="option-job">お仕事の依頼について</label>
              </li>
              <li css={optionItem}>
                <input
                  type="radio"
                  id="option-partner"
                  name="category"
                  value="partner"
                />
                <label htmlFor="option-partner">パートナー契約について</label>
              </li>
              <li css={optionItem}>
                <input
                  type="radio"
                  id="option-other"
                  name="category"
                  value="other"
                />
                <label htmlFor="option-other">その他</label>
              </li>
            </ul>
          </div>
          <div css={formRow}>
            <label css={formLabel} htmlFor="content">
              お問い合わせ詳細
            </label>
            <textarea
              id="content"
              type="text"
              name="content"
              placeholder="お問い合わせの詳細を記入してください。"
              rows="10"
              css={[input, textarea]}
            />
          </div>

          <div css={buttonWrap}>
            <button type="submit" css={submitBtn}>
              SEND
            </button>
          </div>
        </form>
      </Container>
    </section>
  )
}

const sectionContact = css`
  position: relative;
  padding: 6rem 0 16rem;

  ${mq("sp")} {
    padding: 6rem 0 10rem;
  }
`

const form = css`
  font-size: 1.8rem;
  max-width: 80rem;
  margin: 8rem auto 0;

  ${mq("tab")} {
    font-size: 1.6rem;
    max-width: 60rem;
  }

  ${mq("tab")} {
    font-size: 1.5rem;
    margin-top: 6rem;
  }
`

const formRow = css`
  display: flex;
  align-items: flex-start;
  margin-top: 3rem;

  ${mq("tab")} {
    flex-wrap: wrap;
  }
`

const formLabel = css`
  width: 22rem;
  flex-shrink: 0;
  cursor: pointer;
  line-height: 3.1rem;

  ${mq("tab")} {
    width: 100%;
    margin-bottom: 0.6rem;
  }
`

const input = css`
  width: 100%;
  padding: 0.6em;
  border-radius: 8px;
  border: none;
  background: #f7f7f7;
  outline: none;
  transition: all 0.3s;

  &:focus {
    background-color: rgb(232, 240, 254);
  }
`

const optionList = css`
  ${mq("tab")} {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`

const optionItem = css`
  ${mq("tab")} {
    min-width: 50%;
  }

  ${mq("tab")} {
    min-width: 100%;
  }

  input {
    margin-right: 0.4rem;
  }

  label {
    line-height: 3.1rem;
    cursor: pointer;
  }
`

const textarea = css`
  width: 100%;
`

const buttonWrap = css`
  text-align: center;
  margin-top: 6rem;
`

const submitBtn = css`
  position: relative;
  display: inline-block;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  padding: 1em 4em;
  background-color: #287ae0;
  background-size: 200% 100%;
  transition: all 0.3s;
  background-image: linear-gradient(
    135deg,
    #15aaff 0%,
    #65c7f7 50%,
    #468cfc 100%
  );
  color: ${color.white};
  font-weight: bold;
  border-radius: 3rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(135deg, #65c7f7 0, #468cfc 100%);
    -webkit-filter: blur(10px);
    filter: blur(10px);
    transform: translateY(3px) scale(0.9, 1);
    z-index: -1;
    border-radius: 100px;
    opacity: 0;
    transition: all 0.5s;
  }

  &:hover,
  &:focus {
    background-position: right center;
    transform: translateY(-3px);

    &::before {
      opacity: 1;
    }
  }
`

export default Contact
