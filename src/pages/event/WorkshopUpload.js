import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'

// import component
import Lightheader from './components/Lightheader'
import BreadCrumb from './components/EventBreadCrumb'



import './style/reset.css'
import './style/fontAndBtn.scss'
import './style/WorkshopUpload.scss'

function WorkshopUpload() {
  return (
    <>
      <div className="reduce-width">
        <Lightheader />
        <Container className="e-share " fluid>
          <Row className="py-4 es-bread both-padding">
            <BreadCrumb />
          </Row>
          <Row>
            <div></div>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default WorkshopUpload
