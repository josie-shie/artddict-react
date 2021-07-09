import { React, useEffect, useState } from 'react'
import { ReactComponent as Logo } from '../../pics/logo-bk.svg'
import { withRouter } from 'react-router-dom'
import './map.scss'

//? components
import LeafLet2 from './components/LeafLet2'
import MarqueeMap from './components/MarqueeMap'
import MarqueeMapEnd from './components/MarqueeMapEnd'
import MapCard from './components/MapCard'
import MapEventCard from './components/MapEventCard'

//? icons
import { MdMyLocation } from 'react-icons/md'
import { IoIosSearch } from 'react-icons/io'
import { RiArrowLeftSLine } from 'react-icons/ri'

const Map = () => {

// const [musEvent,setMusEvent] = useState([])

//   async function getMuseumServer() {
//     const url = 'http://localhost:6005/map/mapevent/:id?'

//     // 注意header資料格式要設定，伺服器才知道是json格式
//     const request = new Request(url, {
//       method: 'GET',
//       headers: new Headers({
//         Accept: 'application/json',
//         'Content-Type': 'appliaction/json',
//       }),
//     })

//     const response = await fetch(request)
//     const data = await response.json()
//     // 設定資料
//     setMusEvent(data)
//   }

  return (
    <>
      <div className="map-area index-web-padding">
        <Logo className="map-logo" />
        <MarqueeMap />
        <div className="map-content d-flex mb-5">
          <div className="col-8 d-flex flex-column px-0 ml-3">
            <div className="map-search-bar d-flex align-items-center justify-content-center py-2">
              <div className="map-select-box px-4 pt-1">
                地區
              </div>
              <form className="d-flex justify-content-between">
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
                <div className="map-select-box px-4 pt-1">
                  城市
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
                <div className="map-select-box px-4 pt-1">
                  搜尋
                </div>
              </form>
              <div className="pl-5 ml-5 mr-4">
                <MdMyLocation size={30} color={'#81FC4D'} />
              </div>
              <div className="map-search mr-2">
                <IoIosSearch size={30} color={'#81FC4D'} />
                <div className="">
                </div>
              </div>
            </div>
            <LeafLet2 />
          </div>
          <div className="map-card-area col-4 pl-0">
            <div className="d-flex justify-content-center">
              <div className="py-3 mr-3">
                <RiArrowLeftSLine
                  color={'#1D0AFF'}
                  size={30}
                />
              </div>
              <h1 className="h3 text-center my-3">
                美術館名稱
              </h1>
            </div>
            <div className="d-flex align-items-center justify-content-center py-2 mb-2">
              <div className="map-select-box-dk px-4">
                排序
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
                  距離最近的
                </option>
                <option value="">123</option>
                <option value="">123</option>
              </select>
            </div>
            <div className="px-4">
              <MapEventCard />
              <MapEventCard />
            </div>
          </div>
        </div>
      </div>
      <MarqueeMapEnd />
    </>
  )
}

export default withRouter(Map)
