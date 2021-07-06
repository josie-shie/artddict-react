import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import LEventLogo from '../images/light-logo.svg'
import '../style/Lightheader.scss'

// please export after .reduce-width
function Lightheader() {
  return (
    <header>
      <div className="e-l-header">
        <Link to="/">
          <img
            className="e-header-logo"
            src={LEventLogo}
            alt=""
          />
        </Link>
      </div>
    </header>
  )
}

export default withRouter(Lightheader)
