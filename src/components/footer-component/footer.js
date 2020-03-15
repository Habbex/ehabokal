import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import footerStyles from "./footer.moduel.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          twitter
          github
          email
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <div className={footerStyles.inner}>
        <ul className={footerStyles.icons}>
          <li>
            <a href={data.site.siteMetadata.twitter}>
              <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
            </a>
            <a href={data.site.siteMetadata.github}>
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
            </a>
            <a href={data.site.siteMetadata.email}>
              <FontAwesomeIcon icon={["fas", "at"]} size="2x" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer
