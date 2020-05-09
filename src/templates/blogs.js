import React from 'react';
import PropTypes from "prop-types"
import {Link,graphql} from "gatsby"

import Layout from "../components/layout-component/layout"
import Section from "../components/section-component/section"
import blogStyles from "./blogs.module.scss"
import layoutStyles from "../components/layout-component/layout.module.scss"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Pager from "../components/pager-componet/pager"

const BlogList= ({data, pageContext})=>{
    const blogs= data.allMarkdownRemark.edges;
    return (
        <Layout>
            <SEO title="Blogs List"/>
          <section>
            <Section>
              <h2>Blog entries</h2>
              <ol className={layoutStyles.row}>
                {blogs.map(edge => {
                  return (
                    <article
                      className={ `${layoutStyles.col6} layout-module--col-12-xsmall--2pZfw ${blogStyles.workItem}`}
                      key={edge.node.id}
                    >
                      <Link
                        className={`${layoutStyles.image} ${layoutStyles.fit} ${layoutStyles.thumb}`}
                        to={`/blogs/${edge.node.fields.slug}`}
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
          <Pager pageContext={pageContext}/>
        </Layout>
      )
};

BlogList.propTypes ={
    data: PropTypes.object.isRequired,
    pageContext : PropTypes.object.isRequired
};

export const query = graphql`
query ($skip: Int!, $limit: Int!){
    allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: $limit
        skip: $skip
    ) {
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
    sectionImg: file(relativePath: { eq: "images/sectionImages/01.jpg" }) {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
        }
      }
  }
  
`;

export default BlogList;