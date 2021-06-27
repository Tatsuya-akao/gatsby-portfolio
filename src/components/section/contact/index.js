import React from "react"
import { css } from "@emotion/react"
import Container from "../../container"
import Title from "../../title/title"

const Contact = () => {
  return (
    <section css={sectionContact}>
      <Container>
        <Title titleText="contact" headLevel="2" titleType="main" />
      </Container>
    </section>
  )
}

const sectionContact = css`
  padding: 10rem 0;
`

export default Contact
