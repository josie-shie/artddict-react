import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './styles/Menu.scss'
import $ from 'jquery'

function Menu() {
  $('.mr-auto').on('click', function () {
    $(this)
      .css('background', '#000')
      .css('color', '#fff')
      .parent()
      .siblings()
      .children()
      .css('background', 'transparent')
  })

  return (
    <>
      <Navbar bg="" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {/* 用as屬性然後變成Link元件 */}
            <Nav.Link as={Link} to="/user-msgedit">
              <div className="edit">修改資料</div>
            </Nav.Link>
            <Nav.Link as={Link} to="/user-orderpro">
              <div className="userOrder">訂單查詢</div>
            </Nav.Link>
            <Nav.Link as={Link} to="/user-coupon">
              <div className="coupon">優惠券</div>
            </Nav.Link>
            <Nav.Link as={Link} to="/user-ticket">
              <div className="ticket">我的票券</div>
            </Nav.Link>
            <Nav.Link as={Link} to="/user-fav">
              <div className="userfav">我的收藏</div>
            </Nav.Link>
            <Nav.Link as={Link} to="/user-auction">
              <div className="userauction">競標查詢</div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Menu
