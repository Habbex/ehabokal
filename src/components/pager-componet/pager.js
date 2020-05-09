import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import pagerStyles from "./pager.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext

  return (
    <div>
      {previousPagePath && (
        <span className={pagerStyles.pager}>
          <Link to={previousPagePath}><FontAwesomeIcon icon={["fas", "arrow-left"]} size="1x" /> Prev</Link>
        </span>
      )}
      {nextPagePath && (
        <span className={pagerStyles.pager}>
          <Link to={nextPagePath}>Next <FontAwesomeIcon icon={["fas", "arrow-right"]} size="1x" /></Link>
        </span>
      )}
    </div>
  )
}

Pager.propTypes = {
  pageContext: PropTypes.object.isRequired
};

export default Pager;
