import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../CSS/bootstrap.min.css"

import "../CSS/Header.css"
import ExternalLinks from "./CreateLinks"

const Header = ({ siteTitle }) => (
  <nav
  className="navbar navbar-dark">
    <Link
    to="/"
    className="navbar-brand">
      {siteTitle}
    </Link>
    <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#HamburgerMenu"
    aria-controls="HamburgerMenu"
    aria-expanded="false"
    aria-label="Toggle navigation">
      <span
      className="navbar-toggler-icon"></span>
    </button>
    <div
    className="collapse navbar-collapse"
    id="HamburgerMenu"
    >
      <ExternalLinks/>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
