import React from 'react'
// import Menu2 from './components/Menu2'
import { Container } from 'react-bootstrap'
import Logoheader from './components/Logoheader'
import './styles/OrderTic.scss'
import { withRouter, Link } from 'react-router-dom'
import Breadcrumb from './components/UserBreadcrumb'

function OrderTic(props) {
  const id = props.match.params.userid
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
          <Link
            activeClassName="activenav"
            className={'tab'}
            to={`/user-msgedit/${id}`}
            style={{ textDecoration: 'none' }}
          >
            修改資料
          </Link>

          <Link
            activeClassName="activenav"
            className={'tab'}
            to={`/user-orderpro/${id}`}
            style={{
              textDecoration: 'none',
              background: 'black',
              color: 'white',
            }}
          >
            訂單查詢
          </Link>
          <Link
            activeClassName="activenav"
            className={'tab'}
            to={`/user-coupon/${id}`}
            style={{ textDecoration: 'none' }}
          >
            我的優惠券
          </Link>
          <Link
            activeClassName="activenav"
            className={'tab'}
            to={`/user-ticket/${id}`}
            style={{ textDecoration: 'none' }}
          >
            我的票券
          </Link>
          <Link
            activeClassName="activenav"
            className={'tab'}
            to={`/user-myfav/${id}`}
            style={{ textDecoration: 'none' }}
          >
            我的收藏
          </Link>
          <Link
            activeClassName="activenav"
            className={'tab'}
            to="/user-auction"
            style={{ textDecoration: 'none' }}
          >
            競標查詢
          </Link>
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
            <div className="u-userPro1">
              <Link to={`/user-orderpro/${id}`}>商品</Link>
            </div>
            <div className="u-userTic1">
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

          <div className="u-table">
            <div className="u-th d-flex justify-content-around">
              <div className="u-orderId">訂單編號</div>
              <div className="u-orderDate">訂單日期</div>
              <div className="u-payType">付款狀態</div>
              <div className="u-price">總價</div>
              <div className="u-orderType">訂單狀態</div>
              <div className="u-bt col-2"></div>
            </div>
            <div className="u-tb d-flex justify-content-around">
              <div className="u-ordrtInput1">訂單編號</div>
              <div className="u-ordrtInput1">訂單日期</div>
              <div className="u-ordrtInput2">付款狀態</div>
              <div className="u-ordrtInput3">總價</div>
              <div className="u-ordrtInput4">訂單狀態</div>
              <div className="u-bt col-2">
                <div className="u-Bbtn">
                  <button class="btn btn btn-dark">
                    <Link
                      style={{ textDecoration: 'none' }}
                      className="u-link"
                      to="/user-ordertic/detail"
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
        </Container>
      </div>
    </>
  )
}

export default withRouter(OrderTic)
