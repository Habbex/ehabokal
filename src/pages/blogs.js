import React from "react"
import Layout from "../components/layout-component/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import blogStyles from "./blogs.module.scss"
import layoutStyles from "../components/layout-component/layout.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
              date
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
      <section>
        <h2>Blog</h2>
        <div className={layoutStyles.row}>
          <ol className={blogStyles.posts}>
            {data.allMarkdownRemark.edges.map(edge => {
              return (
                <article className={layoutStyles.col-6, layoutStyles.col-12-xsmall, blogStyles.workItem} key={edge.node.id}>
                  <Link
                    to={`/blog/${edge.node.fields.slug}`}
                    key={edge.node.id}
                  >
                    <h3>{edge.node.frontmatter.title}</h3>
                    <p>{edge.node.frontmatter.date}</p>
                  </Link>
                </article>
              )
            })}
          </ol>
        </div>
      </section>
    </Layout>
  )
}
export default BlogPage
