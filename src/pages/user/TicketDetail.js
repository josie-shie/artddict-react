import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import './styles/TicketDetail.scss'
import { Modal } from 'react-bootstrap'
import QRcode from './img/QRcode.png'

function TicketDetail(props) {
  const id = props.eventId
  const [eventName, setEventName] = useState('')
  const [orderSpec, setOrderSpec] = useState('')

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      id="userModal"
    >
      <Modal.Header closeButton>
        <Modal.Title>票卷細節</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="u-tic1 d-flex">
          <div className="u-modal-body">
            活動名稱：{props.eventName}
          </div>
        </div>
        <div className="u-tic2 d-flex">
          <div className="u-modal-body">
            票卷種類：{props.orderSpec}
          </div>
        </div>
        <div className="u-QRcode">
          <img src={QRcode} alt="QRcode" />
        </div>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  )
}

export default withRouter(TicketDetail)
