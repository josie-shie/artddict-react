import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../pics/logo-bk.svg'
import './map.scss'
import LeafLet from './components/LeafLet'
import MarqueeMap from './components/MarqueeMap'

const Map = () => {
  return (
    <>
      <div className="map-area index-web-padding">
        <Logo className="map-logo" />
        <MarqueeMap />
        <div className="d-flex">
          <div className="col-8 d-flex flex-column px-0">
            <div className="map-search-bar d-flex">
              <div className="map-select">
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
            </div>
            <LeafLet className="  col-12" />
          </div>
          <div className="col-4">
            <div className="map-card-wrap">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Map
