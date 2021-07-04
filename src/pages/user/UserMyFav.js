import React from 'react'
import './styles/UserMyFav.scss'
import Logoheader from './components/Logoheader'
import Menu from './components/Menu'
import { Container } from 'react-bootstrap'

function UserMyFav() {
  return (
    <>
      <div className="u-body">
        <Logoheader />
        <div className="u-userMenu d-none d-lg-block d-xl-block">
          <Menu />
        </div>
        <Container></Container>
      </div>
    </>
  )
}

export default UserMyFav
