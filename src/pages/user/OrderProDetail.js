import React from 'react'
// import { Accordion } from 'react-bootstrap'
import logo from './img/logo-bk.svg'
import '../styles/OrderProDetail.scss'
import Accordion from 'react-bootstrap/Accordion'
import { Nav, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function OrderProDetail() {
  return (
    <>
      <header>
        <div className="u-container-fluid">
          <div className="u-logo-header">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </header>
      <div className="u-box">
        <div className="u-creditNews col">付款資訊</div>
        <div className="u-creditType d-flex">
          <div className="col-lg-2 col-sm-1">
            信用卡別：
          </div>
          <div className="col-lg-10 col-sm-11">1</div>
        </div>
        <div className="u-creditNum d-flex">
          <div className="col-lg-2 col-sm-1">
            信用卡號：
          </div>
          <div className="col-lg-10 col-sm-11">2</div>
        </div>
        <div className="u-creditDate d-flex">
          <div className="col-lg-2 col-sm-1">
            有效期限：
          </div>
          <div className="col-lg-10 col-sm-11">3</div>
        </div>
        <div className="u-creditNT d-flex">
          <div className="col-lg-2 col-sm-1">
            刷卡金額：
          </div>
          <div className="col-lg-10 col-sm-11">3</div>
        </div>
      </div>
      <div className="u-box">
        <div className="u-creditNews col">收件資訊</div>
        <div className="u-creditType d-flex">
          <div className="col-lg-2 col-sm-1">收件人：</div>
          <div className="col-lg-10 col-sm-11">1</div>
        </div>
        <div className="u-creditNum d-flex">
          <div className="col-lg-2 col-sm-1">
            收件地址：
          </div>
          <div className="col-lg-10 col-sm-11">2</div>
        </div>
        <div className="u-creditDate d-flex">
          <div className="col-lg-2 col-sm-1">
            聯絡電話：
          </div>
          <div className="col-lg-10 col-sm-11">3</div>
        </div>
        <div className="u-creditNT d-flex">
          <div className="col-lg-2 col-sm-1">
            寄送方式：
          </div>
          <div className="col-lg-10 col-sm-11">4</div>
        </div>
      </div>

      <div className="u-boxPro d-flex justify-content-between">
        {/* <div className="proBtn col-1 "></div> */}
        <div className="u-proImg"></div>
        <div className="u-proText col-2">
          <div className="u-proName ">1</div>
          <div className="u-proId">2</div>
        </div>
        <div className="u-proSize d-flex col-2">
          <div className="">尺寸：</div>
          <div className="">4</div>
        </div>
        <div className="u-proQty d-flex col-2">
          <div className="">數量：</div>
          <div className=""></div>
        </div>
        <div className="u-proTotalPrice d-flex col-2">
          <div className="">NT $</div>
          <div className="col"></div>
        </div>
      </div>
      <div>
        <Accordion>
          <Card className="u-Card">
            <Card.Header className="u-CardHeader">
              <Accordion.Toggle
                className="u-myEVAL"
                as={Button}
                variant="link"
                eventKey="0"
              >
                我的評價
              </Accordion.Toggle>
              <div className="u-goEVAL">
                <a href="#/">前往評價</a>
              </div>
            </Card.Header>

            <Accordion.Collapse
              className="u-collapse1"
              eventKey="0"
            >
              <Card.Body className="u-CardBody">
                <div className="u-card-body d-flex">
                  <div className="u-evaluation col-2 ml-0">
                    <div className="u-start">★★★★★</div>
                    <div className="u-evalDate">
                      2021-11-23
                    </div>
                  </div>
                  <div className="u-evalText col-6">
                    Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.
                  </div>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>

      <div className="u-back">
        <Nav.Link
          className="u-link"
          as={Link}
          to="/user-orderpro"
        >
          回訂單查詢
        </Nav.Link>
      </div>
    </>
  )
}

export default OrderProDetail
