import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'

// import component
import Lightheader from './components/Lightheader'
import BreadCrumb from './components/EventBreadCrumb'
import EventMore from './components/EventMore'

// react icons
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowRoundDown,
  IoIosSearch,
  IoIosHeart,
  IoMdAdd,
  IoMdRemove,
} from 'react-icons/io'

// import pictures
import Square from './images/square.gif'
// Pictures
import EuListCardPic from './images/event/006.jpg'


import './style/reset.css'
import './style/fontAndBtn.scss'
import './style/WorkshopShare.scss'

function WorkshopShare() {
  return (
    <>
      <div className="reduce-width">
        <Lightheader />
        <Container className="e-share " fluid>
          <Row className="py-4 es-bread both-padding">
            <BreadCrumb />
          </Row>
          <Row className="both-padding">
            <div className="es-pic-up col-12 p-0 mb-4">
              <h5 className="cn-font">主題工作坊</h5>
              <h2>我是活動名稱</h2>
            </div>
            {/* 資料form表單 */}
            <div className="col-12 pl-0 justify-content-between d-flex flex-wrap">
              <h5 className="es-work-title col-12 p-0 cn-font mb-3">
                作品圖片:
              </h5>
              <div className="col-8 p-0 justify-content-start d-flex flex-wrap">
                <div className="es-pic-left col-8 p-0 mr-3">
                  <div>
                    <img src={Square} alt="" />
                  </div>
                </div>

                <div className="es-pic-right col-3 p-0">
                  <div className="col-12 p-0 d-flex flex-wrap">
                    <div className="col-10 p-0">
                      <img src={Square} alt="" />
                    </div>
                    <div className="col-10 my-2 p-0">
                      <img src={Square} alt="" />
                    </div>
                    <div className="col-10 p-0">
                      <img src={Square} alt="" />
                    </div>
                  </div>
                </div>
                <h5 className="es-work-title col-11 p-0 cn-font mt-2">
                  作品說明:
                </h5>
                <p className="es-text cn-font col-11 p-0 pr-2">
                  1889年9月，荷蘭後印象派畫家文森特·梵谷（Vincent
                  van
                  Gogh）在畫布上用油畫了自畫像。這幅作品可能是梵谷的最後一幅自畫像，是在他離開法國南部聖雷米的普羅旺斯之前不久畫的。這幅畫現在在巴黎的奧賽博物館（Muséed'Orsay）展出。
                </p>
              </div>

              {/* 其他活動區塊 */}
              <div className="es-more-event col-4">
                <h2 className="my-3 col-12 mb-3">
                  其他活動!
                  <span>
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                  </span>
                </h2>

                <Link
                  to="/event/event-list/detail"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="es-list-card col-12 pt-5 mb-5">
                    <img
                      className="col-12 p-0"
                      src={EuListCardPic}
                      alt=""
                    />
                    <h6 className="col-12 p-0 cn-font my-2">
                      我是活動標題
                    </h6>
                    <div className="d-flex">
                      <div className="col-8 p-0">
                        <p>地點：台北市</p>
                        <p>時間：JUN</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/event/event-list/detail"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="es-list-card col-12 pt-5 mb-5">
                    <img
                      className="col-12 p-0"
                      src={EuListCardPic}
                      alt=""
                    />
                    <h6 className="col-12 p-0 cn-font my-2">
                      我是活動標題
                    </h6>
                    <div className="d-flex">
                      <div className="col-8 p-0">
                        <p>地點：台北市</p>
                        <p>時間：JUN</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </Row>
        </Container>
        <Container fluid>
          <EventMore />
        </Container>
      </div>
    </>
  )
}

export default withRouter (WorkshopShare)
