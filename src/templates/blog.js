import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout-component/layout"
import Section from "../components/section-component/section"
import SectionStyles from "../components/section-component/section.module.scss"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
const Blog = props => {
  return (
    <Layout>
      <SEO title={props.data.markdownRemark.frontmatter.title} />
      <Section>
        <section>
          <header className={SectionStyles.major}>
            <h2>{props.data.markdownRemark.frontmatter.title}</h2>
          </header>
          <p>{props.data.markdownRemark.frontmatter.date}</p>
          <div
            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          ></div>
        </section>
      </Section>
    </Layout>
  )
}

export default Blog
