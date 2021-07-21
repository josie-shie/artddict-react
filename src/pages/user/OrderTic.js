import { React, useState, useEffect } from 'react'
// import Menu2 from './components/Menu2'
import { Container } from 'react-bootstrap'
import Logoheader from './components/Logoheader'
import './styles/OrderTic.scss'
import { withRouter, Link, NavLink } from 'react-router-dom'
import Breadcrumb from './components/UserBreadcrumb'
// SweetAlert
import swal from 'sweetalert'
import axios from 'axios'

function OrderTic(props) {
  const [tickets, setTickets] = useState([])
  const [alltickets, setAlltickets] = useState([])
  const userid = props.match.params.userid
  const id = props.match.params.id

  async function getUserOrder() {
    const url = `http://localhost:6005/users/getTicOrder/${userid}`
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
    setTickets(data)
    setAlltickets(data)
  }

  useEffect(() => {
    getUserOrder()
  }, [])

  async function updateStatus(order_id, order_status) {
    const url = `http://localhost:6005/users/orderStatus/${id}`

    const post_id_and_status = await axios
      .post(url, { order_id, order_status })
      .then(function (response) {
        console.log(response.data)
        // const data = response.data
        return response.data
      })
      .catch(function (error) {
        console.log(error)
      })

    setTimeout(() => {
      window.location.replace(`/user-ordertic/${userid}`)
    }, 500)
  }

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
  // 訂單狀態轉文字
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

  // 按鈕文字根據狀態轉態
  function convert_btnText(order_status) {
    var status_btnText = ''
    if (order_status == 0) {
      status_btnText = '取消'
    } else if (order_status == 1) {
      status_btnText = '退貨'
    } else if (order_status == 2) {
      status_btnText = '已取消'
    } else if (order_status == 3) {
      status_btnText = '已退貨'
    }
    return status_btnText
  }

  // 訂單狀態改變
  function convert_new(order_status) {
    var status_new = ''
    if (order_status == 0) {
      status_new = '2'
    } else if (order_status == 1) {
      status_new = '3'
    } else if (order_status == 2) {
      status_new = '0'
    } else if (order_status == 3) {
      status_new = '1'
    }
    return status_new
  }

  function showByStatus(event) {
    console.log('value = ', event.target.value)
    // 暫時用的array 後續會用來決定要顯示哪些項目
    var new_to_display = []
    if (event.target.value !== 'all') {
      // 單一選項
      for (var i = 0; i < alltickets.length; i++) {
        // 逐項檢查是否符合選擇的status
        if (
          alltickets[i].orderStatus == event.target.value
        ) {
          new_to_display.push(alltickets[i])
        }
      }
    } else {
      // 全選
      new_to_display = alltickets
    }
    console.log('new to display', new_to_display)
    setTickets(new_to_display)
  }

  const TicketDisplay =
    tickets.length === 0
      ? '目前無訂單，趕快去購買！'
      : tickets.map((ticket) => {
          return (
            <div className="u-tableBox">
              <div class="u-table">
                <div class="u-th d-flex justify-content-around">
                  <div class="u-orderId ml-5">訂單編號</div>
                  <div class="u-orderDate ml-5">
                    訂單日期
                  </div>
                  <div class="u-payType ml-2">付款狀態</div>
                  <div class="u-price">總價</div>
                  <div class="u-orderType">訂單狀態</div>
                  <div class="u-bt col-2"></div>
                </div>
                <div class="u-tb d-flex justify-content-around">
                  <div class="u-ordrtInput1">
                    {ticket.orderId}
                  </div>
                  <div class="u-ordrtInput2">
                    {convert_date(ticket.created_at)}
                  </div>
                  <div class="u-ordrtInput3">已付款</div>
                  <div class="u-ordrtInput4">
                    {ticket.orderPrice}
                  </div>
                  <div class="u-ordrtInput5 ">
                    {convert_status(ticket.orderStatus)}
                  </div>
                  <div class="u-bt col-2">
                    <div className="u-Bbtn">
                      <button class="btn btn btn-dark">
                        <Link
                          className="u-link"
                          to={`/user-ordertic/detail/${ticket.orderId}`}
                          style={{ textDecoration: 'none' }}
                          key={ticket.orderId}
                        >
                          詳細資料
                        </Link>
                      </button>
                    </div>
                    <div className="u-Lbtn">
                      <button
                        class="btn btn btn-light"
                        onClick={() => {
                          updateStatus(
                            ticket.orderId,
                            convert_new(ticket.orderStatus)
                          )
                        }}
                      >
                        {convert_btnText(
                          ticket.orderStatus
                        )}
                      </button>
                    </div>
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
          <Logoheader
            user_id={userid}
            show_user_name={true}
          />
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
              style={{
                textDecoration: 'none',
                background: 'black',
                color: 'white',
              }}
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
              <div className="u-userPro1">
                <Link to={`/user-orderpro/${userid}`}>
                  商品
                </Link>
              </div>
              <div className="u-userTic1">
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
                onChange={(event) => {
                  showByStatus(event)
                }}
              >
                <option
                  value="all"
                  style={{ color: '#707070' }}
                >
                  全部
                </option>
                <option value="0">待出貨</option>
                <option value="1">已完成</option>
                <option value="2">取消紀錄</option>
                <option value="3">退貨紀錄</option>
              </select>
            </div>

            {TicketDisplay}
          </Container>
        </div>
      </>
    )
  }
}
export default withRouter(OrderTic)
