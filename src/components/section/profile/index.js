import React from "react"
import { css } from "@emotion/react"
import History from "./history"
import About from "./about"
import Container from "../../container"
import Title from "../../title/title"
import Wave from "../../Wave"
import { mq } from "../../../styles/mq"

const profile = () => {
  return (
    <section css={sectionProfile} id="profile">
      <Container>
        <Title titleText="profile" headLevel="2" titleType="main" />
        <About css={profileBlock} />
        <History css={profileBlock} />
        <Wave position="bottom-negative" />
      </Container>
    </section>
  )
}

const sectionProfile = css`
  position: relative;
  padding: 10rem 0 24rem;

  ${mq("sp")} {
    padding: 6rem 0 10rem;
  }
`

const profileBlock = css`
  margin-top: 10rem;
`

export default profile
