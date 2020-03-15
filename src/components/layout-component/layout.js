import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import BodyClassName from "react-body-classname"

import Header from "../header-component/header"
import Footer from "../footer-component/footer"
import Section from "../section-component/section"
import LayoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <BodyClassName className={LayoutStyles.isPreload}>
      <div>
        <Header />
        <Footer />
        <div className={LayoutStyles.main}>{props.children}</div>
      </div>
    </BodyClassName>
  )
}

export default Layout
