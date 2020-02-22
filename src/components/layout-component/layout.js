/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import BodyClassName from "react-body-classname"

import Header from "../header-component/header"
import Section from "../section-component/section"
import LayoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <BodyClassName className={LayoutStyles.isPreload}>
      <div>
        <header className={LayoutStyles.header}>
          <Header />
        </header>
        <div className={LayoutStyles.main}>{props.children}</div>
      </div>
    </BodyClassName>
  )
}

export default Layout
