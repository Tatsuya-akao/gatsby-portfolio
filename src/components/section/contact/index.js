import React from "react"
import { css } from "@emotion/react"
import Container from "../../container"
import Title from "../../title/title"

const Contact = () => {
  return (
    <section css={sectionContact}>
      <Container>
        <Title titleText="contact" headLevel="2" titleType="main" />
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/"
          css={form}
        >
          <div css={formRow}>
            <label htmlFor="name">お名前</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="name"
              css={input}
            />
          </div>
          <div css={formRow}>
            <label htmlFor="email">メールアドレス</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="email"
              css={input}
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
  padding: 10rem 0;
`

const form = css``
const input = css``
const formRow = css``
const submitBtn = css``

export default Contact
