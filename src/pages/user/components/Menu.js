import { React, useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/classes.css'
// SweetAlert
import swal from 'sweetalert'

function Menu() {
  const [id, setId] = useState('')
  async function logoutToSever() {
    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/users/logout'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    // 要等驗証過，再設定資料(簡單的直接設定)

    swal({
      text: '登出成功！',
      icon: 'success',
      button: false,
      timer: 3000,
    })

    const response = await fetch(request)
    const data = await response.json()
    setId(data.id)
  }

  return (
    <>
      <div className="tab-bar">
        <NavLink
          activeClassName="activenav"
          className={'tab'}
          to={`/user-msgedit/${id}`}
          style={{ textDecoration: 'none' }}
        >
          修改資料
        </NavLink>

        <NavLink
          activeClassName="activenav"
          className={'tab'}
          to={`/user-orderpro/${id}`}
          style={{ textDecoration: 'none' }}
        >
          訂單查詢
        </NavLink>
        <NavLink
          activeClassName="activenav"
          className={'tab'}
          to={`/user-coupon/${id}`}
          style={{ textDecoration: 'none' }}
        >
          我的優惠券
        </NavLink>
        <NavLink
          activeClassName="activenav"
          className={'tab'}
          to={`/user-ticket/${id}`}
          style={{ textDecoration: 'none' }}
        >
          我的票券
        </NavLink>
        <NavLink
          activeClassName="activenav"
          className={'tab'}
          to={`/user-myfav/${id}`}
          style={{ textDecoration: 'none' }}
        >
          我的收藏
        </NavLink>
        <NavLink
          activeClassName="activenav"
          className={'tab'}
          to="/user-auction"
          style={{ textDecoration: 'none' }}
        >
          競標查詢
        </NavLink>
        <NavLink
          activeClassName="activenav"
          className={'tab'}
          to="/user-login"
          onClick={() => {
            logoutToSever()
          }}
          style={{ textDecoration: 'none' }}
        >
          登出
        </NavLink>
      </div>
    </>
  )
}

export default Menu
