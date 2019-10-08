import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from './header.module.scss'
import {useStaticQuery, graphql} from "gatsby"
import Img from "gatsby-image"
const Header = () => {
    const data= useStaticQuery(graphql`
    query {
      headerImg: file(relativePath: { eq: "gatsby-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
    `)
  return (
    <header className={headerStyles.header}>
    <div className={headerStyles.inner}>
        <Link to="/">
         <Img className={headerStyles.imageAvatar} fluid={data.headerImg.childImageSharp.fluid}/>
         </Link>
      <h1><strong>I am Strata</strong>, a super simple<br />
					responsive site template freebie<br />
					crafted by <a href="http://html5up.net">HTML5 UP</a>.
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
           <h1>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
           </h1>
          </li>
          {/* <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">about</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
          </li> */}
        </ul>
      </nav>
      </div>
    </header>
  )
}
export default Header
