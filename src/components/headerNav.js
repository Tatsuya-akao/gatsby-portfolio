import React from "react"
import { css } from "@emotion/react"
import anchorLinks from "../constants/anchorLink"
import { color, font } from "../styles/variables"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { mq } from "../styles/mq"

const headerNav = ({ scroll, headerHeight }) => {
  return (
    <nav css={[nav, scroll ? navScroll : null]}>
      <ul css={navList}>
        {anchorLinks.map(link => {
          return (
            <li key={link.id}>
              <AnchorLink
                css={[navLink, scroll ? navScrollLink : null]}
                href={link.path}
                offset={link.offset ? headerHeight - 140 : headerHeight}
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

const nav = css`
  font-family: ${font.lato};

  ${mq("tab")} {
    display: none;
  }
`

const navScroll = css`
  height: 100%;
`

const navList = css`
  display: flex;

  li {
    margin-left: 2rem;
  }

  ${navScroll} & {
    height: 100%;
  }
`

const navLink = css`
  position: relative;
  text-transform: uppercase;
  padding: 0.5em 0.2em;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  display: flex;
  align-items: center;
  height: 100%;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 0 auto;
    height: 2px;
    width: 0;
    background-color: ${color.white};
    transition: all 0.3s;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
`

const navScrollLink = css`
  &::before {
    background-color: ${color.main};
  }
`

export default headerNav
