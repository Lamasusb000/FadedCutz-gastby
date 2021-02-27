import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../CSS/Header.css"

const Header = ({ siteTitle }) => (
  <header
    className="Header"
  >
    <div
    className="Link-Container">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          className="Header-Link"
        >
          {siteTitle}
        </Link>
      </h1>
      <h4>
        <a 
          href="https://www.genbook.com/bookings/slot/reservation/31194200"
        >
          Book Now
        </a>
      </h4>
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
