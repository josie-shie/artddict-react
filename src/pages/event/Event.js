import React from 'react'
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap'
import './style/event.scss'
import EventLogo from './images/logo.svg'

function event() {
  return (
    <>
      <div className="reduce-width">
        <div className="container-fluid">
          <div className="row">
            <img src="{EventLogo}" alt="" />
            <section className="hero">
              <div className="spin-circle invisible"></div>
              <div className="spin-eye invisible"></div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default event
