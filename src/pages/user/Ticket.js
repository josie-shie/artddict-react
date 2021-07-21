import React, { useState, useEffect } from 'react'
import Logoheader from './components/Logoheader'
import Breadcrumb from './components/UserBreadcrumb'
import { withRouter, Link, NavLink } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
import './styles/Ticket.scss'
import TicketDetail from './TicketDetail'
import { Modal } from 'react-bootstrap'
import QRcode from './img/QRcode.png'
// SweetAlert
import swal from 'sweetalert'

function Ticket(props) {
  const [modalShow, setModalShow] = React.useState(false)
  const userid = props.match.params.userid
  const [tickets, setTickets] = useState([])

  //const id = props.match.params.id
  const [id, setId] = useState('')
  const [eventId, setEventId] = useState('')
  const [eventName, setEventName] = useState('')
  const [orderSpec, setOrderSpec] = useState('')

  async function getUserTicket() {
    const url = `http://localhost:6005/users/getTicket/${userid}`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    console.log('ll=', data)
    console.log(props.match.params)
    setTickets(data)
    setId(data.eventId)
  }

  useEffect(() => {
    getUserTicket()
  }, [])

  async function getUserTicketDetail(id) {
    const url = `http://localhost:6005/users/getTicketDetail/${id}`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    console.log('url = ', url)
    console.log('id = ', id)
    const response = await fetch(request)
    const data = await response.json()
    console.log(data)
    setEventName(data[0].eventName)
    setOrderSpec(data[0].orderSpec)
    setTimeout(() => {
      setModalShow(true)
    }, 300)
  }

  // useEffect(() => {
  //   getUserTicketDetail()
  // }, [])

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
  // function showDetail(){
  //   return <TicketDetail/>
  // }

  const TicketDisplay =
    tickets.length === 0
      ? '目前尚無票卷資料'
      : tickets.map((ticket) => {
          return (
            <div className="u-tableBox">
              <div className="u-ticbox d-flex mt-5">
                <div className="u-ticImg">
                  <img
                    src={`http://localhost:6005/eventpic/event/${ticket.eventImg}`}
                    alt="活動圖"
                  />
                </div>
                <div className="u-ticMsg">
                  <div className="u-Eve1 d-flex">
                    <div className="u-EveId">
                      活動編號：
                    </div>
                    <div className="">{ticket.eventId}</div>
                  </div>
                  <div className="u-Eve2 d-flex">
                    <div className="u-EveName">
                      活動名稱：
                    </div>
                    <div className="">
                      {ticket.eventName}
                    </div>
                  </div>
                  <div className="u-Eve3 d-flex">
                    <div className="u-EveNum">
                      票券張數：
                    </div>
                    <div className="">
                      {ticket.orderQty}
                    </div>
                  </div>
                  <div className="u-Eve4 d-flex">
                    <div className="u-EveStart">
                      開始日期：
                    </div>
                    <div className="">
                      {convert_date(ticket.eventDateStart)}
                    </div>
                  </div>
                  <div className="u-Eve5 d-flex">
                    <div className="u-EveEnd">
                      結束日期：
                    </div>
                    <div className="">
                      {convert_date(ticket.eventDateEnd)}
                    </div>
                  </div>
                </div>
                <div className="u-ticBtn">
                  <div className="u-BtnLight">
                    {' '}
                    <Link
                      to={`/event/event-list/detail/${ticket.id}`}
                      className="u-link2"
                      style={{ textDecoration: 'none' }}
                    >
                      活動細節
                    </Link>
                  </div>
                  <div className="u-BtnBlack">
                    <Button
                      className="u-ticdetail"
                      variant="dark"
                      onClick={() => {
                        console.log(ticket)
                        console.log(id)
                        getUserTicketDetail(
                          ticket.eventId
                        ).then(console.log('oo=', id))
                      }}
                    >
                      票券細節
                    </Button>
                    <TicketDetail
                      eventId={id}
                      eventName={eventName}
                      orderSpec={orderSpec}
                      show={modalShow}
                      onHide={() => {
                        setModalShow(false)
                        console.log(ticket)
                      }}
                    />
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
            <div className="d-flex u-row justify-content-around">
              <div className="u-userEve">
                <Link to={`/user-ticket/${userid}`}>
                  工作坊
                </Link>
              </div>
              <div className="u-userWshop">
                <Link to={`/user-workshop/${userid}`}>
                  活動展
                </Link>
              </div>
            </div>

            {TicketDisplay}
          </Container>
        </div>
      </>
    )
  }
}
export default withRouter(Ticket)
