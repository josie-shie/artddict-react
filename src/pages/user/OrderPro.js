import React from 'react'
import '../styles/OrderPro.scss'
import logo from './img/logo-bk.svg'
import Menu from './Menu'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function OrderPro() {
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
          <div className="userPro">
            <Nav.Link as={Link} to="/user-orderpro">
              商品
            </Nav.Link>
          </div>
          <div className="userTic">
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

        <div class="table">
          <div class="th d-flex justify-content-around">
            <div class="orderId col-1">訂單編號</div>
            <div class="orderDate col-1">訂單日期</div>
            <div class="payType col-1">付款狀態</div>
            <div class="price col-1">總價</div>
            <div class="orderType col-1">訂單狀態</div>
            <div class="bt col-2"></div>
          </div>
          <div class="tb d-flex justify-content-around mt-5">
            <div class="orderId col-1 mt-4">訂單編號</div>
            <div class="orderDate col-1 mt-4">訂單日期</div>
            <div class="payType col-1 mt-4">付款狀態</div>
            <div class="price col-1 mt-4">總價</div>
            <div class="orderType col-1 mt-4">訂單狀態</div>
            <div class="bt col-2">
              <button class="btn btn-dark">
                <Nav.Link
                  className="u-link"
                  as={Link}
                  to="/user-orderdetailpro"
                >
                  詳細資料
                </Nav.Link>
              </button>
              <button class="btn btn-light">取消</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderPro
