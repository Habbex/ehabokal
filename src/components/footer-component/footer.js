import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import footerStyles from "./footer.module.scss"
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
            <a href={data.site.siteMetadata.twitter} className={footerStyles.icon}>
              <FontAwesomeIcon icon={["fab", "twitter"]} size="1x" />
              <span className={footerStyles.label}>Twitter</span>
            </a>
          </li>
          <li>
            <a href={data.site.siteMetadata.github} className={footerStyles.icon}>
              <FontAwesomeIcon icon={["fab", "github"]} size="1x" />
              <span className={footerStyles.label}>github</span>
            </a>
          </li>
          <li>
            <a href={data.site.siteMetadata.email} className={footerStyles.icon}>
              <FontAwesomeIcon icon={["fas", "at"]} size="1x" />
              <span className={footerStyles.label}>email</span>
            </a>
          </li>
        </ul>
        </div>
        <div className={footerStyles.inner}>
        <ul className={footerStyles.copyright}>
          <li><span> &copy;  Stuff</span></li>
        </ul>
      </div>
    </footer>
  )
}
export default Footer
