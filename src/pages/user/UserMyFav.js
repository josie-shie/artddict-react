import React from 'react'
import './styles/UserMyFav.scss'
import Logoheader from './components/Logoheader'
import Menu from './components/Menu'
import Breadcrumb from './components/UserBreadcrumb'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function UserMyFav() {
  return (
    <>
      <div className="u-body">
        <Logoheader />
        <div className="u-breadcrumb">
          <Breadcrumb />
        </div>
        <div className="u-userMenu d-none d-lg-block d-xl-block">
          <Menu />
        </div>
        <Container fluid>
          <div className="u-row d-flex justify-content-around">
            <div className="u-Myfavtitle1">
              <Link
                to="/user-msgedit"
                style={{ textDecoration: 'none' }}
              >
                商品列
              </Link>
            </div>
            <div className="u-Myfavtitle2">
              <Link
                to="/"
                style={{ textDecoration: 'none' }}
              >
                活動展
              </Link>
            </div>
            <div className="u-Myfavtitle3">
              <Link
                to="/"
                style={{ textDecoration: 'none' }}
              >
                工作坊
              </Link>
            </div>
            <div className="u-Myfavtitle4">
              <Link
                to="/"
                style={{ textDecoration: 'none' }}
              >
                美術館
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default UserMyFav
