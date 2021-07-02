import React from 'react'
import EventLogo from '../images/logo.svg'
import '../style/Darkheader.scss'

// please export after .reduce-width
export default function Darkheader() {
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
