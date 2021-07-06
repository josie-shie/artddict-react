import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import EventLogo from '../images/logo.svg'
import '../style/Darkheader.scss'

// please export after .reduce-width
function Darkheader() {
  return (
    <header>
      <div className="e-header">
        <Link to="/">
          <img
            className="e-header-logo"
            src={EventLogo}
            alt=""
          />
        </Link>
      </div>
    </header>
  )
}

export default withRouter(Darkheader)
