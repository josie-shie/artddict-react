import React from 'react'
import Logoheader from './components/Logoheader'
import Breadcrumb from './components/UserBreadcrumb'
// import Menu2 from './components/Menu2'
import { Button, Container } from 'react-bootstrap'
import { withRouter, Link, NavLink } from 'react-router-dom'
import './styles/WorkShop.scss'
import TicketDetail from './TicketDetail'

function WorkShop(props) {
  const id = props.match.params.userid
  const [modalShow, setModalShow] = React.useState(false)
  return (
    <>
      <div className="u-body">
        <Logoheader />
        <div className="u-breadcrumb">
          <Breadcrumb />
        </div>
        {/* <div className="u-userMenu d-none d-lg-block d-xl-block">
          <Menu2 />
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
          <div className="d-flex u-row justify-content-around">
            <div className="u-userEve1">
              <Link to={`/user-ticket/${id}`}>活動展</Link>
            </div>
            <div className="u-userWshop1">
              <Link to={`/user-workshop/${id}`}>
                工作坊
              </Link>
            </div>
          </div>
          <div className="u-ticbox  d-flex">
            <div className="u-ticImg"></div>
            <div className="u-ticMsg">
              <div className="u-Eve1 d-flex">
                <div className="u-EveId">活動編號：</div>
                <div className="">123456</div>
              </div>
              <div className="u-Eve2 d-flex">
                <div className="u-EveName">活動名稱：</div>
                <div className=""></div>
              </div>
              <div className="u-Eve3 d-flex">
                <div className="u-EveNum">票券張數：</div>
                <div className="">2</div>
              </div>
              <div className="u-Eve4 d-flex">
                <div className="u-EveStart">開始日期：</div>
                <div className="">2021-05-12</div>
              </div>
              <div className="u-Eve5 d-flex">
                <div className="u-EveEnd">結束日期：</div>
                <div className="">2021-05-12</div>
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
          <div className="u-ticbox  d-flex">
            <div className="u-ticImg"></div>
            <div className="u-ticMsg">
              <div className="u-Eve1 d-flex">
                <div className="u-EveId">活動編號：</div>
                <div className="">123456</div>
              </div>
              <div className="u-Eve2 d-flex">
                <div className="u-EveName">活動名稱：</div>
                <div className=""></div>
              </div>
              <div className="u-Eve3 d-flex">
                <div className="u-EveNum">票券張數：</div>
                <div className="">2</div>
              </div>
              <div className="u-Eve4 d-flex">
                <div className="u-EveStart">開始日期：</div>
                <div className="">2021-05-12</div>
              </div>
              <div className="u-Eve5 d-flex">
                <div className="u-EveEnd">結束日期：</div>
                <div className="">2021-05-12</div>
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
        </Container>
      </div>
    </>
  )
}

export default withRouter(WorkShop)
