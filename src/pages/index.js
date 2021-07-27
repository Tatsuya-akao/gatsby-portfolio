import React, { useState } from "react"
import Layout from "../components/layout"
import Mainvisual from "../components/section/mainvisual"
import Profile from "../components/section/profile"
import SkillVer2 from "../components/section/skillVer2"
import Works from "../components/section/works/works"
import Blog from "../components/section/blog"
import Contact from "../components/section/contact"
import Seo from "../components/Seo"

export default function Home() {
  const [mvHeight, setMvHeight] = useState(0)

  return (
    <>
      <Seo />
      <Layout mvHeight={mvHeight}>
        <Mainvisual setMvHeight={setMvHeight} />
        <Profile />
        <SkillVer2 />
        <Works />
        <Blog />
        <Contact />
      </Layout>
    </>
  )
}
