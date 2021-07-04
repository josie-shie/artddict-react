import React from 'react'
import './styles/TicketDetail.scss'
import { Modal, Button } from 'react-bootstrap'
import QRcode from './img/QRcode.png'

function TicketDetail(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          票卷細節
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="u-tic1 d-flex">
          <div>活動名稱：</div>
          <div>12345</div>
        </div>

        <div className="u-tic2 d-flex">
          <div className="col-8">
            <div className="d-flex ml-5">
              <div>場次時間：</div>
              <div>12344</div>
            </div>
            <div className="ml-5">(票種)</div>
            <div className="d-flex">
              <div className="ml-5">座位：</div>
              <div>21213e</div>
            </div>
          </div>

          <div className="col-4">
            <div className="u-QRcode">
              <img src={QRcode} alt="QRcode" />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={props.onHide}
          variant="outline-dark"
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default TicketDetail
