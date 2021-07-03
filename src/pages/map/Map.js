import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../pics/logo-bk.svg'
import { GiPikeman } from 'react-icons/gi'
import { RiArrowLeftSLine } from 'react-icons/ri'
import './map.css'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const Map = () => {
  // 參考資料 : https://leafletjs.com/examples/quick-start/ & https://juejin.im/post/5cc192976fb9a032092e8e0a

  return (
    <>
      <div className="map-area index-web-padding">
        <Logo className="map-logo" />
        <marquee
          scrollamount="10"
          className="event-marquee px-3"
        >
          <h1 className="notoSansTC-md my-3">
            探索美學 從周圍開始 <GiPikeman />
            <RiArrowLeftSLine />
            <RiArrowLeftSLine />
            <RiArrowLeftSLine />
            <RiArrowLeftSLine /> 探索美學 從周圍開始{' '}
            <GiPikeman />
            <RiArrowLeftSLine />
            <RiArrowLeftSLine />
            <RiArrowLeftSLine />
            <RiArrowLeftSLine /> 探索美學 從周圍開始{' '}
            <GiPikeman />
            <RiArrowLeftSLine />
            <RiArrowLeftSLine />
            <RiArrowLeftSLine />
            <RiArrowLeftSLine />
          </h1>
        </marquee>

        <div className="d-flex">
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </>
  )
}

export default Map
