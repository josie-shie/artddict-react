//TODO:rolling icon
//TODO:flying event img
//TODO:artist card bg fix
//TODOL:hero sectionu 應該要flex
import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../pics/logo.svg'
import './index.css'
import '../../bootstrap/css/bootstrap.css'
import { CgArrowLongRightL, CgPacman } from 'react-icons/cg'
import { BsThreeDots } from 'react-icons/bs'

import video from './video/Graffiti street art.mp4'
import imgFlimward from './image/news/flimward.jpg'
import imgDance from './image/news/dance.jpg'
import imgGoldpin from './image/news/goldpin.jpg'
import imgHeart from './image/news/heart.jpg'
import imgHk from './image/news/hk.jpg'
import imglipstick from './image/news/lipstick.jpg'
import artist1 from './image/artist/carpat.jpg'
import artist2 from './image/artist/katzu daro.jpg'
import artist3 from './image/artist/marimekko.jpg'
import artist4 from './image/artist/merrido.jpg'
import artist5 from './image/artist/takashi.jpg'
import artist6 from './image/artist/tasi.jpg'
import eventimg1 from './image/event/001.jpg'
import eventimg2 from './image/event/002.jpg'
import eventimg3 from './image/event/003.jpg'
import eventimg4 from './image/event/004.jpg'
import eventimg5 from './image/event/005.jpg'
import eventimg6 from './image/event/006.jpg'
import eventicon from '../../pics/arddict-circle-bl.svg'

const Index = () => {
  return (
    <>
      {/* hero-section */}
      <div className="hero-section">
        <div className="video-area">
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
            <h5 className="mt-3">to the moon and back</h5>
            <div className="start-scroll mt-5">
                <p className="vertical-line mb-4">|</p>
                <p>scroll Down</p>
            </div>
          </div>
        </div>
        <div className="rect rect-first"></div>
        <div className="rect rect-last"></div>
        <div>
          <Logo className="logo" />
        </div>
        
      </div>

      {/* news */}
      <div className="news-area d-flex">
        <div className="news-slogen col-6 d-flex flex-column align-center justify-content-center text-center col-6 px-0">
          <h1>TODAY’S</h1>
          <h1>NEWS</h1>
          <h1 className="news-slogen-TC mt-3">
            “我們接軌藝術
          </h1>
          <h1 className="news-slogen-TC mt-2">
            藝術接軌國際"
          </h1>
        </div>
        <div className="news-cards col-6 px-0 row">
          <div className="news col-6 px-0">
            <img src={imgFlimward} alt="" />
          </div>
          <div className="news col-6 px-0">
            <img src={imgDance} alt="" />
          </div>
          <div className="news col-6 px-0">
            <img src={imgGoldpin} alt="" />
          </div>
          <div className="news col-6 px-0">
            <img src={imgHeart} alt="" />
          </div>
          <div className="news col-6 px-0">
            <img src={imgHk} alt="" />
          </div>
          <div className="news col-6 px-0">
            <img src={imglipstick} alt="" />
          </div>
        </div>
      </div>
      {/* artist */}
      <div className="artist-area">
        <div className="artist-slogan">
          <strong>
            Always doing that which I cannot do, in order
            that I may learn how to do it
          </strong>
          <h4 className="artist-title-tc">
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
      <div className="event-area">
        <div className="event-img">
          <img className="img1" src={eventimg1} alt="" />
          <img className="img2" src={eventimg2} alt="" />
          <img className="img3" src={eventimg3} alt="" />
          <img className="img4" src={eventimg4} alt="" />
          <img className="img5" src={eventimg5} alt="" />
          <img className="img6" src={eventimg6} alt="" />
        </div>
        <div className="event-slogan d-flex pl-3 mb-3">
          <div className="col-7">
            <h1 className=" text-break">
              Chasing art never stops
            </h1>
            <h4 className="event-title-tc">
              藝術 <span>活動展</span>
            </h4>
          </div>
          <div className="text-center col-5 pl-0">
            <img
              className="event-eye"
              src={eventicon}
              alt=""
            />
          </div>
        </div>
        <marquee
          scrollamount="10"
          className="event-marquee mt-5 px-3"
        >
          <h1 className="my-3">
            2021 台北市立美術館雙年展 正式開跑
            <CgArrowLongRightL /> 2021 台北市立美術館雙年展
            正式開跑 <CgArrowLongRightL /> 2021
            台北市立美術館雙年展 正式開跑
            <CgArrowLongRightL /> 2021 台北市立美術館雙年展
            正式開跑 <CgArrowLongRightL />
          </h1>
        </marquee>
        <marquee
          direction="right"
          scrollamount="10"
          className="event-marquee my-5 px-3"
        >
          <h1 className="my-3">
            放視大賞 強力募集中 <CgPacman />
            <BsThreeDots />
            放式大賞強 放視大賞 強力募集中
            <CgPacman />
            <BsThreeDots /> 放式大賞強 放視大賞 強力募集中{' '}
            <CgPacman />
            <BsThreeDots /> 放式大賞強
          </h1>
        </marquee>
      </div>
      {/* Shop */}
      {/* auction */}
    </>
  )
}

export default Index
