import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import './styles/TicketDetail.scss'
import { Modal, Button } from 'react-bootstrap'
import QRcode from './img/QRcode.png'

function TicketDetail(props) {
  const id = props.match.params.id
  const [eventName, setEventName] = useState('')
  const [orderSpec, setOrderSpec] = useState('')

  async function getUserTicketDetail() {
    const url = `http://localhost:6005/users/getTicketDetail/${id}`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })
    console.log('url = ', url)
    console.log('id = ', id)
    const response = await fetch(request)
    const data = await response.json()
    console.log('data = ', data)
    setEventName(data.eventName)
    setOrderSpec(data.orderSpec)
  }

  useEffect(() => {
    getUserTicketDetail()
  }, [])

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
          <div className="u-modal-body">活動名稱：</div>
          <div>{eventName}</div>
        </div>
        <div className="u-tic2 d-flex">
          <div className="col-4">
            <div className="ml-5">{orderSpec}</div>
          </div>
          <div className="col">
            <div className="u-QRcode">
              <img src={QRcode} alt="QRcode" />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button
          onClick={props.onHide}
          variant="outline-dark"
        >
          Close
        </Button> */}
      </Modal.Footer>
    </Modal>
  )
}

export default withRouter(TicketDetail)
