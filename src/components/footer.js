import React from "react"
import { css } from "@emotion/react"
import { color } from "../styles/variables"
import { mq } from "../styles/mq"

const Footer = () => {
  return (
    <footer css={footer}>
      <p css={footerCopy}>
        &copy; {new Date().getFullYear()} Tatsuya Akao All rights reserved.
      </p>
    </footer>
  )
}

const footer = css`
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  text-align: center;
  padding: 1rem 0;
  background-image: linear-gradient(
    135deg,
    #15aaff 0%,
    #65c7f7 50%,
    #0052d4 100%
  );
`

const footerCopy = css`
  color: ${color.white};
  font-size: 1.4rem;
  letter-spacing: 0.05em;

  ${mq("sp")} {
    font-size: 1.2rem;
  }
`

export default Footer
