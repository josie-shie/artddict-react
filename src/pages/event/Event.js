import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap'
import './style/event.scss'
import './style/font.scss'
// import './style/reset.css'
import EventLogo from './images/logo.svg'
import Square from './images/square.gif'
import ESpin from './images/arddict-circle-g.svg'

function event() {
  return (
    <>
      <div className="reduce-width">
        <section className="hero">
          <Container fluid>
            <Row>
              <Col sm={6} className="left-margin">
                <img
                  className="e-logo"
                  src={EventLogo}
                  alt=""
                />
              </Col>
              <div className="spin-circle invisible"></div>
              <div className="spin-eye invisible"></div>
              <Col xs={12} className="left-margin">
                <h3 className="cn-font e-topic mt-5 ">
                  親身參與
                </h3>
                <h3 className="cn-font e-topic mt-3">
                  每一場關於藝術的盛宴
                </h3>
                <h3 className="cn-font e-topic mt-3">
                  陶冶於文藝的氛圍中，散發出如藝術品般的氣息
                </h3>
              </Col>
            </Row>
            <Row className="e-pictures-margin">
              <Col
                sm={3}
                className="hero-event-1 left-margin position-relative
                p-0"
              >
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

                <img
                  className="pic-square1"
                  src={Square}
                  alt=""
                />
              </Col>
              <Col
                sm={3}
                className="hero-event-2 position-relative
                p-0"
              >
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

                <img
                  className="pic-square1"
                  src={Square}
                  alt=""
                />
              </Col>
              <Col
                sm={3}
                className="hero-event-3 position-relative
                p-0"
              >
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
                <h5
                  className="eng-font-regular position-absolute
                  e-hero-vol"
                >
                  VOL.0<span className="bigger">3</span>
                </h5>
                <img
                  className="e-spin-icon position-absolute"
                  src={ESpin}
                  alt=""
                />
                <img
                  className="pic-square1"
                  src={Square}
                  alt=""
                />
              </Col>
            </Row>
          </Container>
        </section>
        <section>
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
      </div>
    </>
  )
}

export default event
