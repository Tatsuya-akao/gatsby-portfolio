import { css } from "@emotion/react"
import { mq } from "./mq"

const hideTab = css`
  ${mq("tab")} {
    display: none;
  }
`

const showTab = css`
  display: none;

  ${mq("tab")} {
    display: block;
  }
`

const hideSp = css`
  ${mq("sp")} {
    display: none;
  }
`

const showSp = css`
  display: none;

  ${mq("sp")} {
    display: block;
  }
`

export { hideTab, showTab, hideSp, showSp }
