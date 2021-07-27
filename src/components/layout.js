import React, { useContext, useState, useEffect } from "react"
import { css } from "@emotion/react"
import Header from "./header"
import Footer from "./footer"
import Nav from "./Nav"
import { GatsbyContext } from "../context/context"

const Layout = ({ children, mvHeight }) => {
  const { isNavOpen, hideNav } = useContext(GatsbyContext) || {
    isNavOpen: false,
    hideNav: null,
  }
  const [headerHeight, setHeaderHeight] = useState(0)
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > mvHeight - 120
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  })

  return (
    <div css={layout}>
      <Header
        mvHeight={mvHeight}
        headerHeight={headerHeight}
        setHeaderHeight={setHeaderHeight}
        scroll={scroll}
      />
      {children}
      <Footer />
      <Nav
        headerHeight={headerHeight}
        scroll={scroll}
        isNavOpen={isNavOpen}
        hideNav={hideNav}
      />
    </div>
  )
}

const layout = css`
  max-width: 100%;
  margin: 0 auto;
`

export default Layout
