//TODO:Auction time
//TODO:Auction carol

import React, { useRef, useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { ReactComponent as Logo } from '../../pics/logo.svg'
import './index.scss'
import '../../bootstrap/css/bootstrap.css'
import { CgArrowLongRightL, CgPacman } from 'react-icons/cg'
import {
  BsThreeDots,
  BsArrowRight,
  BsArrowLeft,
} from 'react-icons/bs'
import {
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
} from 'react-icons/io'
import ProCrard from './components/ProCard'

//? index img
import video from './video/Graffiti street art.mp4'

//? news img
import imgFlimward from './image/news/flimward.jpg'
import imgDance from './image/news/dance.jpg'
import imgGoldpin from './image/news/goldpin.jpg'
import imgHeart from './image/news/heart.jpg'
import imgHk from './image/news/hk.jpg'
import imglipstick from './image/news/lipstick.jpg'

//? artist img
import artist1 from './image/artist/carpat.jpg'
import artist2 from './image/artist/katzu daro.jpg'
import artist3 from './image/artist/marimekko.jpg'
import artist4 from './image/artist/merrido.jpg'
import artist5 from './image/artist/takashi.jpg'
import artist6 from './image/artist/mr-doodel.jpg'

//? event img
import eventicon from '../../pics/arddict-circle-bl.svg'
import eventicon2 from '../../pics/arddict-eye-bl.svg'
import IndexEventMarquee from './components/IndexEventMarquee'

//? product img
import tri from './image/cute/tri.svg'
import cirhf from './image/cute/cirhf.svg'
import cirbk from './image/cute/cirbk.svg'
import box from './image/cute/box.svg'
import cirbl from './image/cute/cirbl.svg'
import tage from './image/cute/tage.svg'
import eye from './image/cute/eye.svg'

import product1 from './image/product/24.植物園 獨角獸 圍巾03.jpeg'
import product2 from './image/product/33.司宗譜紋章 圍巾03.jpeg'
import product3 from './image/product/19.威廉 綠啄花 披肩03.jpeg'
import ProCard from './components/ProCard'
import ProCard2 from './components/ProCard2'

//? product img
import auctime from './image/acution/auction.svg'
import aucline from './image/acution/aucline.svg'

import gif from './video/gif-marble.gif'

const Index = () => {

  return (
    <>
      {/* hero-section */}
      <div className="hero-section">
        <div className="video-area index-web-padding">
          <video
            className="index-video"
            playsinline="playsinline"
            autoplay="autoplay"
            muted="muted"
            loop="loop"
          >
            <source src={video} />
          </video>
          <div className="slogan">
            <h1>devotes to ART</h1>
            <h5 className="mt-1">to the moon and back</h5>
            <div className="start-scroll mt-1">
              <marquee direction="down" className="mt-2">
                <p className="vertical-line mb-4">|</p>
              </marquee>
              <p>scroll Down</p>
            </div>
          </div>
        </div>
        <div className="rect rect-first"></div>
        <div className="rect rect-last"></div>
        <div>
          <Logo className="index-logo" />
        </div>
      </div>

      {/* news */}
      <div className="news-area d-flex">
        <div className="news-slogen col-6 d-flex flex-column align-center justify-content-center text-center col-6 px-0">
          <h1>TODAY’S</h1>
          <h1>NEWS</h1>
          <div className="news-hl"></div>
          <h1 className="news-slogen-TC mt-3">
            “我們接軌藝術
          </h1>
          <h1 className="notoSansTC-md news-slogen-TC mt-2">
            藝術接軌國際"
          </h1>
        </div>
        <div className="news-cards col-6 px-0 row">
          <div className="news col-6 px-0">
            <img src={imgFlimward} alt="" />
            <div className="index-img-title">
              <h1>
                放視徵件中，高手們齊聚，就等你海放對手！
              </h1>
            </div>
          </div>
          <div className="news col-6 px-0">
            <img src={imgDance} alt="" />
            <div className="index-img-title">
              <h1>
                在她的歌裡，誰都 能跳舞，來自邊緣 的連結者。
              </h1>
            </div>
          </div>
          <div className="news col-6 px-0">
            <img src={imgGoldpin} alt="" />
            <div className="index-img-title">
              <h1>
                金點設計
                <br />
                名單出爐！
                <br />
                設計超新星
                <br />
                獎落誰家？
              </h1>
            </div>
          </div>
          <div className="news col-6 px-0">
            <img src={imgHeart} alt="" />
            <div className="index-img-title">
              <h1>
                新視覺藝術！
                <br />
                板根芽子
                <br />
                創意再升級！
              </h1>
            </div>
          </div>
          <div className="news col-6 px-0">
            <img src={imgHk} alt="" />
            <div className="index-img-title">
              <h1>
                《理大圍城》： <br />
                沒有名字和臉孔
                <br />的 運動與拍攝。
              </h1>
            </div>
          </div>
          <div className="news col-6 px-0">
            <img src={imglipstick} alt="" />
            <div className="index-img-title">
              <h1>
                渡邊直美再造！ 另人食慾變好的 化妝品行銷
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* artist */}
      <div className="artist-area index-web-padding">
        <div className="artist-slogan">
          <strong>
            Always doing that which I cannot do, in order
            that I may learn how to do it
          </strong>
          <h4 className="notoSansTC-md artist-title-tc">
            藝術 <span>TALK TO TALK</span>
          </h4>
        </div>

        <div className="waterfall ml-auto col-7 pl-0">
          <div className="item">
            <img src={artist1} />
          </div>
          <div className="item">
            <img src={artist2} />
          </div>
          <div className="item">
            <img src={artist3} />
          </div>
          <div className="item">
            <img src={artist4} />
          </div>
          <div className="item">
            <img src={artist5} />
          </div>
          <div className="item">
            <img src={artist6} />
          </div>
        </div>
      </div>

      {/* Event */}
      <div className="event-area index-web-padding d-flex flex-column">
        <div className="event-img">
          <IndexEventMarquee />
        </div>
        <div className="event-slogan d-flex justify-content-center pl-4 mb-3">
          <div className="col-7">
            <h1 className=" text-break">
              Chasing art never stops
            </h1>
            <h4 className="notoSansTC-md event-title-tc">
              藝術 <span>活動展</span>
            </h4>
            <Link to="/map">
              <button className="notoSansTC-md py-3 px-4 mt-4">
                前往地圖搜尋
              </button>
            </Link>
          </div>
          <div className="eventicon text-center col-5 pl-0">
            <Link to="/event">
              <img
                className="event-eye spin-img"
                src={eventicon}
                alt=""
              />
              <img
                className="event-eye2"
                src={eventicon2}
                alt=""
              />
              <h1>CHECK</h1>
            </Link>
          </div>
        </div>
        <div className="px-4">
          <marquee
            scrollamount="10"
            className="event-marquee mt-5 px-3"
          >
            <h1 className="notoSansTC-md my-3">
              2021 台北市立美術館雙年展 正式開跑
              <CgArrowLongRightL /> 2021
              台北市立美術館雙年展 正式開跑{' '}
              <CgArrowLongRightL /> 2021
              台北市立美術館雙年展 正式開跑
              <CgArrowLongRightL /> 2021
              台北市立美術館雙年展 正式開跑{' '}
              <CgArrowLongRightL />
            </h1>
          </marquee>
          <marquee
            direction="right"
            scrollamount="10"
            className="event-marquee my-5 px-3"
          >
            <h1 className="notoSansTC-md my-3">
              放視大賞 強力募集中 <CgPacman />
              <BsThreeDots />
              放式大賞強 放視大賞 強力募集中
              <CgPacman />
              <BsThreeDots /> 放式大賞強 放視大賞 強力募集中
              <CgPacman />
              <BsThreeDots /> 放式大賞 強力募集中
              <CgPacman />
              <BsThreeDots />
            </h1>
          </marquee>
        </div>
      </div>
      {/* Shop */}
      <div className="product-area index-web-padding">
        <div className="product-cute d-flex align-items-end justify-content-center pb-5">
          <img src={tri} alt="" />
          <img className="pl-4" src={cirhf} alt="" />
          <img src={cirbk} alt="" />
          <img className="index-cirbl" src={cirbl} alt="" />
          <img className="index-box" src={box} alt="" />
          <img className="index-tage" src={tage} alt="" />
          <img className="index-eye" src={eye} alt="" />
          <img className="index-eye2" src={eye} alt="" />
          <strong className="cute-slogan">
            ART can be <br />
            <span>ANYTHING?</span>
          </strong>
          <div className="product-hl"></div>
        </div>
        <div className="product-slogan pl-4">
          <h1>SURE!</h1>
          <div className="d-flex mb-4">
            <h1>embellish it!</h1>
            <Link to="/product">
              <div className="index-pro-more d-flex justify-content-end align-items-center ml-5">
                <marquee
                  direction="right"
                  scrollamount="10"
                  className="product-marquee py-2"
                >
                  <strong className="h4">
                    <BsArrowRight />
                    <BsArrowRight />
                    <BsArrowRight />
                  </strong>
                </marquee>
                <h2 className="mx-2 text-center pt-2">
                  WATCH MORE
                </h2>
                <marquee
                  direction="left"
                  scrollamount="10"
                  className="product-marquee py-2"
                >
                  <strong className="h4">
                    <BsArrowLeft />
                    <BsArrowLeft />
                    <BsArrowLeft />
                  </strong>
                </marquee>
              </div>
            </Link>
          </div>
          <div>
            <h4 className="notoSansTC-md product-title-tc">
              藝術 <span>點綴生活</span>
            </h4>
          </div>
        </div>
        <ProCard />
        <ProCard2 />
        {/* auction */}
        <div className="auction-area px-4">
          <div className="auction-slogan d-flex mb-3">
            <div className="col-6">
              <h1>AUCTION</h1>
              <h4 className="notoSansTC-md auction-title-tc pl-3 mb-5">
                藝術 <span>頂尖對決</span>
              </h4>
            </div>
            <div className="col-6 d-flex flex-column pt-4">
              <img src={aucline} alt="" />
              <div className="d-flex px-5">
                <button className="notoSansTC-md col-6">
                  WATCH ALL
                </button>
                <button className="col-3">
                  <IoIosArrowRoundBack size={30} />
                </button>
                <button className="col-3 ">
                  <IoIosArrowRoundForward size={30} />
                </button>
              </div>
            </div>
          </div>
          <div className="auctime">
            <img
              className="w-100 spin-img"
              src={auctime}
              alt=""
            />
          </div>
          <div className="auction-card-wrap d-flex">
            <div className="auction-card col-3">
              <img src={product2} alt="" />
              <div className="index-card-rect"></div>
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  奈良美智 [少女] 原作
                </h5>
                <h5 className="notoSansTC-md font-weight-bold">
                  49,20,00元
                </h5>
              </div>
            </div>
            <div className="auction-card col-3">
              <img src={product2} alt="" />
              <div className="index-card-rect"></div>
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  鹽田千春 [捕夢網]
                </h5>
                <h5 className="notoSansTC-md font-weight-bold">
                  62,70,00元
                </h5>
              </div>
            </div>
            <div className="auction-card col-3">
              <img src={product1} alt="" />
              <div className="index-card-rect"></div>
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  松本龍介 [無題]
                </h5>
                <h5 className="notoSansTC-md font-weight-bold">
                  42,60,00元
                </h5>
              </div>
            </div>
            <div className="auction-card col-3">
              <img src={product3} alt="" />
              <div className="index-card-rect"></div>
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  楊英風 [英風年華]
                </h5>
                <h5 className="notoSansTC-md font-weight-bold">
                  12,60,00元
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 過場區 */}
      <div className="index-ending d-flex flex-column">
        {/* <div className="col-12">
          <img src={door1} alt="" />
        </div> */}
        <div className="col-12 px-0 mt-5">
          <img className="w-100" src={gif} alt="" />
          <h1>
            May your passion <br />
            for art
            <br />
            <span> has no end</span>
          </h1>
        </div>
      </div>
    </>
  )
}

export default withRouter(Index)
