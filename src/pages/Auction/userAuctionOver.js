import React from 'react'
import './style/userAuctionOver.scss'
import Logoheader from './components/Logoheader'
import Breadcrumb from '../user/components/UserBreadcrumb'
import { withRouter, Link, NavLink } from 'react-router-dom'
// SweetAlert
import swal from 'sweetalert'

function userAuctionOver(props) {
  const userid = props.match.params.userid
  async function getMemAucDetailFromServer(id) {
    // 開啟載入指示
    // setDataLoading(true)
    // 連接的伺服器資料網址
    const url =
      `http://localhost:6005/auctoin/auc_member` +
      `?id=${id}`
    // `&pages=${pages}`

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // //設定資料
    // setMemAucData(data.rows)
    // //設定頁數資料
    // setPagesInfo(data)

    console.log(data)
    //設定頁碼
    if (data.totalPages < 6) {
      let pagelength = []
      for (let i = 0; i < data.totalPages; i++) {
        pagelength.push(i + 1)
      }
      // setShowPages(pagelength)
    }
  }

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
    // const data = await response.json()
  }

  return (
    <div>
      <div className="u-body">
        <Logoheader />
        <div className="u-breadcrumb">
          <Breadcrumb />
        </div>
        <div className="tab-bar">
          <NavLink
            activeClassName="activenav"
            className={'tab'}
            to={`/user-msgedit/${userid}`}
            style={{ textDecoration: 'none' }}
          >
            修改資料
          </NavLink>

          <NavLink
            activeClassName="activenav"
            className={'tab'}
            to={`/user-orderpro/${userid}`}
            style={{ textDecoration: 'none' }}
          >
            訂單查詢
          </NavLink>
          <NavLink
            activeClassName="activenav"
            className={'tab'}
            to={`/user-coupon/${userid}`}
            style={{ textDecoration: 'none' }}
          >
            我的優惠券
          </NavLink>
          <NavLink
            activeClassName="activenav"
            className={'tab'}
            to={`/user-ticket/${userid}`}
            style={{ textDecoration: 'none' }}
          >
            我的票券
          </NavLink>
          <NavLink
            activeClassName="activenav"
            className={'tab'}
            to={`/user-myfav/${userid}`}
            style={{ textDecoration: 'none' }}
          >
            我的收藏
          </NavLink>
          <NavLink
            activeClassName="activenav"
            className={'tab'}
            to={`/user-auction/${userid}`}
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
        <div className="u-container-fluid">
          <div className="d-flex u-row justify-content-around">
            <div className="u-usertitleLeft">
              <Link to="/user-auction">競標中</Link>
            </div>
            <div className="u-usertitleRight">
              <Link to="/user-auctionOver">已得標</Link>
            </div>
          </div>
        </div>
        <div className="uAucO-main">
          <div className="uAucO-picture"></div>
          <div className="uAucO-productState">
            <ul>
              <li>競標編號:A956722</li>
              <li>
                競標商品：BTS 麥當勞飲料杯 防彈少年團聯名
                不防彈款
              </li>
              <li>您的出價：NT$ 340</li>
            </ul>
          </div>
          <div className="uAucO-btnf">
            <button className="uAucO-btnA">
              拍賣品細節
            </button>
            <button className="uAucO-btnB">訂單明細</button>
          </div>
        </div>
        <div className="uAucO-detail">
          <div className="uAucO-detail-Title">訂單明細</div>
          <div className="uAuc-detail-contentA">
            <ul>
              <li>競標編號</li>
              <li>得標時間</li>
              <li>收件人</li>
              <li>手機編號</li>
              <li>訂單狀態</li>
            </ul>
            <ul>
              <li>A956722</li>
              <li>2021-03-22</li>
              <li>gy哥</li>
              <li>09123456789</li>
              <li>帶取貨</li>
            </ul>
            <ul>
              <li>付款方式</li>
              <li>付款狀態</li>
              <li>運費</li>
              <li>總金額</li>
            </ul>
            <ul>
              <li>信用卡</li>
              <li>已付款</li>
              <li>NT$ 80</li>
              <li>NT$ 860</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(userAuctionOver)
