import React from 'react'
import { withRouter, Link } from 'react-router-dom'

function Breadcrumb(props) {
  const userid = props.match.params.userid

  // 可從 props.location.pathname 得到目前的路由名稱
  // 查表功能，為了要轉網址路由為中文
  const pathnameList = [
    `/user-msgedit/${userid}`,
    `/user-pwdedit/${userid}`,
    `/user-orderpro/${userid}`,
    `/user-ordertic/${userid}`,
    `/user-coupon/${userid}`,
    `/user-ticket/${userid}`,
    `/user-workshop/${userid}`,
    `/user-myfav/${userid}`,
    `/user-auction/${userid}`,
    `/user-auctionOver/${userid}`,
  ]

  const pathnameTextList = [
    '資料修改 / 基本資料',
    '資料修改 / 密碼',
    '訂單查詢 / 商品',
    '訂單查詢 / 票券',
    '我的優惠券',
    '我的票券 / 活動展',
    '我的票券 / 工作坊',
    '我的收藏',
    '競標查詢 / 競標中',
    '競標查詢 / 已結標',
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
