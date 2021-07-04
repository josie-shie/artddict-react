import React from 'react'
import './styles/UserMyFav.scss'
import Logoheader from './components/Logoheader'
import Menu from './components/Menu'

function UserMyFav() {
  return (
    <>
      <div className="u-body">
        <Logoheader />
        <div className="u-userMenu">
          <Menu />
        </div>
      </div>
    </>
  )
}

export default UserMyFav
