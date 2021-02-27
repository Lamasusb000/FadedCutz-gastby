import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../CSS/Header.css"

const Header = ({ siteTitle }) => (
  <header
    className="Header"
  >
    <h1 className="No-Bottom-Margin Hug-Left">
      <Link
        to="/"
        className="No-Decor White-Text"
      >
        {siteTitle}
      </Link>
    </h1>
    <div 
      className="Extra-Links"
    >
      <h3
        className="No-Bottom-Margin"
      >
        <a 
          href="https://www.genbook.com/bookings/slot/reservation/31194200"
          className="No-Decor White-Text"
        >
          Book Now
        </a>
      </h3>
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
