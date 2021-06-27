import React from "react"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import anchorLinks from "../constants/anchorLink"
import { color, font } from "../styles/variables"

const headerNav = () => {
  return (
    <nav css={nav}>
      <ul css={navList}>
        {anchorLinks.map(link => {
          return (
            <li key={link.id}>
              <Link css={navLink} to={link.link}>
                {link.text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const nav = css`
  font-family: ${font.lato};
`

const navList = css`
  display: flex;

  li {
    margin-left: 20px;
  }
`

const navLink = css`
  text-transform: uppercase;
  padding: 0.5em 0.2em;
  font-size: 14px;
  font-weight: 500;
  color: ${color.main};
  color: ${color.white};
  letter-spacing: 0.2em;

  &:hover {
    border-bottom: 2px solid ${color.main};
  }
`

export default headerNav
