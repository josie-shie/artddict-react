import React from 'react'
import LEventLogo from '../images/light-logo.svg'
import '../style/Lightheader.scss'

// please export after .reduce-width
export default function Lightheader() {
  return (
    <header>
      <div className="e-l-header">
        <img
          className="e-header-logo"
          src={LEventLogo}
          alt=""
        />
      </div>
    </header>
  )
}
