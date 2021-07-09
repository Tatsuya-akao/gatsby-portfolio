import React from "react"
import { css } from "@emotion/react"
import { rgba } from "emotion-rgba"
import anchorLinks from "../constants/anchorLink"
import { color } from "../styles/variables"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { mq } from "../styles/mq"

const Nav = ({ headerHeight, scroll, isNavOpen, hideNav }) => {
  return (
    <nav
      css={[
        navStyle,
        isNavOpen && scroll
          ? [navStyle, navOpen, navOpenScroll]
          : isNavOpen
          ? [navStyle, navOpen]
          : null,
      ]}
    >
      <button
        css={[navCloseBtn, scroll ? navCloseBtnScroll : null]}
        onClick={hideNav}
      ></button>
      <ul css={navList}>
        {anchorLinks.map(link => {
          return (
            <li key={link.id} css={navListItem}>
              <AnchorLink
                css={[navLink, scroll ? navLinkScroll : null]}
                href={link.path}
                offset={link.offset ? headerHeight - 140 : headerHeight}
                onClick={hideNav}
              >
                {link.text}
              </AnchorLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const navStyle = css`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  transition: all 0.4s;
  backdrop-filter: blur(20px);
  opacity: 0;
  visibility: hidden;
`

const navOpen = css`
  opacity: 1;
  background-color: ${rgba(color.white, 0)};
  visibility: visible;
`

const navOpenScroll = css`
  background-color: ${rgba(color.white, 0.7)};
`

const navCloseBtn = css`
  width: 2.8rem;
  height: 2.8rem;
  position: absolute;
  top: 2.5rem;
  right: 5.33%;
  transition: all 0.4s;

  ${mq("sp")} {
    top: 1.6rem;
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${color.white};
    transition: all 0.4s;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`

const navCloseBtnScroll = css`
  top: 1.6rem;

  &::before,
  &::after {
    background-color: ${color.main};
  }
`
const navList = css`
  padding-top: 10rem;
`
const navListItem = css`
  text-align: center;

  &:not(:first-of-type) {
    margin-top: 2rem;
  }
`

const navLink = css`
  color: ${color.white};
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.4s;

  ${mq("sp")} {
    font-size: 3rem;
  }
`

const navLinkScroll = css`
  color: ${color.main};
`

export default Nav
