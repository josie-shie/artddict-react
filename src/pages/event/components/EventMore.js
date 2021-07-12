import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Row } from 'react-bootstrap'


// Pictures
import EdListCardPic from '../images/event/004.jpg'
import EdListCardPic2 from '../images/event/010.jpg'
import EdListCardPic3 from '../images/event/104.jpg'

// react icons
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosHeart,
} from 'react-icons/io'

import '../style/reset.css'
import '../style/fontAndBtn.scss'
import '../style/EventMore.scss'

function EventMore(props) {
  return (
    <>
      <Row className="e-look-more both-padding">
        <div className="cn-font mx-auto my-4">
          <IoIosArrowBack />
          <IoIosArrowBack />
          <IoIosArrowBack />
          <IoIosArrowBack />
          <IoIosArrowBack />
          參與更多藝術行動
          <IoIosArrowForward />
          <IoIosArrowForward />
          <IoIosArrowForward />
          <IoIosArrowForward />
          <IoIosArrowForward />
        </div>
      </Row>
      <Row className="justify-content-between both-padding mt-5 pb-5 cn-font">
        <Link
          to="/event/event-list/detail/4"
          style={{ textDecoration: 'none' }}
          className="e-more-card col-4 my-3 "
        >
          <img
            className="col-12 p-0"
            src={EdListCardPic}
            alt=""
          />
          <h6 className="col-12 p-0 cn-font my-2">
            INITIATION
          </h6>
          <div className="d-flex">
            <div className="col-8 p-0">
              <p>地點：臺中市</p>
              <p>時間：2021年09月</p>
            </div>
            <div className="col-4 p-0">
              <button className="border-right py-2 col-4">
                <IoIosHeart />
              </button>
              <button className="py-2 col-8">MORE+</button>
            </div>
          </div>
        </Link>

        <Link
          to="/event/event-list/detail/10"
          style={{ textDecoration: 'none' }}
          className="e-more-card col-4 my-3 "
        >
          <img
            className="col-12 p-0"
            src={EdListCardPic2}
            alt=""
          />
          <h6 className="col-12 p-0 cn-font my-2">
            臺博館建築再發
          </h6>
          <div className="d-flex">
            <div className="col-8 p-0">
              <p>地點：新竹市</p>
              <p>時間：2021年07月</p>
            </div>
            <div className="col-4 p-0">
              <button className="border-right  py-2 col-4">
                <IoIosHeart />
              </button>
              <button className="col-8 py-2">MORE+</button>
            </div>
          </div>
        </Link>

        <Link
          to="/event/event-list/detail/15"
          style={{ textDecoration: 'none' }}
          className="e-more-card col-4 my-3 "
        >
          <img
            className="col-12 p-0"
            src={EdListCardPic3}
            alt=""
          />
          <h6 className="col-12 p-0 cn-font my-2">
            品牌設計實戰工作坊
          </h6>
          <div className="d-flex">
            <div className="col-8 p-0">
              <p>地點：臺中市</p>
              <p>時間：2021年07月</p>
            </div>
            <div className="col-4 p-0">
              <button className="col-4 border-right  py-2">
                <IoIosHeart />
              </button>
              <button className="col-8 py-2">MORE+</button>
            </div>
          </div>
        </Link>
      </Row>
    </>
  )
}

export default EventMore
