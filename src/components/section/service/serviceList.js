import React from "react"
import serviceImg from "../../../img/service-design.svg"
import serviceImg2 from "../../../img/service-homepage.svg"
import serviceImg3 from "../../../img/service-web.svg"
import { css } from "@emotion/react"

const serviceList = () => {
  return (
    <div>
      <ul css={serviceListStyle}>
        <li css={serviceListItem}>
          <div css={serviceImgStyle}>
            <img src={serviceImg} alt="" />
          </div>
        </li>
        <li css={serviceListItem}>
          <div css={serviceImgStyle}>
            <img src={serviceImg2} alt="" />
          </div>
        </li>
        <li css={serviceListItem}>
          <div css={serviceImgStyle}>
            <img src={serviceImg3} alt="" />
          </div>
        </li>
      </ul>
    </div>
  )
}

const serviceListStyle = css`
  display: flex;
  justify-content: space-between;
`

const serviceListItem = css`
  width: 30%;
`

const serviceImgStyle = css`
  img {
    width: 100%;
  }
`

export default serviceList
