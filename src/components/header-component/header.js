
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.scss"
import { Link,useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      headerImg: file(relativePath: { eq: "images/header/headerBackgroundImage2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2938, maxHeight: 3937) {
            ...GatsbyImageSharpFluid
          }
        }
    }
      profileImg: file(relativePath: { eq: "images/header/profilePic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      site{
          siteMetadata{
              title,
              description
          }
      }
    }
  `)

  
  return (
    <div className={headerStyles.header}>
     <Img style={{position: "absolute",left: 0,top: 0,width: "100%",height: "100%"}} fluid={data.headerImg.childImageSharp.fluid}/>
      <div className={headerStyles.inner}>
        <Link  to="/">
          <Img  className={headerStyles.imageAvatar} fluid={data.profileImg.childImageSharp.fluid}/>
        </Link>
        <h1>
          <strong>{data.site.siteMetadata.title}</strong>, {data.site.siteMetadata.description}
        </h1>
        <nav>
          <ul>
            <li>
              <Link activeClassName={headerStyles.activeNavItem} to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/about"
              >
                About me
              </Link>
            </li>
            <li>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to="/contact"
              >
                Contact me
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
export default Header
