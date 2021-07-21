import React, { useRef, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { ReactComponent as Logo } from '../../pics/logo.svg'
import StickyBox from 'react-sticky-box/dist/esnext'
import './index.scss'
import '../../bootstrap/css/bootstrap.css'
import { CgArrowLongRightL, CgPacman } from 'react-icons/cg'
import {
  BsThreeDots,
  BsArrowRight,
  BsArrowLeft,
} from 'react-icons/bs'

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

import ProCard from './components/ProCard'
import ProCard2 from './components/ProCard2'

//? product img
import auctime from './image/acution/auction.svg'
import aucline from './image/acution/aucline.svg'
import AuctionCard from './components/AuctionCard'

import gif from './video/gif-marble.gif'

const Index = () => {
  return (
    <>
      {/* hero-section */}
      <div className="hero-section">
        <div className="video-area index-web-padding">
          <video
            className="index-video"
            playsInline="playsinline"
            autoPlay="autoplay"
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
      <div className="news-area d-flex align-items-start'">
        <StickyBox className="news-slogen col-6 d-flex flex-column align-center justify-content-center text-center col-6 px-0">
          <div>
            <h1>TODAY’S</h1>
            <h1>NEWS</h1>
            <div className="news-hl"></div>
            <h3 className="news-slogen-TC mt-3">
              “我們接軌藝術
            </h3>
            <h3 className=" news-slogen-TC mt-2">
              藝術接軌國際"
            </h3>
          </div>
        </StickyBox>
        <div className="news-cards col-6 px-0 row">
          <div className="news col-6 px-0">
            <Link to="/news">
              <img src={imgFlimward} alt="" />
            </Link>
            <div className="index-img-title">
              <h1>放視徵件開跑</h1>
              <h1>高手們齊聚</h1>
              <h1>就等你海放對手！</h1>
              <div className="index-title-ract1"></div>
              <div className="index-title-ract2"></div>
              <div className="index-title-ract3"></div>
            </div>
          </div>
          <div className="news col-6 px-0">
            <Link to="/news">
              <img src={imgDance} alt="" />
            </Link>
            <div className="index-img-title">
              <h1>在她的歌聲裡</h1>
              <h1>誰都能跳舞</h1>
              <h1>連結著邊緣的歌。</h1>
              <div className="index-title-ract1"></div>
              <div className="index-title-ract2"></div>
              <div className="index-title-ract3"></div>
            </div>
          </div>
          <div className="news col-6 px-0">
            <Link to="/news">
              <img src={imgGoldpin} alt="" />
            </Link>
            <div className="index-img-title">
            <h1>一年一度設計盛事</h1>
              <h1>設計超新星</h1>
              <h1>摩拳擦掌的開始！</h1>
              <div className="index-title-ract1-3"></div>
              <div className="index-title-ract2"></div>
              <div className="index-title-ract3"></div>
            </div>
          </div>
          <div className="news col-6 px-0">
            <Link to="/news">
              <img src={imgHeart} alt="" />
            </Link>
            <div className="index-img-title">
            <h1>雙眼的震撼衝擊</h1>
              <h1>日本怪物新人</h1>
              <h1>展開驚奇之旅！</h1>
              <div className="index-title-ract1-4"></div>
              <div className="index-title-ract2"></div>
              <div className="index-title-ract3-4"></div>
            </div>
          </div>
          <div className="news col-6 px-0">
            <Link to="/news">
              <img src={imgHk} alt="" />
            </Link>
            <div className="index-img-title">
            <h1>沒有名字及臉孔</h1>
              <h1>紀錄就是場戰爭</h1>
              <h1>旅港攝影集</h1>
              <div className="index-title-ract1-4"></div>
              <div className="index-title-ract2-5"></div>
              <div className="index-title-ract3-5"></div>
            </div>
          </div>
          <div className="news col-6 px-0">
            <Link to="/news">
              <img src={imglipstick} alt="" />
            </Link>
            <div className="index-img-title">
            <h1>喘不過氣的美感</h1>
              <h1>渡邊直美再出擊</h1>
              <h1>化妝品行銷術</h1>
              <div className="index-title-ract1-4"></div>
              <div className="index-title-ract2-5"></div>
              <div className="index-title-ract3-4"></div>
            </div>
          </div>
        </div>
      </div>
      {/* artist */}
      <div className="artist-area index-web-padding">
        <StickyBox className="artist-slogan pb-5">
          <div>
            <strong>
              Always doing that which I cannot do, in order
              that I may learn how to do it
            </strong>
            <h4 className="notoSansTC-md artist-title-tc">
              藝術 <span>TALK TO TALK</span>
            </h4>
          </div>
        </StickyBox>
        <div className="waterfall ml-auto col-7 pl-0 pb-5">
          <Link to="/artist" className="item">
            <img src={artist1} alt="" />
            <h1>kATZU DORA</h1>
          </Link>
          <Link to="/artist" className="item">
            <img src={artist2} alt="" />
            <h1>TAKASHI</h1>
          </Link>
          <Link to="/artist" className="item">
            <img src={artist3} valt="" />
            <h1>MARIMEKKO</h1>
          </Link>
          <Link to="/artist" className="item">
            <img src={artist4} alt="" />
            <h1>MERRIDO</h1>
          </Link>
          <Link to="/artist" className="item">
            <img src={artist5} alt="" />
            <h1>LUES COOPER</h1>
          </Link>
          <Link to="/artist" className="item">
            <img src={artist6} alt="" />
            <h1>MR DOODEL</h1>
          </Link>
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
                <h2 className="mx-2 text-center pt-2 NotoSansTC-md">
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
        <div className="auction-area pl-4">
          <div className="auction-slogan d-flex mb-3">
            <div className="col-6">
              <h1>AUCTION</h1>
              <h4 className="notoSansTC-md auction-title-tc mb-5">
                藝術 <span>頂尖對決</span>
              </h4>
            </div>
            <div className="col-6 d-flex flex-column pt-4">
              <img src={aucline} alt="" />
              <Link to="/auction">
                <div className="d-flex px-5">
                  <button className="engravers col-12">
                    WATCH All
                  </button>
                </div>
              </Link>
            </div>
          </div>
          <AuctionCard />
        </div>
      </div>
      {/* 過場區 */}
      <div className="index-ending d-flex flex-column">
        {/* <div className="col-12">
          <img src={door1} alt="" />
        </div> */}
        <div className="col-12 px-0 mt-5">
          <img
            className="w-100"
            style={{ marginBottom: '-15px' }}
            src={gif}
            alt=""
          />
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
