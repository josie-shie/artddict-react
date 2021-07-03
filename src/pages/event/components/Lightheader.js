import React from 'react'
import EventLogo from '../images/logo.svg'
import '../style/Lightheader.scss'

// please export after .reduce-width
export default function Lightheader() {
  return (
    <header>
      <div className="e-header">
        <img
          className="e-header-logo"
          src={EventLogo}
          alt=""
        />
      </div>
    </header>
  )
}
