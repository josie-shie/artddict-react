import React from 'react'
import { Container, Row } from 'react-bootstrap'

// Component
import EHeader from './components/Darkheader'
import BreadCrumb from './components/EventBreadCrumb'

// react icons
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowRoundDown,
  IoIosSearch,
  IoIosHeart,
} from 'react-icons/io'

// styles
import './style/reset.css'
import './style/fontAndBtn.scss'
import './style/eventDetail.scss'

function EventDetail() {
  return (
    <>
      <div className="reduce-width overflow-hidden">
        <EHeader />
        <Container className="ed-hero-zone both-padding" fluid>
          <Row>
            <BreadCrumb className="col-12" />
          </Row>
        </Container>
      </div>
    </>
  )
}

export default EventDetail
