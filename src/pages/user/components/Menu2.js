import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/classes.css'

function Menu2() {
  return (
    <>
      <div className="tab-bar">
        <NavLink
          activeClassName="activenav"
          className={'tab'}
          to="/user-pwdEdit"
          style={{ textDecoration: 'none' }}
        >
          修改資料
        </NavLink>

        <NavLink
          activeClassName="activenav"
          className={'tab'}
          to="/user-ordertic"
          style={{ textDecoration: 'none' }}
        >
          訂單查詢
        </NavLink>
        <NavLink
          activeClassName="activenav"
          className={'tab'}
          to="/user-coupon"
          style={{ textDecoration: 'none' }}
        >
          我的優惠券
        </NavLink>
        <NavLink
          activeClassName="activenav"
          className={'tab'}
          to="/user-workshop"
          style={{ textDecoration: 'none' }}
        >
          我的票券
        </NavLink>
        <NavLink
          activeClassName="activenav"
          className={'tab'}
          to="/user-myfav"
          style={{ textDecoration: 'none' }}
        >
          我的收藏
        </NavLink>
        <NavLink
          activeClassName="activenav"
          className={'tab'}
          to="/user-auctionOver"
          style={{ textDecoration: 'none' }}
        >
          競標查詢
        </NavLink>
      </div>
    </>
  )
}

export default Menu2
