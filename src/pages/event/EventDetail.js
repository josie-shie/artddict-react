import { React, useState, useEffect } from 'react'
import {
  Container,
  Row,
  Button,
  Collapse,
} from 'react-bootstrap'

// Component
import EHeader from './components/Darkheader'
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

// Pictures
import TopicPic from './images/event/007.jpg'

// styles
import './style/reset.css'
import './style/fontAndBtn.scss'
import './style/eventDetail.scss'

function EventDetail() {
  //開合功能state
  const [open, setOpen] = useState(true)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)

  return (
    <>
      <div className="reduce-width">
        <EHeader />
        <Container className="ed-hero-zone " fluid>
          <Row className="py-4 ed-bread both-padding">
            <BreadCrumb />
          </Row>
          <Row className="both-padding ed-detail-main">
            <h4 className="col-12 p-0 cn-font ed-event-name py-4">
              我是活動名稱
            </h4>
            <img
              className="col-12 p-0 mb-5"
              src={TopicPic}
              alt=""
            />
          </Row>
          <Row className="ed-detail-intro both-padding mt-5 pb-5">
            <div className="col-6 p-0 d-flex flex-wrap">
              <h4 className="col-10 cn-font p-0">
                我是活動名稱
              </h4>
              <div className="ed-like-icon col-2">
                {' '}
                <IoIosHeart />
              </div>
              <p className="col-12 cn-font p-0 mt-3">
                時間：2020/10/31 - 2021/02/28
              </p>
              <p className="col-12 cn-font p-0 mt-2">
                地點：臺中市
              </p>
            </div>
            <div
              className="ed-commu-btn  col-6 d-flex justify-content-md-around
            align-items-center"
            >
              <button className="col-4 cn-font">
                上傳作品
              </button>
              <button className="col-4 cn-font">
                觀賞作品
              </button>
            </div>
          </Row>
          <Row className="left-padding cn-font ">
            <div className="col-8 pl-0 ed-detail-content">
              <div className="col-12 p-0">
                {/* 第一個按鈕 */}
                <button
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  className="ed-detail-btn col-12 d-flex justify-content-center
                  cn-font p-0 my-5"
                >
                  <span className="mr-auto">活動介紹</span>
                  <span>
                    <IoMdRemove />
                  </span>
                </button>
                <Collapse
                  in={open}
                  className="col-12 p-0  mb-5"
                >
                  <p id="example-collapse-text">
                    1889年9月，荷蘭後印象派畫家文森特·梵谷（Vincent
                    van
                    Gogh）在畫布上用油畫了自畫像。這幅作品可能是梵谷的最後一幅自畫像，是在他離開法國南部聖雷米的普羅旺斯之前不久畫的。這幅畫現在在巴黎的奧賽博物館（Muséed'Orsay）展出。
                  </p>
                </Collapse>

                {/* 第二個按鈕 */}
                <button
                  onClick={() => setOpen2(!open2)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open2}
                  className="ed-detail-btn col-12 d-flex justify-content-center
                  cn-font p-0 py-5 ed-rules"
                >
                  <span className="mr-auto">活動規範</span>
                  <span>
                    <IoMdRemove />
                  </span>
                </button>
                <Collapse
                  in={open2}
                  className="col-12 p-0 ed-detail-content mb-5"
                >
                  <p id="example-collapse-text">
                    1889年9月，荷蘭後印象派畫家文森特·梵谷（Vincent
                    van
                    Gogh）在畫布上用油畫了自畫像。這幅作品可能是梵谷的最後一幅自畫像，是在他離開法國南部聖雷米的普羅旺斯之前不久畫的。這幅畫現在在巴黎的奧賽博物館（Muséed'Orsay）展出。
                  </p>
                </Collapse>

                {/* 第三個按鈕 */}
                <button
                  onClick={() => setOpen3(!open3)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open3}
                  className="ed-detail-btn col-12 d-flex justify-content-center
                  cn-font p-0 pt-5 ed-rules mb-5"
                >
                  <span className="mr-auto">活動評價</span>
                  <span>
                    <IoMdRemove />
                  </span>
                </button>
                <Collapse
                  in={open3}
                  className="col-12 p-0 mt-3 mb-5 ed-message"
                >
                  <div
                    id="example-collapse-text"
                    className="col-12 p-0 ed-message"
                  >
                    <h1>金喚</h1>
                    <p className="mt-2">
                      1889年9月，荷蘭後印象派畫家文森特·梵谷（Vincent
                      van
                      Gogh）在畫布上用油畫了自畫像。這幅作品可能是梵谷的最後一幅自畫像，是在他離開法國南部聖雷米的普羅旺斯之前不久畫的。這幅畫現在在巴黎的奧賽博物館（Muséed'Orsay）展出。
                    </p>
                  </div>
                </Collapse>
              </div>
            </div>

            {/* 下訂區塊 */}
            <div className="col-4 ed-ticket h-100">
              <div className="col-12 d-flex justify-content-center flex-wrap">
                <h2 className="mt-3 col-12">
                  馬上搶票!
                  <span>
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                  </span>
                </h2>
                <p className="col-12 pb-4 mb-4">
                  票價：NT$ <span>1500</span>
                </p>
                <form
                  className="col-12 d-block d-flex flex-wrap justify-content-between"
                  action=""
                >
                  <button className="col-5">成人票</button>
                  <button className="col-5">孩童票</button>
                  <button className="col-5">敬老票</button>
                  <button className="col-5">愛心票</button>
                  <p className="col-12 pb-2 ticket-num mt-4 p-0">
                    數量：
                  </p>
                  <div className="col-12 p-0 mb-4">
                    <button className="ticket-count">
                      <IoMdAdd className="ed-count-icon" />
                    </button>
                    <input
                      type="text"
                      placeholder="1"
                      value="1"
                    />
                    <button className="ticket-count">
                      <IoMdRemove className="ed-count-icon" />
                    </button>
                  </div>
                  <p className="col-12 mb-1 ed-total p-0">
                    小計：NT$ <span>1500</span>
                  </p>

                  <button
                    className="col-12 p-0 ed-submit-btn mb-5"
                    type="submit"
                  >
                    加入購物車
                  </button>
                </form>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default EventDetail
