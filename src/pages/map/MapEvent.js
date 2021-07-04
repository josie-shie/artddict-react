import React from 'react'
import { ReactComponent as Logo } from '../../pics/logo-bk.svg'
import { withRouter } from 'react-router-dom'
import './map.scss'

//? components
import LeafLet from './components/LeafLet'
import MarqueeMap from './components/MarqueeMap'
import MarqueeMapEnd from './components/MarqueeMapEnd'
import MapCard from './components/MapCard'

//? icons
import { MdMyLocation } from 'react-icons/md'
import { IoIosSearch } from 'react-icons/io'
import { RiArrowRightSLine } from 'react-icons/ri'

const Map = () => {
  return (
    <>
      <div className="map-area index-web-padding">
        <Logo className="map-logo" />
        <MarqueeMap />
        <div className="map-content d-flex mb-5">
          <div className="col-8 d-flex flex-column px-0 ml-3">
            <div className="map-search-bar d-flex align-items-center justify-content-center py-2">
              <div className="map-select-box px-4">
                地區
              </div>
              <select
                className="map-select-box map-select pl-3 border-left-0 "
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
              <div className="map-select-box ml-5 px-4">
                搜尋
              </div>
              <div className="pl-5 ml-5 mr-4">
                <MdMyLocation size={30} color={'#81FC4D'} />
              </div>
              <div className="map-search mr-2">
                <IoIosSearch size={30} color={'#81FC4D'} />
                <div className="">
                  <form action="" autocomplete="on">
                    <input
                      id="search"
                      name="map-search"
                      type="text"
                      placeholder="Search somthing ?"
                    />
                    <input
                      id="search-submit"
                      value="Rechercher"
                      type="submit"
                    />
                  </form>
                </div>
              </div>
            </div>
            <LeafLet />
          </div>
          <div className="map-card-area col-4 pl-0">
            <div className="map-card-select">
              <h1 className="h3 text-center my-3">
                美術館別
                <RiArrowRightSLine color={'#1D0AFF'} />
                <RiArrowRightSLine color={'#1D0AFF'} />
                <RiArrowRightSLine color={'#1D0AFF'} />
                <RiArrowRightSLine color={'#1D0AFF'} />
              </h1>
              <div className="d-flex align-items-center justify-content-center py-2 mb-2">
                <div className="map-select-box-dk px-4">
                  地區
                </div>
                <select
                  className="map-select-box-dk map-select pl-3 border-left-0 "
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
            <div className="px-4">
              <MapCard />
              <MapCard />
              <MapCard />
            </div>
          </div>
        </div>
      </div>
      <MarqueeMapEnd />
    </>
  )
}

export default withRouter(Map)
