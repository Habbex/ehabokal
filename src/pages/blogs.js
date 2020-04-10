import React from "react"
import Layout from "../components/layout-component/layout"
import Section from "../components/section-component/section"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blogs.module.scss"
import layoutStyles from "../components/layout-component/layout.module.scss"
import Img from "gatsby-image"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      sectionImg: file(relativePath: { eq: "images/sectionImages/01.jpg" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
              shortdescription
              featuredImage {
                childImageSharp {
                  fluid{
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Section>
        <header>
          <h2>Hi people</h2>
        </header>
        <p>Ehabs Portfolio</p>
        <p>Currently bulding something great</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}></div>
        <Link to="/page-2/">Go to page 2</Link>
      </Section>
      <section>
        <Section>
          <h2>Blog</h2>
          <ol className={layoutStyles.row}>
            {data.allMarkdownRemark.edges.map(edge => {
              return (
                <article
                  className={ `${layoutStyles.col6} layout-module--col-12-xsmall--2pZfw  ${blogStyles.workItem}`}
                  key={edge.node.id}
                >
                  <Link
                    className={`${layoutStyles.image} ${layoutStyles.fit} ${layoutStyles.thumb}`}
                    to={`/blog/${edge.node.fields.slug}`}
                    key={edge.node.id}
                  >
                    {edge.node.frontmatter.featuredImage ? (
                      <Img
                        fluid={
                          edge.node.frontmatter.featuredImage.childImageSharp
                            .fluid
                        }
                      />
                    ) : (
                      <Img fluid={data.sectionImg.childImageSharp.fluid}  />
                    )}
                  </Link>
                  <h3>{edge.node.frontmatter.title}</h3>
                  <p>{edge.node.frontmatter.shortdescription}</p>
                  <p>{edge.node.frontmatter.date}</p>
                </article>
              )
            })}
          </ol>
        </Section>
      </section>
    </Layout>
  )
}
export default BlogPage
