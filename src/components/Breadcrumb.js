import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function Breadcrumb(props) {
  console.log(props)

  // 可從 props.location.pathname 得到目前的路由名稱
  // 查表功能，為了要轉網址路由為中文
  const pathnameList = [
    '/product-list',
    '/product-detail',
    '/about',
  ]

  const pathnameTextList = [
    '商品列表',
    '商品詳細',
    '關於我們',
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
