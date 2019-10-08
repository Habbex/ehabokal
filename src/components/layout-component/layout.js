/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "../header-component/header"
import LayoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div className={LayoutStyles.container}>
            <div className={LayoutStyles.content}>
                <Header />
                {props.children}
            </div>
    </div>
  )
}

export default Layout
