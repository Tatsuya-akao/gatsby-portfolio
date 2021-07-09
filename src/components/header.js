import React, { useContext } from "react"
import { useEffect, useRef } from "react"
import { Link } from "gatsby"
import { css } from "@emotion/react"
import { rgba } from "emotion-rgba"
import { color, font } from "../styles/variables"
import { container } from "../styles/container"
import HeaderNav from "./headerNav"
import { mq } from "../styles/mq"
import { GatsbyContext } from "../context/context"

const Header = ({ setHeaderHeight, headerHeight, scroll }) => {
  const headerEl = useRef(null)
  const { showNav } = useContext(GatsbyContext) || { showNav: 0 }

  useEffect(() => {
    setHeaderHeight(headerEl.current.clientHeight)
  })

  return (
    <header css={[header, scroll ? headerScroll : null]} ref={headerEl}>
      <div css={headerContainer}>
        <Link css={headerLogo} to="/">
          <span css={logoText1}>TATSUYA AKAO</span>
          <span css={logoText2}>MY PORTFOLIO</span>
        </Link>
        <HeaderNav scroll={scroll} headerHeight={headerHeight} />
        <button
          css={[headerHamburgerBtn, scroll ? headerHamburgerBtnScroll : null]}
          onClick={showNav}
        >
          <span></span>
        </button>
      </div>
    </header>
  )
}

const header = css`
  position: fixed;
  top: 0;
  left: 0;
  height: 10rem;
  width: 100%;
  background-color: transparent;
  z-index: 10;
  color: ${color.white};
  backdrop-filter: blur(4px);
  transition: all 0.3s;

  ${mq("tab")} {
    height: 8rem;
  }

  ${mq("sp")} {
    height: 6rem;
  }
`
const headerScroll = css`
  height: 6rem;
  background-color: ${color.white};
  color: ${color.main};
  box-shadow: 0 3px 10px ${rgba(color.main, 0.1)};

  ${mq("tab")} {
    height: 6rem;
  }
`

const headerContainer = css`
  ${container};
  max-width: 140rem;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mq("sp")} {
    max-width: 100%;
  }
`

const headerLogo = css`
  display: flex;
  font-family: ${font.lato};
  flex-direction: column;
`

const logoText1 = css`
  font-weight: bold;
  font-size: 1.6rem;
  letter-spacing: 0.2em;

  ${mq("sp")} {
    font-size: 1.5rem;
  }
`

const logoText2 = css`
  font-weight: 300;
  font-size: 1.4rem;
  letter-spacing: 0.32em;

  ${mq("sp")} {
    font-size: 1.3rem;
    letter-spacing: 0.33em;
  }
`

const headerHamburgerBtn = css`
  display: none;
  height: 3rem;
  width: 3rem;
  position: relative;

  ${mq("sp")} {
    height: 2.8rem;
    width: 2.8rem;
  }

  &::before,
  &::after {
    content: "";
  }

  &::before,
  &::after,
  span {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${color.white};
  }

  &::before {
    top: 0.5rem;
  }

  &::after {
    bottom: 0.5rem;
  }

  span {
    top: 0;
    bottom: 0;
    margin: auto 0;
  }

  ${mq("tab")} {
    display: block;
  }
`

const headerHamburgerBtnScroll = css`
  &::before,
  &::after,
  span {
    background-color: ${color.main};
  }
`

export default Header
