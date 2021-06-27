import React from "react"
import { css } from "@emotion/react"
import { rgba } from "emotion-rgba"
import { color } from "../../../styles/variables"
import { HiExternalLink } from "react-icons/hi"

const worksItem = ({ work }) => {
  const { link, title, image, labels } = work

  return (
    <li css={itemStyle}>
      <a href={link} target="_blank" rel="noopener noreferrer" css={itemLink}>
        <img src={image.url} alt={title} />
        <div className="overlay">
          <p css={overlayText}>{title}</p>
          <HiExternalLink />
        </div>
      </a>
      <h3 css={worksTitle}>{title}</h3>
      <ul css={labelList}>
        {labels.map((label, index) => {
          return (
            <li css={labelStyle} key={index}>
              {label.name}
            </li>
          )
        })}
      </ul>
    </li>
  )
}

const itemStyle = css`
  width: 31%;
  margin-right: 3.5%;
  margin-top: 6rem;

  &:nth-of-type(3n) {
    margin-right: 0;
  }
`

const itemLink = css`
  display: block;
  width: 100%;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 6px 10px ${rgba("#000", 0.2)};
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    border-radius: 10px;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 2rem;
    color: ${color.white};
    background-image: linear-gradient(
      135deg,
      ${rgba("#15aaff", 0.8)} 0%,
      ${rgba("#0052d4", 0.8)} 100%
    );
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transform: translateY(100%);
    transition: all 0.2s;
  }

  &:hover {
    .overlay {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
  }
`

const overlayText = css`
  font-size: 1.6rem;
  margin-bottom: 1rem;
`

const worksTitle = css`
  font-size: 1.6rem;
  font-weight: 300;
  font-style: italic;
  margin: 2rem auto 0;
  color: #8c8b8b;
  text-align: left;
  position: relative;
  padding: 0.5rem 0 0.5rem 0;
`

const labelList = css`
  display: flex;
  flex-wrap: wrap;
`

const labelStyle = css`
  font-size: 1.1rem;
  display: inline-block;
  padding: 0.6rem 0.8rem;
  border-radius: 50px;
  margin-right: 1rem;
  letter-spacing: 0.05em;
  margin-top: 1rem;
  color: #fff;
  background-color: #287ae0;
`

export default worksItem
