import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout-component/layout"
import Section from "../components/section-component/section"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Section>
    <header>
      <h2>Hi people</h2>
      </header>
      <p>Ehabs Portfolio</p>
      <p>Currently bulding something great</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
      {/* <ul class="actions"> */}
        <Link to="/page-2/">Go to page 2</Link>
      {/* </ul> */}
    </Section>
  </Layout>
)

export default IndexPage
