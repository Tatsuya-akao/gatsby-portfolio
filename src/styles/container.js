import { css } from "@emotion/react"
import { mq } from "../styles/mq"

export const container = css`
  max-width: 120rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 3rem;

  ${mq("tab")} {
    padding: 0 5.33%;
  }

  ${mq("sp")} {
    max-width: 42rem;
  }
`
