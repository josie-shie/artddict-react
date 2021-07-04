import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'

// import component
import Lightheader from './components/Lightheader'
import BreadCrumb from './components/EventBreadCrumb'

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

import EuGreySpin from './images/arddict-circle-gr.svg'



import './style/reset.css'
import './style/fontAndBtn.scss'
import './style/WorkshopUpload.scss'

function WorkshopUpload() {
  return (
    <>
      <div className="reduce-width">
        <Lightheader />
        <Container className="e-upload " fluid>
          <Row className="py-4 eu-bread both-padding">
            <BreadCrumb />
          </Row>
          <Row className="both-padding">
            <div className="eu-pic-up col-12 p-0 mb-4">
              <h5 className="cn-font">主題工作坊</h5>
              <h2>我是活動名稱</h2>
            </div>
            {/* 資料form表單 */}
            <div className="col-12 pl-0 justify-content-between d-flex flex-wrap">
              <h5 className="eu-upload-title col-12 p-0 cn-font mb-3">
                作品圖片:
              </h5>
              <form
                className="col-8 p-0 justify-content-start d-flex flex-wrap"
                action=""
              >
                <div className="eu-pic-left col-8 p-0 mr-3">
                  <div className="position-relative">
                    <img
                      className="up-spin position-absolute"
                      src={EuGreySpin}
                      alt=""
                    />
                    <button className="e-btn-m cn-font position-absolute">
                      上傳圖片
                      <IoMdAdd />
                    </button>
                    <img src={Square} alt="" />
                  </div>
                </div>

                <div className="eu-pic-right col-3 p-0">
                  <div className="col-12 p-0 d-flex flex-wrap">
                    <div className="col-10 p-0 position-relative">
                      <button className="position-absolute">
                        <IoMdAdd />
                      </button>
                      <img src={Square} alt="" />
                    </div>
                    <div className="col-10 my-2 p-0">
                      <button className="position-absolute">
                        <IoMdAdd />
                      </button>
                      <img src={Square} alt="" />
                    </div>
                    <div className="col-10 p-0">
                      <button className="position-absolute">
                        <IoMdAdd />
                      </button>
                      <img src={Square} alt="" />
                    </div>
                  </div>
                </div>
                <h5 className="eu-upload-title col-12 p-0 cn-font mt-5 mb-3">
                  作品說明:
                </h5>
                <textarea
                  className="eu-text col-11 pr-2"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>

                <div className="col-11 d-flex flex-wrap justify-content-center my-4">
                  <button
                    className="eu-send-cmt e-btn-m col-l2 my-3"
                    type="submit"
                  >
                    上傳作品
                  </button>
                </div>
              </form>

              {/* 其他活動區塊 */}
              <div className="eu-more-event col-4">
                <h2 className="my-3 col-12 mb-3">
                  其他活動!
                  <span>
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                  </span>
                </h2>

                <div className="eu-list-card col-12 pt-5 mb-5">
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

                <div className="eu-list-card col-12 pt-5 mb-5">
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

                <div className="eu-list-card col-12 pt-5 mb-5">
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
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default WorkshopUpload
