import React from 'react'
import { Link } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap'
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
import { FiArrowUpRight } from 'react-icons/fi'
// WORK section
import LogoDecoV from './images/arddict-deco-v.svg'
import LogoDecoH from './images/artddict-deco-h.svg'
function event() {
  return (
    <>
      <div className="reduce-width">
        <div className="hero container-fluid">
          {/* 眼睛 LOGO SLOGAN */}
          <div className="row mt-3">
            <div
              className=" invisible
              e-logo-area"
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
          <div className="row d-flex justify-content-center mt-5">
            <div className=" col-8 hero-event-1 p-0">
              <img
                className="pic-square"
                src={Square}
                alt=""
              />

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
          </div>
          <div className="row d-flex justify-content-center mt-5 invisible">
            <div className=" col-8 hero-event-2 p-0">
              <img
                className="pic-square"
                src={Square}
                alt=""
              />

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
          </div>
          <div
            className="row d-flex justify-content-center mt-5
          invisible"
          >
            <div className=" col-8 hero-event-3 p-0">
              <img
                className="pic-square"
                src={Square}
                alt=""
              />

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
          </div>
        </div>

        <Container fluid className="exhi">
          <Row>
            <marquee behavior="" direction="">
              <h1
                className="eng-font-bold
              spin-sentence"
              >
                LET ARTDDICT BE IN YOUR LIFE
              </h1>
            </marquee>

            <h1
              className="eng-font-bold
              spin-sentence2 my-4"
            >
              Everyone will be famous for 15 minutes
            </h1>
          </Row>
        </Container>

        {/* <section>
          <Container fluid>
            <Row>
              <h1
                className="eng-font-bold
              spin-sentence my-4"
              >
                LET ARTDDICT BE IN YOUR LIFE
              </h1>
              <h1
                className="eng-font-bold
              spin-sentence2 my-4"
              >
                Everyone will be famous for 15 minutes
              </h1>
            </Row>
          </Container>
        </section>
        <section className="exhi">
          <Container fluid>
            <Row className="position-relative">
              <Col sm={12}>
                <h3 className="eng-font-regular e-select left-margin">
                  ARTDDICT{' '}
                  <span className="cn-font ml-2 e-select-cn">
                    精選展覽
                  </span>
                </h3>
              </Col>
              <div className="e-exhi-event">
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
              <div className="e-exhi-deco">
                <img
                  className="e-exhi-deco-pic"
                  src={ExhiDeco}
                  alt=""
                />
              </div>
              <div className="e-spin-eye position-absolute">
                <img src={Square} alt="" />
                <img
                  className="position-absolute"
                  src={ESpinBl}
                  alt=""
                />
                <img
                  className="position-absolute e-blue-eye"
                  src={EEyeBl}
                  alt=""
                />
              </div>
              <div className="position-absolute e-exhi-title">
                <arrow className="arrow-cap">
                  <h1 className="eng-font-bold">
                    EX­­
                    <br />
                    ­­HIBI
                    <br />
                    TION­­
                  </h1>
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
        </section>
        <section className="workshop"> */}
        {/* <Container fluid>
            <Row>
              <div className="e-logo-deco-h">
                <img
                  className="e-logo-deco"
                  src={LogoDecoH}
                  alt=""
                />
                <h3 className="cn-font e-work-content left-margin">
                  親身參與藝術
                </h3>
                <h3 className="cn-font e-work-content mt-4 left-margin">
                  體驗創作的自信
                </h3>
              </div>
              <div className="e-work-hero ml-auto">
                <div className="e-work-black">
                  <img
                    className="pic-square2"
                    src={Square}
                    alt=""
                  />
                </div>
              </div>
              <Col sm={12}>
                <h3 className="eng-font-regular e-work-select left-margin">
                  ARTDDICT{' '}
                  <span className="cn-font ml-2 e-select-cn">
                    精選工作坊
                  </span>
                </h3>
              </Col>
              <div className="e-work1 left-margin position-relative">
                <div className="e-work-line"></div>
                <div className="e-work-line2"></div>
                <div className="e-work-border position-absolute"></div>
                <div className="e-work-black"></div>
                <img
                  className="pic-square"
                  src={Square}
                  alt=""
                />
              </div>
            </Row>
          </Container>
        </section> */}
      </div>
    </>
  )
}

export default event
