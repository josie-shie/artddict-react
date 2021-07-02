import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'

// Header
import EHeader from './components/Darkheader'

// Pictures

// styles
import './style/reset.css'
import './style/fontAndBtn.scss'
import './style/eventList.scss'

function EventList() {
  return (
    <>
      <div className="reduce-width overflow-hidden">
        <EHeader />

        {/* HERO Section 輪播牆 */}
        <Container fluid className="ed-hero">
          <Row>
            <h1 className="col-12 p-0 eng-font-regular e-detail-title">
              EXHIBITION AND WORK SHOP
            </h1>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default EventList
