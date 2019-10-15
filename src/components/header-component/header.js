import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      headerImg: file(relativePath: { eq: "header/headerBackgroundImage2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2938, maxHeight: 3937) {
            ...GatsbyImageSharpFluid
          }
        }
    }
      profileImg: file(relativePath: { eq: "header/profilePic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
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
          <strong>I am Strata</strong>, a super simple
          <br />
          responsive site template freebie
          <br />
          crafted by <a href="http://html5up.net">HTML5 UP</a>.
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
