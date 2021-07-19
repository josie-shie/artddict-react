import { React, useState, useEffect } from 'react'
import './styles/OrderPro.scss'
import { withRouter, NavLink, Link } from 'react-router-dom'
import Logoheader from './components/Logoheader'
import Breadcrumb from './components/UserBreadcrumb'
import { Container } from 'react-bootstrap'
// SweetAlert
import swal from 'sweetalert'

function OrderPro(props) {
  const [orders, setOrders] = useState([])
  const userid = props.match.params.userid

  async function getUserOrder() {
    const url = `http://localhost:6005/users/getProOrder/${userid}`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // use orders => map div classes
    setOrders(data)
  }

  useEffect(() => {
    getUserOrder()
  }, [])

  async function logoutToSever() {
    // 連接的伺服器資料網址
    localStorage.removeItem('token')
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
  // 轉換日期格式
  function convert_date(date_text) {
    // date_text
    const myDate = new Date(date_text)
    const date_text_new = myDate
      .toISOString()
      .substring(0, 10)
    return `${date_text_new}`
  }
  function convert_status(order_status) {
    var status_text = ''
    if (order_status == 0) {
      status_text = '待出貨'
    } else if (order_status == 1) {
      status_text = '已完成'
    } else if (order_status == 2) {
      status_text = '已取消'
    } else if (order_status == 3) {
      status_text = '已退貨'
    }
    return status_text
  }

  const OrderDisplay =
    orders.length === 0
      ? '目前無訂單，趕快去購買！'
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
                  {convert_date(order.created_at)}
                </div>
                <div class="u-ordrtInput3">已付款</div>
                <div class="u-ordrtInput4">
                  {order.orderPrice}
                </div>
                <div class="u-ordrtInput5 ">
                  {convert_status(order.orderStatus)}
                </div>
                <div class="u-bt col-2">
                  <div className="u-Bbtn">
                    <button className="btn btn btn-dark">
                      <Link
                        className="u-link"
                        to={`/user-orderpro/detail/${order.orderId}`}
                        style={{ textDecoration: 'none' }}
                        key={order.orderId}
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

  async function getjwtvertifyFromServer() {
    const token = localStorage.getItem('token')

    const response = await fetch(
      'http://localhost:6005/users/checklogin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
        }),
      }
    )

    const data = await response.json()
    console.log('check login response = ', data)
    console.log('data.id = ', data.id)
    console.log('userid = ', userid)
    if (data.id == userid) {
      var stat = true
    } else {
      var stat = false
    }
    console.log('stat = ', stat)
    return stat
  }

  // async needs to be waited in another funciton
  const waitAsync = async () => {
    const isLoggedin = await getjwtvertifyFromServer()

    if (!isLoggedin) {
      console.log('no display!')
      swal({
        title: '登入驗證失敗',
        text: '您的登入驗證已過期或者尚未登入, 請重新登入\n正在將您導向登入頁面 ...',
        button: false,
        timer: 2000,
      })
      setTimeout(() => {
        window.location.replace(`../user-login/`)
      }, 500)
      // throw new Error('Oopsie woopsie')
    }
  }

  if (waitAsync()) {
    // setDataLoading(true)
    console.log('display!')

    return (
      <>
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
          <Container fluid>
            <div className="u-row d-flex justify-content-around">
              <div className="u-userPro">
                <Link to={`/user-orderpro/${userid}`}>
                  商品
                </Link>
              </div>
              <div className="u-userTic">
                <Link to={`/user-ordertic/${userid}`}>
                  票券
                </Link>
              </div>
            </div>
            <div className="u-progress d-flex">
              <div className="pr-3 pl-3">進度查詢</div>
              <select
                className="user-select pl-3"
                name=""
                id=""
              >
                <option
                  value=""
                  style={{ color: '#707070' }}
                >
                  全部
                </option>
                <option value="">待出貨</option>
                <option value="">已完成</option>
                <option value="">取消紀錄</option>
                <option value="">退貨紀錄</option>
              </select>
            </div>

            {OrderDisplay}
          </Container>
        </div>
      </>
    )
  }
}

export default withRouter(OrderPro)
