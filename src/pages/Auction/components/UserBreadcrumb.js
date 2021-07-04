import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function Breadcrumb(props) {
  console.log(props)

  // 可從 props.location.pathname 得到目前的路由名稱
  // 查表功能，為了要轉網址路由為中文
  const pathnameList = [
    '/user-msgedit',
    '/user-pwdEdit',
    '/user-orderpro',
    '/user-ordertic',
    '/user-coupon',
    '/user-ticket',
    '/user-workshop',
    '/user-myfav',
  ]

  const pathnameTextList = [
    '會員資料修改',
    '會員密碼修改',
    '商品訂單查詢',
    '票券訂單查詢',
    '我的優惠券',
    '活動展票券',
    '工作坊票券',
    '我的收藏',
  ]

  const convertPathnameToText = () => {
    const index = pathnameList.indexOf(
      props.location.pathname
    )

    return pathnameTextList[index]
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">首頁</Link>
          </li>
          <li
            className="breadcrumb-item active"
            aria-current="page"
          >
            {convertPathnameToText()}
          </li>
        </ol>
      </nav>
    </>
  )
}

export default withRouter(Breadcrumb)
