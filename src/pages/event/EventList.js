import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Nav } from 'react-bootstrap'
import $ from 'jquery'

// Component
import EHeader from './components/Darkheader'
import EDetailCaro from './components/EDetailCaro'

// react icons
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowRoundDown,
  IoIosSearch,
  IoIosHeart,
} from 'react-icons/io'
import { FaFilter } from 'react-icons/fa'

// Pictures
import EdListCardPic from './images/event/006.jpg'

// styles
import './style/reset.css'
import './style/fontAndBtn.scss'
import './style/eventList.scss'

function EventList() {
  return (
    <>
      <div className="reduce-width overflow-hidden">
        <EHeader />

        {/* HERO Section 輪播牆 */}
        <Container fluid className="ed-hero">
          <Row>
            <h1 className="col-12 p-0 eng-font-regular e-detail-title text-center py-4">
              <IoIosArrowBack />
              <IoIosArrowBack />
              <IoIosArrowBack />
              <IoIosArrowBack />
              <IoIosArrowBack />
              EXHIBITION AND WORK SHOP
              <IoIosArrowForward />
              <IoIosArrowForward />
              <IoIosArrowForward />
              <IoIosArrowForward />
              <IoIosArrowForward />
            </h1>
          </Row>

          <EDetailCaro />
          <Row className="mt-2 pb-5">
            <h4 className="col-6 e-detail-class cn-font border-right py-4">
              藝文活動展
              <IoIosArrowRoundDown />
            </h4>
            <h4 className="col-6 e-detail-class cn-font py-4">
              活動工作坊
              <IoIosArrowRoundDown />
            </h4>
          </Row>
        </Container>
        <Container className="ed-list both-padding" fluid>
          <Row className="mb-4">
            <form
              className="ed-filter col-12 px-0 d-flex justify-content-between my-5 pb-5"
              action=" "
            >
              {/* 地區選單 */}
              <div className="ed-select-box cn-font p-3">
                <div className="pr-3">地區</div>
                <select
                  className="ed-select pl-3"
                  name=""
                  id=""
                >
                  <option
                    style={{ color: '#707070' }}
                    value=""
                  >
                    請選擇
                  </option>
                  <option value="">123</option>
                  <option value="">123</option>
                </select>
              </div>

              {/* 城市選單 */}
              <div className="ed-select-box cn-font p-3">
                <div className="pr-3">城市</div>
                <select
                  className="ed-select pl-3"
                  name=""
                  id=""
                >
                  <option
                    style={{ color: '#707070' }}
                    value=""
                  >
                    請選擇
                  </option>
                  <option value="">123</option>
                  <option value="">123</option>
                </select>
              </div>

              {/* 美術館選單 */}
              <div className="ed-select-box cn-font p-3">
                <div className="pr-3">美術館</div>
                <select
                  className="ed-select pl-3"
                  name=""
                  id=""
                >
                  <option
                    style={{ color: '#707070' }}
                    value=""
                  >
                    請選擇
                  </option>
                  <option value="">123</option>
                  <option value="">123</option>
                </select>
              </div>

              {/* 時間選單 */}
              <div className="ed-select-box cn-font p-3">
                <div className="pr-3">時間</div>
                <select
                  className="ed-select pl-3"
                  name=""
                  id=""
                >
                  <option
                    style={{ color: '#707070' }}
                    value=""
                  >
                    請選擇
                  </option>
                  <option value="">123</option>
                  <option value="">123</option>
                </select>
              </div>

              <button
                className="ed-list-btn col-1"
                type="submit"
              >
                <FaFilter />
              </button>
            </form>
            <div className="my-5"></div>

            {/* 第二行表單 */}
            <form className="col-12 d-flex p-0" action="">
              {/* 排序 */}
              <div className="ed-select-box cn-font p-3">
                <div className="pr-3">排序</div>
                <select
                  className="ed-select pl-3"
                  name=""
                  id=""
                >
                  <option
                    style={{ color: '#707070' }}
                    value=""
                  >
                    最近
                  </option>
                  <option value="">123</option>
                  <option value="">123</option>
                </select>
              </div>

              <button
                className="ed-list-btn2 col-1"
                type="submit"
              >
                <IoIosSearch />
              </button>
            </form>
          </Row>
          <Row className="justify-content-between">
            <div className="ed-list-card col-4">
              <img
                className="col-12 p-0"
                src={EdListCardPic}
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
                <div className="col-4 p-0">
                  <button className="border-right col-4 py-2">
                    <IoIosHeart />
                  </button>
                  <button className="col-8 py-2">
                    MORE+
                  </button>
                </div>
              </div>
            </div>

            <div className="ed-list-card col-4">
              <img
                className="col-12 p-0"
                src={EdListCardPic}
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
                <div className="col-4 p-0">
                  <button className="border-right col-4 py-2">
                    <IoIosHeart />
                  </button>
                  <button className="col-8 py-2">
                    MORE+
                  </button>
                </div>
              </div>
            </div>

            <div className="ed-list-card col-4">
              <img
                className="col-12 p-0"
                src={EdListCardPic}
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
                <div className="col-4 p-0">
                  <button className="border-right col-4 py-2">
                    <IoIosHeart />
                  </button>
                  <button className="col-8 py-2">
                    MORE+
                  </button>
                </div>
              </div>
            </div>
          </Row>
          <Row className="justify-content-center eng-font-regular mt-5 py-5">
            <Link className="ed-pagenum mx-3">
              <IoIosArrowBack />
            </Link>
            <Link className="ed-pagenum mx-3">
              <p>1</p>
            </Link>
            <Link className="ed-pagenum mx-3">
              <p>2</p>
            </Link>
            <Link className="ed-pagenum mx-3">
              <p>3</p>
            </Link>
            <Link className="ed-pagenum mx-3">
              <p>4</p>
            </Link>
            <Link className="ed-pagenum mx-3">
              <p>5</p>
            </Link>
            <Link className="ed-pagenum mx-3">
              <IoIosArrowForward />
            </Link>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default EventList
