import React from "react"
import { css } from "@emotion/react"
import Header from "./header"
import Footer from "./footer"

const layout = css`
  max-width: 100%;
  margin: 0 auto;
`

const Layout = ({ children }) => {
  return (
    <div css={layout}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
