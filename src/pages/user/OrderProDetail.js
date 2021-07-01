import React from 'react'
// import { Accordion } from 'react-bootstrap'
import logo from './img/logo-bk.svg'
import '../styles/OrderProDetail.scss'
import Accordion from 'react-bootstrap/Accordion'
import { Nav, Card, Button, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function OrderProDetail() {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="logo-header">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </header>
      <div className="box">
        <div className="creditNews col">付款資訊</div>
        <div className="creditType d-flex">
          <div className="col-lg-2 col-sm-1">信用卡別：</div>
          <div className="col-lg-10 col-sm-11">1</div>
        </div>
        <div className="creditNum d-flex">
          <div className="col-lg-2 col-sm-1">信用卡號：</div>
          <div className="col-lg-10 col-sm-11">2</div>
        </div>
        <div className="creditDate d-flex">
          <div className="col-lg-2 col-sm-1">有效期限：</div>
          <div className="col-lg-10 col-sm-11">3</div>
        </div>
        <div className="creditNT d-flex">
          <div className="col-lg-2 col-sm-1">刷卡金額：</div>
          <div className="col-lg-10 col-sm-11">3</div>
        </div>
      </div>
      <div className="box">
        <div className="creditNews col">收件資訊</div>
        <div className="creditType d-flex">
          <div className="col-lg-2 col-sm-1">收件人：</div>
          <div className="col-lg-10 col-sm-11">1</div>
        </div>
        <div className="creditNum d-flex">
          <div className="col-lg-2 col-sm-1">收件地址：</div>
          <div className="col-lg-10 col-sm-11">2</div>
        </div>
        <div className="creditDate d-flex">
          <div className="col-lg-2 col-sm-1">聯絡電話：</div>
          <div className="col-lg-10 col-sm-11">3</div>
        </div>
        <div className="creditNT d-flex">
          <div className="col-lg-2 col-sm-1">寄送方式：</div>
          <div className="col-lg-10 col-sm-11">4</div>
        </div>
      </div>

      <div className="boxPro d-flex justify-content-between">
        {/* <div className="proBtn col-1 "></div> */}
        <div className="proImg"></div>
        <div className="proText col-2">
          <div className="proName ">1</div>
          <div className="proId">2</div>
        </div>
        <div className="proSize d-flex col-2">
          <div className="">尺寸：</div>
          <div className="">4</div>
        </div>
        <div className="proQty d-flex col-2">
          <div className="">數量：</div>
          <div className=""></div>
        </div>
        <div className="proTotalPrice d-flex col-2">
          <div className="">NT $</div>
          <div className="col"></div>
        </div>
      </div>
      <div>
        <Accordion>
          <Card className="Card">
            <Card.Header className="CardHeader">
              <Accordion.Toggle
                className="myEVAL"
                as={Button}
                variant="link"
                eventKey="0"
              >
                我的評價
              </Accordion.Toggle>
              <div className="goEVAL">
                <a href="#/">前往評價</a>
              </div>
            </Card.Header>

            <Accordion.Collapse className="collapse1" eventKey="0">
              <Card.Body className="CardBody">
                <div className="card-body d-flex">
                  <div className="evaluation col-2 ml-0">
                    <div className="start">★★★★★</div>
                    <div className="evalDate">2021-11-23</div>
                  </div>
                  <div className="evalText col-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>

      <div className="u-back">
        <Nav.Link className="u-link" as={Link} to="/user-orderpro">
          回訂單查詢
        </Nav.Link>
      </div>
    </>
  )
}

export default OrderProDetail
