import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import { IoIosHeartEmpty } from 'react-icons/io'
import { RiArrowRightUpLine } from 'react-icons/ri'
import Mus01 from '../img/mus01.jpg'

const MapCard = () => {
  return (
    <>
      <div className="map-card pb-3 mb-3">
        <div>
          <img className="w-100" src={Mus01} alt="" />
        </div>
        <div className="d-flex justify-content-between">
          <div className="col-9 pl-0">
            <strong>國立美術館</strong>
            <p>地點：臺中市</p>
            <p>時間：09:00-17:00</p>
          </div>
          <div className="map-card-btn text-center">
            <Link to="/map/museum:sid">
              <button className="px-2">
                更多活動
                <RiArrowRightUpLine />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(MapCard)
