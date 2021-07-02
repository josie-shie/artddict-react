import React from 'react'
import Logoheader from './components/Logoheader'
import Menu from './components/Menu'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import './styles/TicketPro.scss'

function TicketPro() {
  return (
    <>
        <div className="u-body">
              <Logoheader />
              <div className="u-userMenu">
              <Menu />
              </div>
              <div className="u-container-fluid">
          <div className="d-flex u-row justify-content-around">
            <div className="u-userMsg1">
              <Nav.Link as={Link} to="/user-msgedit">
                活動展
              </Nav.Link>
            </div>
            <div className="u-userPwd1">
              <Nav.Link as={Link} to="/user-pwdEdit">
                工作坊
              </Nav.Link>
            </div>
                  </div>
                  <div className="u-ticbox">

                  </div>
        </div>
      </div>
    </>
  )
}
export default TicketPro
