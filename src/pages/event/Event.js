import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import Marquee from './components/Marquee'
import MarqueeWork from './components/MarqueeWork'
import MarqueeLocation from './components/MarqueeLocation'
// import Tetris from './components/tetris/Tetris'
import './style/reset.css'
import './style/fontAndBtn.scss'
import './style/event.scss'
// HERO section
import EventLogo from './images/logo.svg'
import Square from './images/square.gif'
import ESpin from './images/arddict-circle-g.svg'
// EXHI section
import ESpinBl from './images/arddict-circle-bl.svg'
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
              <div className="position-relative overflow-hidden">
                <h3 className="cn-font e-topic e-green-ani position-absolute e-move1 e-delay1">
                  &emsp;&emsp;&emsp;&emsp;
                </h3>
                <h3 className="e-word-ani cn-font e-topic e-delay1">
                  親身參與
                </h3>
              </div>
              <div className="position-relative overflow-hidden">
                <h3 className="e-green-ani cn-font e-topic position-absolute e-delay2 e-move2">
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                </h3>
                <h3 className="e-word-ani cn-font e-topic e-delay2 ">
                  每一場關於藝術的盛宴
                </h3>
              </div>
              <div className="position-relative overflow-hidden">
                <h3 className="e-green-ani cn-font e-topic position-absolute e-delay3 e-move3">
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                </h3>
                <h3 className="e-word-ani cn-font e-topic e-delay3">
                  陶冶於文藝的氛圍中，散發出如藝術品般的氣息
                </h3>
              </div>
            </div>
          </div>

          {/* Card */}
          <Link
            to="/event/event-list/"
            className="row d-flex justify-content-left mt-5"
          >
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
              <button className="cn-font e-hero-get e-btn-m position-absolute">
                立即搶票
              </button>
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
              <button className="cn-font e-hero-get e-btn-m position-absolute">
                立即搶票
              </button>
              <img
                className="position-absolute spin-img"
                src={ESpin}
                alt=""
              />
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
              <button className="cn-font e-hero-get e-btn-m position-absolute">
                立即搶票
              </button>
              <div className="e-line position-absolute"></div>
              <div className="e-line2 position-absolute"></div>
            </div>
          </Link>
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
                <Link to="/event/event-list">
                  <button className="cn-font exhi-btn">
                    立即搶票
                    <FiArrowUpRight />
                  </button>
                </Link>
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
                className="e-spin-eye spin-img col-7"
                src={ESpinBl}
                alt=""
              />
            </div>

            <Link
              to="/event/event-list"
              style={{ textDecoration: 'none' }}
            >
              <div className="e-exhi-title ml-4 position-absolute">
                <div className="arrow-cap">
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
                </div>
              </div>
            </Link>
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
            <Link
              to="/event/event-list/"
              className="e-work1 position-relative  col-4 col-lg-3  p-0 mx-lg-3"
            >
              <p className="e-work-name cn-font position-absolute">
                解&nbsp;碼&emsp;&emsp;雲&nbsp;端
              </p>
              <div className="e-work-line position-absolute"></div>
              <div className="e-work-line2 position-absolute"></div>
              <div className="e-work-border position-absolute"></div>
              <div className="e-work-black"></div>
              <img
                className="pic-square"
                src={Square}
                alt=""
              />
            </Link>

            <Link
              to="/event/event-list/"
              className="e-work2 position-relativecol-4 col-4 col-lg-3  p-0 mx-lg-3"
            >
              <p className="e-work-name cn-font position-absolute">
                文&nbsp;藝&emsp;&emsp;復&nbsp;興
              </p>

              <div className="e-work-line position-absolute"></div>
              <div className="e-work-line2 position-absolute"></div>
              <div className="e-work-border position-absolute"></div>
              <div className="e-work-black"></div>
              <img
                className="pic-square"
                src={Square}
                alt=""
              />
            </Link>

            <Link
              to="/event/event-list/"
              className="e-work3 position-relativecol-4 col-4 col-lg-3  p-0 mx-lg-3"
            >
              <p className="e-work-name cn-font position-absolute">
                藝&nbsp;術&emsp;&emsp;方&nbsp;舟
              </p>

              <div className="e-work-line position-absolute"></div>
              <div className="e-work-line2 position-absolute"></div>
              <div className="e-work-border position-absolute"></div>
              <div className="e-work-black"></div>
              <img
                className="pic-square"
                src={Square}
                alt=""
              />
            </Link>
          </Row>
          <Row className="left-padding position-relative my-5">
            <Link
              to="/event/event-list/"
              style={{ textDecoration: 'none' }}
            >
              <div className="e-work-title ml-4">
                <div className="arrow-work-cap">
                  <p className="cn-font e-work-title-cn mt-2">
                    手作
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
                </div>
              </div>
            </Link>
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
              從城市開始接觸藝術
              <IoIosArrowForward />
              <IoIosArrowForward />
              <IoIosArrowForward />
            </div>
          </Row>
          <Row className="p-0 e-locat-card">
            <div className="col-9 p-0 ">
              {/* 第一行城市 */}
              <div className="col-12 p-0 e-city-area d-flex border-top-0 justify-content-between">
                <Link
                  to="/event/event-list?city=彰化縣&order=latest"
                  className="el-c col-4 col-lg-3 p-0 ml-lg-4"
                >
                  <div className="e-location-card position-relative">
                    <button className="cn-font e-loca-btn position-absolute">
                      立即搶票
                      <FiArrowUpRight />
                    </button>
                    <div>
                      <img
                        className="pic-square"
                        src={Square}
                        alt=""
                      />
                    </div>
                  </div>
                  <button className="e-btn-l e-locaton-btn cn-font">
                    彰化
                  </button>
                </Link>
                <Link
                  to="/event/event-list?city=臺北市"
                  className="el-c col-4 col-lg-3 p-0 ml-lg-4"
                >
                  <div className="e-location-card2 position-relative">
                    <button className="cn-font e-loca-btn position-absolute">
                      立即搶票
                      <FiArrowUpRight />
                    </button>
                    <div className="">
                      <img
                        className="pic-square"
                        src={Square}
                        alt=""
                      />
                    </div>
                  </div>
                  <button className="e-btn-l e-locaton-btn cn-font">
                    台北
                  </button>
                </Link>
                <Link
                  to="/event/event-list"
                  className="el-c col-4 col-lg-3 p-0 ml-lg-4 mr-lg-5"
                >
                  <div className="e-location-card3 position-relative">
                    <button className="cn-font e-loca-btn position-absolute">
                      立即搶票
                      <FiArrowUpRight />
                    </button>
                    <div className="">
                      <img
                        className="pic-square"
                        src={Square}
                        alt=""
                      />
                    </div>
                  </div>
                  <button className="e-btn-l e-locaton-btn cn-font">
                    台中
                  </button>
                </Link>
              </div>
              {/* 第二行城市 */}
              <div className="col-12 p-0 e-city-area d-flex justify-content-around">
                <Link
                  to="/event/event-list"
                  className="el-c col-4 col-lg-3 p-0 ml-lg-4"
                >
                  <div className="e-location-card4 position-relative">
                    <button className="cn-font e-loca-btn position-absolute">
                      立即搶票
                      <FiArrowUpRight />
                    </button>
                    <div className="">
                      <img
                        className="pic-square"
                        src={Square}
                        alt=""
                      />
                    </div>
                  </div>
                  <button className="e-btn-l e-locaton-btn cn-font">
                    新竹
                  </button>
                </Link>
                <Link
                  to="/event/event-list"
                  className="el-c col-4 col-lg-3 p-0 ml-lg-4"
                >
                  <div className="e-location-card5 position-relative">
                    <button className="cn-font e-loca-btn position-absolute">
                      立即搶票
                      <FiArrowUpRight />
                    </button>
                    <div className="">
                      <img
                        className="pic-square"
                        src={Square}
                        alt=""
                      />
                    </div>
                  </div>
                  <button className="e-btn-l e-locaton-btn cn-font">
                    台南
                  </button>
                </Link>
                <Link
                  to="/event/event-list"
                  className="el-c col-4 col-lg-3 p-0 ml-lg-4"
                >
                  <div className="e-location-card6 position-relative">
                    <button className="cn-font e-loca-btn position-absolute">
                      立即搶票
                      <FiArrowUpRight />
                    </button>
                    <div className="">
                      <img
                        className="pic-square"
                        src={Square}
                        alt=""
                      />
                    </div>
                  </div>
                  <button className="e-btn-l e-locaton-btn cn-font">
                    高雄
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-3 e-local-logo p-0 pt-auto">
              <div
                className="col-12  d-flex justify-content-center my-5
              "
              >
                <div className="col-6 col-lg-4 my-5">
                  <img
                    className="e-local-log-pic"
                    src={LocationLogo}
                    alt=""
                  />
                </div>
              </div>
              <div className="col-12 p-0 d-none d-lg-block">
                <Link to="/event/event-list">
                  <button className="e-location-more-btn eng-font-bold">
                    MORE+
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-12 p-0 d-lg-none">
              <Link to="/event/event-list">
                <button className="e-location-more-btn eng-font-bold">
                  MORE+
                </button>
              </Link>
            </div>
          </Row>
          {/* <Row className="tetris-area">
            <Tetris />
          </Row> */}
        </Container>
      </div>
    </>
  )
}

export default withRouter(event)
