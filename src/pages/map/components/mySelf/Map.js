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
import {
  IoIosSearch,
  IoIosHeartEmpty,
} from 'react-icons/io'
import {
  RiArrowRightSLine,
  RiArrowLeftSLine,
} from 'react-icons/ri'
import { RiArrowRightUpLine } from 'react-icons/ri'

const Map = () => {
  const [museums, setMuseums] = useState([])
  // const [idMuseum, setIdMuseum] = useState()
  // const [musEvent, setmusEvent] = useState([])
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)
  const [city, setCity] = useState('')

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
    // 設定資料
    setMuseums(data)
  }

  //撈出活動
  // async function getMusEventServer() {
  //   const url = `http://localhost:6005/map/musEvent?idMuseum=${idMuseum}?`

  //   // 注意header資料格式要設定，伺服器才知道是json格式
  //   const request = new Request(url, {
  //     method: 'GET',
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'appliaction/json',
  //     }),
  //   })

  //   const response = await fetch(request)
  //   const data = await response.json()
  //   // 設定資料
  //   setmusEvent(data)
  // }

  useEffect(() => {
    getMuseumServer()
  }, [])

  // useEffect(() => {
  //   getMusEventServer()
  // }, [idMuseum])

  // onClick={(e)=>{
  //   e.preventDefault()
  //   setmusEvent()
  // }}

  const museumDisplay = museums.map((mus) => {
    return (
      <React.Fragment key={mus.id}>
        <div className="map-card-select">
          <h1 className="h3 text-center my-3">
            美術館別
            <RiArrowRightSLine color={'#1D0AFF'} />
            <RiArrowRightSLine color={'#1D0AFF'} />
            <RiArrowRightSLine color={'#1D0AFF'} />
            <RiArrowRightSLine color={'#1D0AFF'} />
          </h1>
        </div>
        <div className="map-card pb-3 mb-3">
          <Link
            // onClick={(e) => {
            //   e.preventDefault()
            //   setIdMuseum(mus.id)
            // }}
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
              <Link
                key={mus.id}
                onClick={(e) => {
                  e.preventDefault()
                  setIdMuseum(mus.id)
                }}
              >
                <button className="px-2 pt-3">
                  更多活動
                  <RiArrowRightUpLine />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  })

  // const museumEvent = musEvent.map((musEve) => {
  //   return (
  //     <React.Fragment key={musEve.id}>
  //       <div className="d-flex justify-content-center">
  //         <div className="py-3 mr-3">
  //           <RiArrowLeftSLine color={'#1D0AFF'} size={30} />
  //         </div>
  //         <h1 className="h3 text-center my-3">
  //           {musEve.musName}
  //         </h1>
  //       </div>
  //       <div className="d-flex align-items-center justify-content-center py-2 mb-2">
  //         <div className="map-select-box-dk px-4">排序</div>
  //         <select
  //           className="map-select-box-dk map-select pl-3 border-left-0 "
  //           name=""
  //           id=""
  //         >
  //           <option style={{ color: '#707070' }} value="">
  //             距離最近的
  //           </option>
  //           <option value="">123</option>
  //           <option value="">123</option>
  //         </select>
  //       </div>
  //       <div className="px-4">
  //         <Link
  //           to={`/event/event-list/detail/${musEve.id}`}
  //         >
  //           <div className="map-card pb-3 mb-3">
  //             <div>
  //               <img
  //                 className="w-100"
  //                 src={musEve.eventImg}
  //                 alt=""
  //               />
  //             </div>
  //             <div className="d-flex justify-content-between">
  //               <div className="col-9 pl-0">
  //                 <strong>{musEve.eventName}</strong>
  //                 <p>地點：{musEve.cityName}</p>
  //                 <p>票價：{musEve.eventPrice}</p>
  //               </div>
  //               <div className="map-card-btn d-flex flex-column text-center">
  //                 <IoIosHeartEmpty
  //                   size={'50%'}
  //                   color={'#E8E8E8'}
  //                   className="px-2 mx-auto"
  //                 />
  //                 <Link
  //                   to={`/event/event-list/detail/${musEve.id}`}
  //                 >
  //                   <button className="px-2 pt-2">
  //                     前往
  //                     <RiArrowRightUpLine />
  //                   </button>
  //                 </Link>
  //               </div>
  //             </div>
  //           </div>
  //         </Link>
  //       </div>
  //     </React.Fragment>
  //   )
  // })

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
            {/* //TODO */}
            <LeafLet2 museums={museums} />
          </div>
          <div className="map-card-area col-4 pl-0">
            <div className="px-4">
              {museumDisplay}
              {/* {{ idMuseum }
                ? { museumEvent }
                : { museumDisplay }} */}
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
