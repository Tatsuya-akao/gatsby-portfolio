import React from "react"
import { css } from "@emotion/react"
import Container from "../../container"
import Title from "../../title/title"
import bgImg from "../../../img/gradient.jpg"
import Bubbles from "../../bubbles"

const Pattern2 = () => {
  return (
    <section css={sectionContact}>
      <Container>
        <Bubbles bubbleCount="20" />
        <Title
          titleText="contact"
          headLevel="2"
          titleColor="white"
          titleType="main"
        />
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
            {/* <label css={formLabel} htmlFor="name">
              Name
            </label> */}
            <input
              id="name"
              type="text"
              name="name"
              placeholder="name"
              css={input}
            />
          </div>
          <div css={formRow}>
            {/* <label css={formLabel} htmlFor="email">
              E-mail
            </label> */}
            <input
              id="email"
              type="email"
              name="email"
              placeholder="email"
              css={input}
            />
          </div>
          <div css={formRow}>
            {/* <label css={formLabel} htmlFor="content">
              Inquiry
            </label> */}
            <textarea
              id="content"
              type="text"
              name="content"
              placeholder="text here"
              rows="10"
              css={[input, textarea]}
            />
          </div>

          <button type="submit" css={submitBtn}>
            Submit
          </button>
        </form>
      </Container>
    </section>
  )
}

const sectionContact = css`
  position: relative;
  padding: 10rem 0;
  background-image: linear-gradient(
    135deg,
    #15aaff 0%,
    #65c7f7 50%,
    #0052d4 100%
  );
`

const form = css`
  font-size: 1.8rem;
  max-width: 100rem;
  padding: 10rem 10rem;
  border-radius: 10px;
  margin: 6rem auto 0;
`

const formRow = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 3rem;
`

const formLabel = css`
  width: 22rem;
  flex-shrink: 0;
  cursor: pointer;
  line-height: 3.1rem;
`

const input = css`
  width: 100%;
  padding: 0.4em 0.6em;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  backdrop-filter: blur(4px);
  border-radius: 10px;
  color: #fff;
  outline: none;

  &::placeholder {
    color: white;
  }
  /* 旧Edge対応 */
  &::-ms-input-placeholder {
    color: white;
  }
  /* IE対応 */
  &:-ms-input-placeholder {
    color: white;
  }
`

const textarea = css`
  width: 100%;
`

const submitBtn = css``

export default Pattern2
