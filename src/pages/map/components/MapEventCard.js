import React from 'react'
import { withRouter,Link } from 'react-router-dom'
import { IoIosHeartEmpty } from 'react-icons/io'
import { RiArrowRightUpLine } from 'react-icons/ri'
import Event01 from '../img/event01.jpg'

const MapCard = () => {
  return (
    <>
      <Link to="/event/:sid">
        <div className="map-card pb-3 mb-3">
          <div>
            <img className="w-100" src={Event01} alt="" />
          </div>
          <div className="d-flex justify-content-between">
            <div className="col-9 pl-0">
              <strong>引領風騷</strong>
              <p>地點：臺中市美術館</p>
              <p>時間：09:00-17:00</p>
            </div>
            <div className="map-card-btn d-flex flex-column text-center">
              <IoIosHeartEmpty
                size={'50%'}
                color={'#E8E8E8'}
                className="px-2 mx-auto"
              />
              <Link to="/museum">
                <button className="px-2 pt-2">
                  前往
                  <RiArrowRightUpLine />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default withRouter(MapCard)
