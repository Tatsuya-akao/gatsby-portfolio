import React from "react"
import { css } from "@emotion/react"
import History from "./history"
import About from "./about"
import Container from "../../container"
import Title from "../../title/title"

const profile = () => {
  return (
    <section css={sectionProfile}>
      <Container>
        <Title titleText="profile" headLevel="2" titleType="main" />
        <About css={profileBlock} />
        <History css={profileBlock} />
      </Container>
    </section>
  )
}

const sectionProfile = css`
  padding: 100px 0;
`

const profileBlock = css`
  margin-top: 10rem;
`

export default profile
