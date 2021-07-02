import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import Marquee from './components/Marquee'
import MarqueeWork from './components/MarqueeWork'
import MarqueeLocation from './components/MarqueeLocation'
import './style/reset.css'
import './style/event.scss'
import './style/font.scss'
// HERO section
import EventLogo from './images/logo.svg'
import Square from './images/square.gif'
import ESpin from './images/arddict-circle-g.svg'
// EXHI section
import ESpinBl from './images/arddict-circle-bl.svg'
import EEyeBl from './images/arddict-eye-bl.svg'
import ExhiDeco from './images/exhi-deco.svg'
import ExhiDecoM from './images/m-exhi-deco.svg'
// WORK section
import LogoDecoH from './images/artddict-deco-h.svg'

// Location Section
import LocationLogo from './images/location-logo.svg'
// react icon
import { FiArrowUpRight } from 'react-icons/fi'
import { IoIosArrowBack } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
function event() {
  return (
    <>
      <div className="reduce-width overflow-hidden">
        <div className="hero container-fluid left-padding">
          {/* 眼睛 LOGO SLOGAN */}
          <div className="row">
            <div
              className="
              e-logo-area col-4 mt-5"
            >
              <img
                className="e-logo"
                src={EventLogo}
                alt=""
              />
            </div>

            <div className="m-spin-eye position-relative">
              <div className="spin-circle position-absolute "></div>
              <div className="spin-eye position-absolute"></div>
            </div>

            <div className="col-12">
              <h3 className="cn-font e-topic">親身參與</h3>
              <h3 className="cn-font e-topic">
                每一場關於藝術的盛宴
              </h3>
              <h3 className="cn-font e-topic">
                陶冶於文藝的氛圍中，散發出如藝術品般的氣息
              </h3>
            </div>
          </div>

          {/* Card */}
          <div className="row d-flex justify-content-left mt-5">
            <div className=" col-3 hero-event-1 p-0">
              <div className="e-cover-black">
                <img
                  className="pic-square"
                  src={Square}
                  alt=""
                />
              </div>

              <p
                className="cn-font e-hero-event-font position-absolute
                  e-left-top
                  "
              >
                系
              </p>
              <p
                className="cn-font e-hero-event-font
                position-absolute
                e-right-top
                "
              >
                列
              </p>
              <p
                className="cn-font e-hero-event-font
                position-absolute
                e-left-btm"
              >
                特
              </p>
              <p
                className="cn-font e-hero-event-font
                position-absolute
                e-right-btm"
              >
                展
              </p>
              <h2
                className="eng-font-regular position-absolute
                  e-hero-vol"
              >
                VOL.0<span className="bigger">1</span>
              </h2>
              <div className="e-line position-absolute"></div>
              <div className="e-line2 position-absolute"></div>
            </div>
            <div className=" col-3 hero-event-2 p-0">
              <div className="e-cover-black">
                <img
                  className="pic-square"
                  src={Square}
                  alt=""
                />
              </div>

              <p
                className="cn-font e-hero-event-font position-absolute
                  e-left-top
                  "
              >
                系
              </p>
              <p
                className="cn-font e-hero-event-font
                position-absolute
                e-right-top
                "
              >
                列
              </p>
              <p
                className="cn-font e-hero-event-font
                position-absolute
                e-left-btm"
              >
                特
              </p>
              <p
                className="cn-font e-hero-event-font
                position-absolute
                e-right-btm"
              >
                展
              </p>
              <h2
                className="eng-font-regular position-absolute
                  e-hero-vol"
              >
                VOL.0<span className="bigger">2</span>
              </h2>
              <div className="e-line position-absolute"></div>
              <div className="e-line2 position-absolute"></div>
            </div>
            <div className=" col-3 hero-event-3 p-0">
              <div className="e-cover-black">
                <img
                  className="pic-square"
                  src={Square}
                  alt=""
                />
              </div>

              <p
                className="cn-font e-hero-event-font position-absolute
                  e-left-top
                  "
              >
                系
              </p>
              <p
                className="cn-font e-hero-event-font
                position-absolute
                e-right-top
                "
              >
                列
              </p>
              <p
                className="cn-font e-hero-event-font
                position-absolute
                e-left-btm"
              >
                特
              </p>
              <p
                className="cn-font e-hero-event-font
                position-absolute
                e-right-btm"
              >
                展
              </p>
              <h2
                className="eng-font-regular position-absolute
                  e-hero-vol"
              >
                VOL.0<span className="bigger">3</span>
              </h2>
              <div className="e-line position-absolute"></div>
              <div className="e-line2 position-absolute"></div>
            </div>
          </div>
        </div>

        <Container fluid className="exhi">
          <Row>
            <Marquee />
          </Row>
          <Row className="left-padding my-5">
            <h3 className="eng-font-regular e-select">
              ARTDDICT
              <span className="cn-font ml-2 e-select-cn">
                精選展覽
              </span>
            </h3>
          </Row>
          <Row className="position-relative">
            <div className="e-exhi-event col-6 p-0">
              <div className="e-exhi-white">
                <button className="cn-font exhi-btn">
                  立即搶票
                  <FiArrowUpRight />
                </button>
                <img
                  className="pic-square"
                  src={Square}
                  alt=""
                />
              </div>
            </div>

            <div className="e-exhi-deco col-6">
              <img
                className="e-exhi-deco-pic"
                src={ExhiDeco}
                alt=""
              />
            </div>
            <div className="e-spin-eye-area position-absolute">
              <img
                className="e-spin-eye col-7"
                src={ESpinBl}
                alt=""
              />
            </div>

            <div className="e-exhi-title ml-4 position-absolute">
              <arrow className="arrow-cap">
                <h1 className="eng-font-bold">
                  EX­­
                  <br />
                  ­­HIBI
                  <br />
                  TION­­
                </h1>
                <p className="cn-font e-exhi-title-cn mt-2">
                  藝文
                  <span className="e-exhi-title-dash">
                    活動展
                  </span>
                </p>
                <img
                  className="exhi-m-deco position-absolute"
                  src={ExhiDecoM}
                  alt=""
                />
              </arrow>
            </div>
            <h2
              className="eng-font-bold e-exhi-name
                my-4
              "
            >
              ARTDDICT
            </h2>
          </Row>
        </Container>

        <Container fluid className="workshop">
          <Row>
            <div className="e-logo-deco-h col-4 p-0">
              <img
                className="e-logo-deco"
                src={LogoDecoH}
                alt=""
              />
              <h3 className="cn-font e-work-content mt-5">
                親身參與藝術
              </h3>
              <h3 className="cn-font e-work-content mt-4">
                體驗創作的自信
              </h3>
            </div>
            <div className="e-work-hero col-8 p-0">
              <div className="e-work-black">
                <img
                  className="pic-square2"
                  src={Square}
                  alt=""
                />
              </div>
            </div>
          </Row>
          <Row className="left-padding my-5">
            <h3 className="eng-font-regular e-work-select">
              ARTDDICT
              <span className="cn-font ml-2 e-work-select-cn">
                精選工作坊
              </span>
            </h3>
          </Row>
          <Row className="justify-content-center">
            <div className="e-work1 position-relative col-3 p-0 mx-5">
              <p className="e-work-name cn-font position-absolute">
                解&nbsp;碼&emsp;&emsp;雲&nbsp;端
              </p>
              <div className="e-work-line position-absolute"></div>
              <div className="e-work-line2 position-absolute"></div>
              <div className="e-work-border position-absolute">
                <span className="e-work-box"></span>
                <span className="e-work-box2"></span>
              </div>
              <div className="e-work-black"></div>
              <img
                className="pic-square"
                src={Square}
                alt=""
              />
            </div>

            <div className="e-work2 position-relative col-3 p-0 mx-5">
              <p className="e-work-name cn-font position-absolute">
                解&nbsp;碼&emsp;&emsp;雲&nbsp;端
              </p>

              <div className="e-work-line position-absolute"></div>
              <div className="e-work-line2 position-absolute"></div>
              <div className="e-work-border position-absolute">
                <span className="e-work-box"></span>
                <span className="e-work-box2"></span>
              </div>
              <div className="e-work-black"></div>
              <img
                className="pic-square"
                src={Square}
                alt=""
              />
            </div>

            <div className="e-work3 position-relative col-3 p-0 mx-5">
              <p className="e-work-name cn-font position-absolute">
                解&nbsp;碼&emsp;&emsp;雲&nbsp;端
              </p>

              <div className="e-work-line position-absolute"></div>
              <div className="e-work-line2 position-absolute"></div>
              <div className="e-work-border position-absolute">
                <span className="e-work-box"></span>
                <span className="e-work-box2"></span>
              </div>
              <div className="e-work-black"></div>
              <img
                className="pic-square"
                src={Square}
                alt=""
              />
            </div>
          </Row>
          <Row className="left-padding position-relative my-5">
            <div className="e-work-title ml-4">
              <arrow className="arrow-work-cap">
                <p className="cn-font e-work-title-cn mt-2">
                  手做
                  <span className="e-work-title-dash">
                    工作坊
                  </span>
                </p>
                <h1 className="eng-font-bold">
                  WORK
                  <br />
                  SHOP
                </h1>

                <img
                  className="exhi-m-deco position-absolute"
                  src={ExhiDecoM}
                  alt=""
                />
              </arrow>
            </div>
          </Row>
          <Row>
            <MarqueeWork />
          </Row>
        </Container>

        <Container fluid className="event-location pt-5">
          <Row>
            <div className=" e-location-spin my-5 mb-5">
              <MarqueeLocation />
            </div>
          </Row>
          <Row className="e-location-title">
            <div className="cn-font mx-auto mb-5">
              <IoIosArrowBack />
              <IoIosArrowBack />
              <IoIosArrowBack />
              <IoIosArrowBack />
              <IoIosArrowBack />
              從城市開始接觸藝術
              <IoIosArrowForward />
              <IoIosArrowForward />
              <IoIosArrowForward />
              <IoIosArrowForward />
              <IoIosArrowForward />
            </div>
          </Row>
          <Row>
            <div className="col-8">
              
            </div>
            <div className=" col-4">
              <img src={LocationLogo} alt="" />
            </div>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default event
