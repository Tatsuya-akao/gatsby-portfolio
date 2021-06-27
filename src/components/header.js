import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"
import { color, font } from "../styles/variables"
import { container } from "../styles/container"
import HeaderNav from "./headerNav"

const Header = () => {
  return (
    <header css={header}>
      <div css={headerContainer}>
        <Link css={headerLogo} to="/">
          <span css={logoText1}>TATSUYA AKAO</span>
          <span css={logoText2}>MY PORTFOLIO</span>
        </Link>
        <HeaderNav />
      </div>
    </header>
  )
}

const header = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
  /* background-color: ${color.white}; */
  background-color: transparent;
  z-index: 10;
`

const headerContainer = css`
  ${container};
  max-width: 140rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const headerLogo = css`
  /* color: ${color.main}; */
  color: ${color.white};
  display: flex;
  font-family: ${font.lato};
  flex-direction: column;
`

const logoText1 = css`
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0.2em;
`

const logoText2 = css`
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 0.32em;
`

export default Header
