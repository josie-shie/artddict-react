import React from 'react'
import Logoheader from './components/Logoheader'
import Menu from './components/Menu'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import './styles/WorkShop.scss'

 function WorkShop() {
    return (
        <>
            <div className="u-body">
              <Logoheader />
              <div className="u-userMenu">
              <Menu />
              </div>
              <div className="u-container-fluid">
          <div className="d-flex u-row justify-content-around">
            <div className="u-userEve1">
              <Nav.Link as={Link} to="/user-ticket">
                活動展
              </Nav.Link>
            </div>
            <div className="u-userWshop1">
              <Nav.Link as={Link} to="/user-workshop">
                工作坊
              </Nav.Link>
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
              <div className="u-BtnLight">活動細節</div>
              <div className="u-BtnBlack">票券細節</div>
            </div>
                  </div>
        </div>
      </div>
        </>
    )
}

export default WorkShop