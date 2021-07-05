import React from 'react'
import logo from '../images/logo-bk.svg'

function Logoheader() {
  return (
    <>
      <div className="u-headerbox"></div>
      <header>
        <div className="u-container-fluid">
          <div className="u-logo-header">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </header>
      <div className="u-breadcrumb"></div>
    </>
  )
}

export default Logoheader
