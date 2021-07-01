import React from 'react'
import logo from './img/logo-bk.svg'
import Menu from './Menu'
import '../styles/OrderTic.scss'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function OrderTic() {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="logo-header">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </header>
      <div className="userMenu">
        <Menu />
      </div>
      <div className="container-fluid">
        <div className="orderItem d-flex justify-content-around">
          <div className="userPro1">
            <Nav.Link as={Link} to="/user-orderpro">
              商品
            </Nav.Link>
          </div>
          <div className="userTic1">
            <Nav.Link as={Link} to="/user-ordertic">
              票券
            </Nav.Link>
          </div>
        </div>
        <div className="progress">
          <div className="progressText">
            <p>進度查詢</p>
          </div>
          <div className="progressSelect">
            <select name="" id="">
              <option>全部</option>
              <option>已完成</option>
              <option>待出貨</option>
              <option>取消紀錄</option>
              <option>退貨紀錄</option>
            </select>
          </div>
        </div>

        <div className="table">
          <div className="th d-flex justify-content-around">
            <div className="orderId col-1">訂單編號</div>
            <div className="orderDate col-1">訂單日期</div>
            <div className="payType col-1">付款狀態</div>
            <div className="price col-1">總價</div>
            <div className="orderType col-1">訂單狀態</div>
            <div className="bt col-2"></div>
          </div>
          <div className="tb d-flex justify-content-around mt-5">
            <div className="orderId col-1 mt-4">
              訂單編號
            </div>
            <div className="orderDate col-1 mt-4">
              訂單日期
            </div>
            <div className="payType col-1 mt-4">
              付款狀態
            </div>
            <div className="price col-1 mt-4">總價</div>
            <div className="orderType col-1 mt-4">
              訂單狀態
            </div>
            <div className="bt col-2">
              <button className="btn btn-dark">
                詳細資料
              </button>
              <button className="btn btn-light">
                取消
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderTic
