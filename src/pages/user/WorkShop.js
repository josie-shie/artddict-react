import React from 'react'
import Logoheader from './components/Logoheader'
import Breadcrumb from './components/UserBreadcrumb'
// import Menu2 from './components/Menu2'
import { Button, Container } from 'react-bootstrap'
import { withRouter, Link, NavLink } from 'react-router-dom'
import './styles/WorkShop.scss'
import TicketDetail from './TicketDetail'
// SweetAlert
import swal from 'sweetalert'
//img
import Pic001 from './img/001.jpg'
import Pic015 from './img/015.jpg'

function WorkShop(props) {
  const userid = props.match.params.userid
  const [modalShow, setModalShow] = React.useState(false)

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
            style={{
              textDecoration: 'none',
              background: 'black',
              color: 'white',
            }}
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

        <Container fluid>
          <div className="d-flex u-row justify-content-around">
            <div className="u-userEve1">
              <Link to={`/user-ticket/${userid}`}>
                活動展
              </Link>
            </div>
            <div className="u-userWshop1">
              <Link to={`/user-workshop/${userid}`}>
                工作坊
              </Link>
            </div>
          </div>
          <div className="u-tableBox">
            <div className="u-ticbox  d-flex mt-5">
              <div className="u-ticImg">
                <img src={Pic001} alt="001.jpg" />
              </div>
              <div className="u-ticMsg">
                <div className="u-Eve1 d-flex">
                  <div className="u-EveId">活動編號：</div>
                  <div className="">001</div>
                </div>
                <div className="u-Eve2 d-flex">
                  <div className="u-EveName">
                    活動名稱：
                  </div>
                  <div className="">WHAAAAAT’S</div>
                </div>
                <div className="u-Eve3 d-flex">
                  <div className="u-EveNum">票券張數：</div>
                  <div className="">1</div>
                </div>
                <div className="u-Eve4 d-flex">
                  <div className="u-EveStart">
                    開始日期：
                  </div>
                  <div className="">2021-05-31</div>
                </div>
                <div className="u-Eve5 d-flex">
                  <div className="u-EveEnd">結束日期：</div>
                  <div className="">2021-06-13</div>
                </div>
              </div>
              <div className="u-ticBtn">
                <div className="u-BtnLight">
                  {' '}
                  <Link
                    to="/evevt/detail"
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
                    onClick={() => setModalShow(true)}
                  >
                    票券細節
                  </Button>
                  <TicketDetail
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="u-tableBox">
            <div className="u-ticbox  d-flex mt-5">
              <div className="u-ticImg">
                <img src={Pic015} alt="015.jpg" />
              </div>
              <div className="u-ticMsg">
                <div className="u-Eve1 d-flex">
                  <div className="u-EveId">活動編號：</div>
                  <div className="">015</div>
                </div>
                <div className="u-Eve2 d-flex">
                  <div className="u-EveName">
                    活動名稱：
                  </div>
                  <div className="">【尋 找】主題展</div>
                </div>
                <div className="u-Eve3 d-flex">
                  <div className="u-EveNum">票券張數：</div>
                  <div className="">1</div>
                </div>
                <div className="u-Eve4 d-flex">
                  <div className="u-EveStart">
                    開始日期：
                  </div>
                  <div className="">2021-07-27</div>
                </div>
                <div className="u-Eve5 d-flex">
                  <div className="u-EveEnd">結束日期：</div>
                  <div className="">2021-09-08</div>
                </div>
              </div>
              <div className="u-ticBtn">
                <div className="u-BtnLight">
                  {' '}
                  <Link
                    to="/evevt/detail"
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
                    onClick={() => setModalShow(true)}
                  >
                    票券細節
                  </Button>
                  <TicketDetail
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default withRouter(WorkShop)
