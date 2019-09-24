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
    <div style={{ maxWidth: `50px`, marginBottom: `1.45rem` }}>
    <Img fluid={data.headerImg.childImageSharp.fluid}/>
    </div>
      <h1>
        <Link className={headerStyles.title} to="/">Ehab Portfolio </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">about</Link>
          </li>
          <li>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header
