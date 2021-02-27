import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../CSS/Header.css"

const Header = ({ siteTitle }) => (
  <header
    className="Header"
  >
    <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            height: "9vh"
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
