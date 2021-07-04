import React from 'react'
import logo from '../img/logo-bk.svg'
import '../styles/Logoheader.scss'

function Logoheader() {
  return (
    <>
      <header className="d-none d-lg-block d-xl-block">
        <div className="u-container-fluid">
          <div className="u-logo-header">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </header>
    </>
  )
}

export default Logoheader
