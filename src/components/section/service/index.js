import React from "react"
import { css } from "@emotion/react"
import { color } from "../../../styles/variables"
import Container from "../../container"
import Title from "../../title/title"
import ServiceList from "./serviceList"

const Service = () => {
  return (
    <section css={sectionService}>
      <Container>
        <Title titleText="service" headLevel="2" titleType="main" />
        <ServiceList />
      </Container>
    </section>
  )
}

const sectionService = css`
  padding: 10rem 0;
`

export default Service
