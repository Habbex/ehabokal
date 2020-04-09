import React from "react"
import BodyClassName from "react-body-classname"
import Header from "../header-component/header"
import LayoutStyles from "./layout.module.scss"
import Footer from "../footer-component/footer"

const Layout = props => {
  return (
    <BodyClassName className={LayoutStyles.isPreload}>
      <div>
        <Header />
        <div className={LayoutStyles.main}>{props.children}</div>
        <Footer />
      </div>
    </BodyClassName>
  )
}

export default Layout
