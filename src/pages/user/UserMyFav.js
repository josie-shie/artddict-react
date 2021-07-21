import React, { useState, useEffect } from 'react'
import './styles/UserMyFav.scss'
import Logoheader from './components/Logoheader'
import Breadcrumb from './components/UserBreadcrumb'
import {
  Container,
  Row,
  Card,
  Button,
} from 'react-bootstrap'
import { IoIosHeart } from 'react-icons/io'
import { CgShoppingCart } from 'react-icons/cg'
import { withRouter, Link, NavLink } from 'react-router-dom'
// SweetAlert
import swal from 'sweetalert'

function UserMyFav(props) {
  const userid = props.match.params.userid
  const [userFavs, setUserFavs] = useState([])

  const id = props.match.params.id

  async function getUserFav() {
    const url = `http://localhost:6005/users/userFav/${userid}`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    setUserFavs(data)
  }

  useEffect(() => {
    getUserFav()
  }, [])

  async function deleteUserFav(id) {
    const url = `http://localhost:6005/users/userFavDelete/${id}`
    const request = new Request(url, {
      method: 'DELETE',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    console.log(`url = ${id}`)
    const response = await fetch(request)
    const data = await response.json()

    setTimeout(() => {
      window.location.replace(`/user-myfav/${userid}`)
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

  const UserFavDisplay =
    userFavs.length === 0
      ? '目前無收藏！'
      : userFavs.map((userFav) => {
          return (
            <Card
              style={{
                width: '28rem',
                backgroundColor: '#e8e8e8',
                border: 'none',
              }}
            >
              {/* <Link
                to={`/event/event-list/detail/${userFav.eventId}`}
              > */}{' '}
              <Card.Img
                variant="top"
                src={`http://localhost:6005/eventpic/event/${userFav.eventImg}`}
                alt="活動圖"
              />
              {/* </Link> */}
              <Card.Body>
                <h6 className="col-12 p-0 my-2">
                  {userFav.eventName}
                </h6>
                <div className="d-flex">
                  <div className="col-8 p-0">
                    <p>地點：{userFav.eventCity}</p>
                    <p>
                      時間：
                      {convert_date(userFav.eventDateStart)}
                    </p>
                  </div>
                  <div className="col-6 pb-2">
                    <Button
                      onClick={() =>
                        deleteUserFav(userFav.eventId)
                      }
                      className="mr-1"
                    >
                      <IoIosHeart className="u-heart" />
                    </Button>
                    <Button>
                      <Link
                        to={`/event/event-list/detail/${userFav.eventId}`}
                      >
                        <CgShoppingCart className="u-shopingcart" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          )
        })

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
          <div className="u-row d-flex justify-content-around">
            <div className="u-Myfavtitle1">
              <Link
                to="/user-msgedit"
                style={{ textDecoration: 'none' }}
              >
                工作坊
              </Link>
            </div>
            <div className="u-Myfavtitle2">
              <Link
                to="/"
                style={{ textDecoration: 'none' }}
              >
                商品列
              </Link>
            </div>
            <div className="u-Myfavtitle3">
              <Link
                to="/"
                style={{ textDecoration: 'none' }}
              >
                活動展
              </Link>
            </div>
            <div className="u-Myfavtitle4">
              <Link
                to="/"
                style={{ textDecoration: 'none' }}
              >
                美術館
              </Link>
            </div>
          </div>

          <Row className="ed-list-card justify-content-between flex-wrap mt-5">
            {UserFavDisplay}

            {/* <Card
              style={{
                width: '28rem',
                backgroundColor: '#e8e8e8',
                border: 'none',
              }}
            >
              <Link to="/">
                {' '}
                <Card.Img
                  variant="top"
                  src={EventPic}
                  alt="活動圖"
                />
              </Link>
              <Card.Body>
                <h6 className="col-12 p-0 my-2">
                  我是活動標題
                </h6>
                <div className="d-flex">
                  <div className="col-9 p-0">
                    <p>地點：台北市</p>
                    <p>時間：JUN</p>
                  </div>
                  <div className="col-6 pr-2">
                    <Link to="/">
                      <IoIosHeart className="u-heart" />
                    </Link>
                    <Link to="/cart-product">
                      <CgShoppingCart className="u-shopingcart" />
                    </Link>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card
              style={{
                width: '28rem',
                backgroundColor: '#e8e8e8',
                border: 'none',
              }}
            >
              <Link to="/">
                {' '}
                <Card.Img
                  variant="top"
                  src={EventPic}
                  alt="活動圖"
                />
              </Link>
              <Card.Body>
                <h6 className="col-12 p-0 my-2">
                  我是活動標題
                </h6>
                <div className="d-flex">
                  <div className="col-9 p-0">
                    <p>地點：台北市</p>
                    <p>時間：JUN</p>
                  </div>
                  <div className="col-6 pr-2">
                    <Link to="/">
                      <IoIosHeart className="u-heart" />
                    </Link>
                    <Link to="/cart-product">
                      <CgShoppingCart className="u-shopingcart" />
                    </Link>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card
              style={{
                width: '28rem',
                backgroundColor: '#e8e8e8',
                border: 'none',
              }}
            >
              <Link to="/">
                {' '}
                <Card.Img
                  variant="top"
                  src={EventPic}
                  alt="活動圖"
                />
              </Link>
              <Card.Body>
                <h6 className="col-12 p-0 my-2">
                  我是活動標題
                </h6>
                <div className="d-flex">
                  <div className="col-9 p-0">
                    <p>地點：台北市</p>
                    <p>時間：JUN</p>
                  </div>
                  <div className="col-6 pr-2">
                    <Link to="/">
                      <IoIosHeart
                        className="u-heart"
                        id="u-heart"
                      />
                    </Link>
                    <Link to="/cart-product">
                      <CgShoppingCart className="u-shopingcart" />
                    </Link>
                  </div>
                </div>
              </Card.Body>
            </Card> */}
          </Row>
        </Container>
      </div>
    </>
  )
}

export default withRouter(UserMyFav)
