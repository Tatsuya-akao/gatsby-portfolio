import React from "react"
import { css } from "@emotion/react"
import { color } from "../../../styles/variables"
import { StaticImage } from "gatsby-plugin-image"
import Container from "../../container"
import Title from "../../title/title"
import BlogList from "./blogList"

const Blog = () => {
  const blogUrl = "https://web-dev.tech/"

  return (
    <section css={sectionBlog}>
      <Container>
        <Title titleText="blog" headLevel="2" titleType="main" />
        <div css={blogOverview}>
          <div css={blogImg}>
            <StaticImage src="../../../img/wd-icon.png" alt="webdev.tech" />
          </div>
          <div css={blogInfo}>
            <h3 css={blogTitle}>webdev.tech</h3>
            <p css={blogDesc}>
              Web制作に特化したブログ「
              <a
                href={blogUrl}
                css={blogDescLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                webdev.tech
              </a>
              」を個人で運営しています。
              <br />
              フリーランスのフロントエンジニアとして、実際の業務を通して得た知識や、Web制作の独学方法などを紹介しています。
            </p>
          </div>
        </div>
        <BlogList />
      </Container>
    </section>
  )
}

const sectionBlog = css`
  padding: 10rem 0;
  background-color: #f0f8ff;
`

const blogOverview = css`
  margin-top: 10rem;
  display: flex;
`

const blogImg = css`
  width: 25rem;
  margin-right: 5rem;
  flex-shrink: 0;
`

const blogInfo = css``

const blogTitle = css`
  color: ${color.main};
  font-size: 3rem;
`
const blogDesc = css`
  font-size: 1.8rem;
  line-height: 1.75;
  letter-spacing: 0.05em;
  margin-top: 2rem;
`

const blogDescLink = css`
  color: ${color.main};
  font-weight: bold;
  background-image: linear-gradient(90deg, #4433ff, #4433ff);
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: 0 2px;
  transition: background-size 0.3s;

  &:hover {
    color: #4433ff;
    background-size: 100% 2px;
  }
`

export default Blog
