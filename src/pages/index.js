import React from "react"
import Layout from "../components/layout"
import Mainvisual from "../components/section/mainvisual"
import Profile from "../components/section/profile"
import SkillVer2 from "../components/section/skillVer2"
import Works from "../components/section/works/works"
import Blog from "../components/section/blog"
import Contact from "../components/section/contact"

export default function Home() {
  return (
    <Layout>
      <Mainvisual />
      <Profile />
      <SkillVer2 />
      <Works />
      <Blog />
      <Contact />
    </Layout>
  )
}
