import React from "react"
import Seo from "../components/Seo"
import Layout from "../components/global/Layout"
import Intro from "../components/index/Intro"
import Skills from "../components/index/Skills"
import FeaturedProjects from "../components/index/FeaturedProjects"
import Contact from "../components/index/Contact"
import "../styles/styles.scss"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Intro />
    <Skills />
    <FeaturedProjects />
    <Contact />
  </Layout>
)

export default IndexPage
