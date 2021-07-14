import { React, useState, useEffect } from 'react'
import './styles/OrderPro.scss'
// import Menu from './components/Menu'
import { withRouter, NavLink , Link } from 'react-router-dom'
import Logoheader from './components/Logoheader'
import Breadcrumb from './components/UserBreadcrumb'
import { Container } from 'react-bootstrap'

function OrderPro(props) {
  const [orderId, setOrderId] = useState('')
  const [orderDate, setOrderDate] = useState('')
  const [orderPrice, setOrderPrice] = useState('')
  const [orderStatus, setOrderStatus] = useState('')
  // const [id, setId] = useState('')
  const [orders, setOrders] = useState([])
  const id = props.match.params.userid

  // async function getUserFromServer(userid) {
  //   // 連接的伺服器資料網址
  //   const url = 'http://localhost:6005/users/' + userid

  //   // 注意header資料格式要設定，伺服器才知道是json格式
  //   const request = new Request(url, {
  //     method: 'GET',
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'appliaction/json',
  //     }),
  //   })

  //   const response = await fetch(request)
  //   const data = await response.json()
  //   console.log(`[GET] response = ${data}`)

  //   setId(data.id)
  // setOrders([])
  // }

  async function getUserOrder(userid) {
    const url = `http://localhost:6005/users/getOrder/1`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    setOrders(data)
    // console.log(`setOrderData = ${setOrderData}`)
  }

  // useEffect(() => {
  //   getUserFromServer(userid)
  // }, [])

  useEffect(() => {
    getUserOrder()
  }, [])

  const OrderDisplay =
    orders.length === 0
      ? 'noneData'
      : orders.map((order) => {
          return (
            <div class="u-table">
              <div class="u-th d-flex justify-content-around">
                <div class="u-orderId">訂單編號</div>
                <div class="u-orderDate">訂單日期</div>
                <div class="u-payType">付款狀態</div>
                <div class="u-price">總價</div>
                <div class="u-orderType">訂單狀態</div>
                <div class="u-bt col-2"></div>
              </div>
              <div class="u-tb d-flex justify-content-around">
                <div class="u-ordrtInput1">
                  {order.orderId}
                </div>
                <div class="u-ordrtInput2">
                  {order.orderDate}
                </div>
                <div class="u-ordrtInput3">已付款</div>
                <div class="u-ordrtInput4">
                  {order.orderPrice}
                </div>
                <div class="u-ordrtInput5 ">
                  {order.orderStatus}
                </div>
                <div class="u-bt col-2">
                  <div className="u-Bbtn">
                    <button class="btn btn btn-dark">
                      <Link
                        className="u-link"
                        to="/user-orderpro/detail"
                        style={{ textDecoration: 'none' }}
                      >
                        詳細資料
                      </Link>
                    </button>
                  </div>
                  <div className="u-Lbtn">
                    <button class="btn btn btn-light">
                      取消
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })
  return (
    <>
      <div className="u-body">
        <Logoheader />
        <div className="u-breadcrumb">
          <Breadcrumb />
        </div>
        {/* <div className="u-userMenu d-none d-lg-block d-xl-block">
          <Menu />
        </div> */}

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
          {/* <NavLink
          activeClassName="activenav"
          className={'tab'}
          to="/user-login"
          onClick={() => {
            logoutToSever()
          }} */}
          {/* style={{ textDecoration: 'none' }}
        >
          登出
        </NavLink> */}
        </div>
        <Container fluid>
          <div className="u-row d-flex justify-content-around">
            <div className="u-userPro">
              <Link to={`/user-orderpro/${id}`}>商品</Link>
            </div>
            <div className="u-userTic">
              <Link to={`/user-ordertic/${id}`}>票券</Link>
            </div>
          </div>
          <div className="u-progress d-flex">
            <div className="pr-3 pl-3">進度查詢</div>
            <select
              className="user-select pl-3"
              name=""
              id=""
            >
              <option style={{ color: '#707070' }} value="">
                請選擇
              </option>
              <option value="">全部</option>
              <option value="">待出貨</option>
              <option value="">已完成</option>
              <option value="">取消紀錄</option>
              <option value="">退貨紀錄</option>
            </select>
          </div>

          {OrderDisplay}

          {/* <div class="u-table">
            <div class="u-th d-flex justify-content-around">
              <div class="u-orderId">訂單編號</div>
              <div class="u-orderDate">訂單日期</div>
              <div class="u-payType">付款狀態</div>
              <div class="u-price">總價</div>
              <div class="u-orderType">訂單狀態</div>
              <div class="u-bt col-2"></div>
            </div>
            <div class="u-tb d-flex justify-content-around">
              <div class="u-ordrtInput1">orderId</div>
              <div class="u-ordrtInput2">orderDate</div>
              <div class="u-ordrtInput3">已付款</div>
              <div class="u-ordrtInput4">orderPrice</div>
              <div class="u-ordrtInput5 ">orderStatus</div>
              <div class="u-bt col-2">
                <div className="u-Bbtn">
                  <button class="btn btn btn-dark">
                    <Link
                      className="u-link"
                      to="/user-orderpro/detail"
                      style={{ textDecoration: 'none' }}
                    >
                      詳細資料
                    </Link>
                  </button>
                </div>
                <div className="u-Lbtn">
                  <button class="btn btn btn-light">
                    取消
                  </button>
                </div>
              </div>
            </div>
          </div> */}
        </Container>
      </div>
    </>
  )
}

export default withRouter(OrderPro)
