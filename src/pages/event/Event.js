import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap'
import './style/event.scss'
import './style/font.css'
import EventLogo from './images/logo.svg'
import Square from './images/square.gif'

function event() {
  return (
    <>
      <div className="reduce-width">
        <div className="container-fluid">
          <div className="row">
            <section className="hero">
              <img
                className="e-logo left-margin"
                src={EventLogo}
                alt=""
              />
              <div className="spin-circle invisible"></div>
              <div className="spin-eye invisible"></div>
              <h3 className="e-topic e-font-green left-margin mt-5">
                親身參與
              </h3>
              <h3 className="e-topic e-font-green left-margin">
                每一場關於藝術的盛宴
              </h3>
              <h3 className="e-topic e-font-green left-margin">
                陶冶於文藝的氛圍中，散發出如藝術品般的氣息
              </h3>
              <div className="hero-event-1">
                <img
                  className="col-3"
                  src="{Square}"
                  alt=""
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default event
