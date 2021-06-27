import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, graphql } from "gatsby"
import Container from "../../container"
import Title from "../../title/title"
import WorksList from "./worksList"
import InfoBox from "../../block/infoBox"

const Works = () => {
  const data = useStaticQuery(graphql`
    query MyWorks {
      allMicrocmsWorks(sort: { fields: order, order: DESC }) {
        nodes {
          worksId
          link
          image {
            url
          }
          title
          labels {
            fieldId
            name
          }
        }
      }
    }
  `)

  const {
    allMicrocmsWorks: { nodes: works },
  } = data

  return (
    <section css={sectionWorks}>
      <Container>
        <Title titleText="works" headLevel="2" titleType="main" />
        <WorksList works={works} />
        <InfoBox>
          <p>
            制作会社様から頂いた案件は原則お見せできませんので、掲載許可を得た一部のみ掲載しています。
            <br />
            この他にもランディングページやWordPressサイト制作など、多数の実績がございます。
            <br />
            <small>
              ※掲載分は全て実際のサイトで、デモサイトや模写は含んでいません。
            </small>
          </p>
        </InfoBox>
      </Container>
    </section>
  )
}

const sectionWorks = css`
  padding: 10rem 0;
`

export default Works
