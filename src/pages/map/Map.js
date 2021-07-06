import { React, useEffect, useState } from 'react'
import { ReactComponent as Logo } from '../../pics/logo-bk.svg'
import { Link, withRouter } from 'react-router-dom'
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
import { RiArrowRightUpLine } from 'react-icons/ri'

const Map = () => {
  const [museums, setMuseums] = useState([])
  const [dataLoading, setDataLoading] = useState(false)

  // 連接的伺服器資料網址
  async function getMuseumServer() {
    const url = 'http://localhost:6005/map'

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // 設定資料
    setMuseums(data)
  }

  useEffect(() => {
    getMuseumServer()
  }, [])

  const museumDisplay = museums.map((mus) => {
    return (
      <>
        <div className="map-card pb-3 mb-3">
          <Link key={mus.id}>
            <img
              className="w-100"
              src={`http://localhost:6005/museumpics/mus/${mus.musImg}`}
              alt=""
            />
          </Link>
          <div className="d-flex justify-content-between">
            <div className="col-9 pl-0">
              <strong>{mus.musName}</strong>
              <p>地點：{mus.musCity}</p>
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
  })

  return (
    <>
      <div className="map-area index-web-padding">
        <Logo className="map-logo" />
        <MarqueeMap />
        <div className="map-content d-flex mb-5">
          <div className="col-8 d-flex flex-column px-0 ml-3">
            <div className="map-search-bar d-flex justify-content-center align-items-center py-2">
              <div className="map-select-box px-4">
                地區
              </div>
              <from className="d-flex justify-content-between">
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
              </from>
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
            //!這邊有問題
            {/* <LeafLet /> */}
            //!這邊有問題
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
            </div>
            <div className="px-4">
              {museumDisplay}
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
