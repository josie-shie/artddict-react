import React from 'react'
import { Row } from 'react-bootstrap'


// Pictures
import EdListCardPic from '../images/event/006.jpg'

// react icons
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosHeart,
} from 'react-icons/io'

import '../style/reset.css'
import '../style/fontAndBtn.scss'
import '../style/EventMore.scss'

function EventMore() {
  return (
    <>
      <Row className="e-look-more both-padding">
        <div className="cn-font mx-auto my-4">
          <IoIosArrowBack />
          <IoIosArrowBack />
          <IoIosArrowBack />
          <IoIosArrowBack />
          <IoIosArrowBack />
          從城市開始接觸藝術
          <IoIosArrowForward />
          <IoIosArrowForward />
          <IoIosArrowForward />
          <IoIosArrowForward />
          <IoIosArrowForward />
        </div>
      </Row>
      <Row className="justify-content-between both-padding mt-5 pb-5">
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
              <button className="col-8 py-2">MORE+</button>
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
              <button className="col-8 py-2">MORE+</button>
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
              <button className="col-8 py-2">MORE+</button>
            </div>
          </div>
        </div>
      </Row>
    </>
  )
}

export default EventMore
