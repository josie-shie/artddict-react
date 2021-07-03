import React from 'react'
import Menu from './components/Menu'
import Logoheader from './components/Logoheader'
import './styles/OrderTic.scss'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function OrderTic() {
  return (
    <>
      <div className="u-body">
        <Logoheader />
        <div className="u-userMenu">
          <Menu />
        </div>
        <div className="u-container-fluid">
          <div className="u-orderItem d-flex justify-content-around">
            <div className="u-userPro1">
              <Link to="/user-orderpro">
                商品
              </Link>
            </div>
            <div className="u-userTic1">
              <Link to="/user-ordertic">
                票券
              </Link>
            </div>
          </div>
          <div className="u-progress d-flex">
            <div className="u-progressText">
              <p>進度查詢</p>
            </div>
            <div className="u-progressSelect">
              <select name="" id="">
                <option>全部</option>
                <option>已完成</option>
                <option>待出貨</option>
                <option>取消紀錄</option>
                <option>退貨紀錄</option>
              </select>
            </div>
          </div>

          <div className="u-table">
            <div className="u-th d-flex justify-content-around">
              <div className="u-orderId">
                訂單編號
              </div>
              <div className="u-orderDate">
                訂單日期
              </div>
              <div className="u-payType">
                付款狀態
              </div>
              <div className="u-price">總價</div>
              <div className="u-orderType">
                訂單狀態
              </div>
              <div className="u-bt col-2"></div>
            </div>
            <div className="u-tb d-flex justify-content-around mt-5">
              <div className="u-orderId mt-4">
                訂單編號
              </div>
              <div className="u-orderDate mt-4">
                訂單日期
              </div>
              <div className="u-payType mt-4">
                付款狀態
              </div>
              <div className="u-price mt-4">總價</div>
              <div className="u-orderType mt-4">
                訂單狀態
              </div>
              <div className="u-bt col-2">
                <div className="u-Bbtn">
                  <button class="btn btn btn-dark">
                    <Link
                      style={{textDecoration: 'none'}}
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
        </div>
      </div>
    </>
  )
}

export default OrderTic
