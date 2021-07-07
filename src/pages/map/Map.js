import { React, useEffect, useState } from 'react'
import { ReactComponent as Logo } from '../../pics/logo-bk.svg'
import { Link, withRouter } from 'react-router-dom'
import './map.scss'

//? config
import {
  data,
  countries,
  townships,
} from './config/townships'

//? components
import LeafLet2 from './components/LeafLet2'
import MarqueeMap from './components/MarqueeMap'
import MarqueeMapEnd from './components/MarqueeMapEnd'

//? icons
import { MdMyLocation } from 'react-icons/md'
import { IoIosSearch } from 'react-icons/io'
import { RiArrowRightSLine } from 'react-icons/ri'
import { RiArrowRightUpLine } from 'react-icons/ri'

const Map = () => {
  const [museums, setMuseums] = useState([])
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)
  const [city, setCity] = useState('')
  const [musPx, setMusePx] = useState('')
  const [musPy, setMusePy] = useState('')

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

  //撈出城市的id
  async function getMusByQuerySQL() {
    // e.preventDefault();
    const url = `http://localhost:6005/map?city=${city}`
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
    setMuseums(data)
    // 設定資料
  }

  useEffect(() => {
    getMuseumServer()
  }, [])

  useEffect(() => {
    museums.map((mus) => {
      setMusePx(mus.Px)
      setMusePy(mus.Py)
    })
  }, [country, township, city])

  const museumDisplay = museums.map((mus) => {
    return (
      <>
        <div className="map-card pb-3 mb-3">
          <Link
            key={mus.id}
            to={`/map/mapevent/${mus.id}?`}
          >
            <img
              className="w-100"
              src={`http://localhost:6005/museumpics/mus/${mus.musImg}`}
              alt=""
            />
          </Link>
          <div className="d-flex justify-content-between">
            <div className="col-9 pl-0">
              <strong>{mus.musName}</strong>
              <p>地點：{mus.cityName}</p>
              <p>時間：09:00-17:00</p>
            </div>
            <div className="map-card-btn text-center">
              <Link to="/map/museum:sid">
                <button className="px-2 pt-3">
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
          <div className=" col-8 d-flex flex-column px-0 ml-3">
            <div className="map-search-bar d-flex justify-content-center align-items-center py-2">
              <div className="map-select-box px-4 pt-1">
                地區
              </div>
              <from
                className="d-flex justify-content-between"
                return="false"
              >
                <select
                  className="map-select-box map-select pl-3 border-left-0 "
                  name=""
                  id=""
                  value={country}
                  onChange={(e) => {
                    //得到選取的setCountry 索引值
                    setCountry(+e.target.value)
                    //需要將setTownshipe歸零
                    setTownship(-1)
                    //空自字串 用來接取最後選定的值
                    setCity('')
                  }}
                >
                  <option value="-1">請選擇</option>
                  {/* map出資料表countries的value */}
                  {countries.map((value, index) => (
                    <option key={index} value={index}>
                      {value}
                    </option>
                  ))}
                </select>
                <div className="map-select-box px-4 pt-1">
                  城市
                </div>
                <select
                  className="map-select-box map-select pl-3 border-left-0 "
                  name=""
                  id=""
                  value={township}
                  onChange={(e) => {
                    //得到選取的setCountry 索引值
                    setTownship(+e.target.value)
                    //二維陣列得到townships中的country[選取的index]
                    //設定回去city中
                    setCity(
                      townships[country][+e.target.value]
                    )
                  }}
                >
                  <option value="-1">請選擇</option>
                  {country > -1 &&
                    townships[country].map(
                      (value, index) => (
                        <option key={index} value={index}>
                          {value}
                        </option>
                      )
                    )}
                </select>
                <button
                  className="map-select-box px-4 pt-1"
                  onClick={() => {
                    getMusByQuerySQL()
                  }}
                >
                  搜尋
                </button>
              </from>
              <div className="pl-5 ml-5 mr-4">
                <MdMyLocation size={30} color={'#81FC4D'} />
              </div>
              <div className="map-search mr-2">
                <IoIosSearch size={30} color={'#81FC4D'} />
              </div>
            </div>
            <LeafLet2 musPx={musPx} musPy={musPy} />
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
              {/* <MapCardSql city={city} setCity={setCity} /> */}
            </div>
          </div>
        </div>
      </div>
      <MarqueeMapEnd />
    </>
  )
}

export default withRouter(Map)
