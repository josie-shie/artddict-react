import React from 'react'
import { ReactComponent as Logo } from '../../pics/logo-bk.svg'
import './map.scss'
import LeafLet from './components/LeafLet'
import MarqueeMap from './components/MarqueeMap'

import { MdLocationSearching } from 'react-icons/md'
import { HiSearch } from 'react-icons/hi'

const Map = () => {
  return (
    <>
      <div className="map-area index-web-padding">
        <Logo className="map-logo" />
        <MarqueeMap />
        <div className="d-flex">
          <div className="col-8 d-flex flex-column px-0">
<<<<<<< Updated upstream
            <div className="map-search-bar d-flex">
              <div className="map-select">
                <div className="pr-3">地區</div>
                <select
                  className="ed-select pl-3"
                  name=""
                  id=""
=======
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
>>>>>>> Stashed changes
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
                <MdLocationSearching
                  size={30}
                  color={'#81FC4D'}
                />
              </div>
              <div className="map-search mr-2">
                <HiSearch size={30} color={'#81FC4D'} />
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
