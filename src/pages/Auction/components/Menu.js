import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
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
              <div className="u-edit">修改資料</div>
            </Nav.Link>
            <Nav.Link as={Link} to="/user-orderpro">
              <div className="u-userOrder">訂單查詢</div>
            </Nav.Link>
            <Nav.Link as={Link} to="/user-coupon">
              <div className="u-coupon">我的優惠券</div>
            </Nav.Link>
            <Nav.Link as={Link} to="/user-ticket">
              <div className="u-ticket">我的票券</div>
            </Nav.Link>
            <Nav.Link as={Link} to="/user-myfav">
              <div className="u-userfav">我的收藏</div>
            </Nav.Link>
            <Nav.Link as={Link} to="/user-auction">
              <div className="u-userauction">競標查詢</div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Menu
