import React, { useState, useEffect } from 'react'
// import { Accordion } from 'react-bootstrap'
import './styles/OrderProDetail.scss'
import Accordion from 'react-bootstrap/Accordion'
import { Card, Button, Container } from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom'
import Logoheader from './components/Logoheader'

function OrderProDetail(props) {
  const id = props.match.params.id

  // 付款資訊
  const [orderPay, setOrdrPay] = useState('')
  const [cardNum, setCardNum] = useState('')
  const [cardExpdate, setCardExpdate] = useState('')
  const [orderPrice, setOrderPrice] = useState('')

  // 收件人資訊
  const [username, setUsername] = useState('')
  const [userAddress, setUserAddress] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [orderShip, setOrderShip] = useState('')

  // 商品細節
  const [proImg, setProImg] = useState('')
  const [proName, setProName] = useState('')
  const [proId, setProId] = useState('')
  const [orderSpec, setOrderSpec] = useState('')
  const [orderQty, setOrderQty] = useState('')
  const [proPrice, setProPrice] = useState('')

  async function getUserOrderDetail() {
    const url = `http://localhost:6005/users/getOrderdetail/${id}`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    setOrdrPay(data.orderPay)
    setCardNum(data.cardNum)
    setCardExpdate(data.cardExpdate)
    setOrderPrice(data.orderPrice)
    setUsername(data.username)
    setUserAddress(data.userAddress)
    setUserPhone(data.userPhone)
    setOrderShip(data.orderShip)
    setProImg(data.proImg)
    setProName(data.proName)
    setProId(data.proId)
    setOrderSpec(data.orderSpec)
    setOrderQty(data.orderQty)
    setProPrice(data.proPrice)
  }

  useEffect(() => {
    getUserOrderDetail()
  }, [])

  // const OrderProDetail =

  return (
    <>
      <div className="u-body">
        <Logoheader />
        <Container fluid>
          <div className="u-box">
            <div className="u-creditNews col">付款資訊</div>
            <div className="u-creditType d-flex">
              <div className="col-lg-2 col-sm-1">
                信用卡別：
              </div>
              <div className="col-lg-10 col-sm-11">
                {orderPay}
              </div>
            </div>
            <div className="u-creditNum d-flex">
              <div className="col-lg-2 col-sm-1">
                信用卡號：
              </div>
              <div className="col-lg-10 col-sm-11">
                {cardNum}
              </div>
            </div>
            <div className="u-creditDate d-flex">
              <div className="col-lg-2 col-sm-1">
                有效期限：
              </div>
              <div className="col-lg-10 col-sm-11">
                {cardExpdate}
              </div>
            </div>
            <div className="u-creditNT d-flex">
              <div className="col-lg-2 col-sm-1">
                刷卡金額：
              </div>
              <div className="col-lg-10 col-sm-11">
                {orderPrice}
              </div>
            </div>
          </div>
          <div className="u-box">
            <div className="u-creditNews col">收件資訊</div>
            <div className="u-creditType d-flex">
              <div className="col-lg-2 col-sm-1">
                收件人：
              </div>
              <div className="col-lg-10 col-sm-11">
                {username}
              </div>
            </div>
            <div className="u-creditNum d-flex">
              <div className="col-lg-2 col-sm-1">
                收件地址：
              </div>
              <div className="col-lg-10 col-sm-11">
                {userAddress}
              </div>
            </div>
            <div className="u-creditDate d-flex">
              <div className="col-lg-2 col-sm-1">
                聯絡電話：
              </div>
              <div className="col-lg-10 col-sm-11">
                {userPhone}
              </div>
            </div>
            <div className="u-creditNT d-flex">
              <div className="col-lg-2 col-sm-1">
                寄送方式：
              </div>
              <div className="col-lg-10 col-sm-11">
                {orderShip}
              </div>
            </div>
          </div>

          <div className="u-boxPro d-flex justify-content-between">
            {/* <div className="proBtn col-1 "></div> */}
            <div className="u-proImg"></div>
            <div className="u-proText col-2">
              <div className="u-proName ">{proName}</div>
              <div className="u-proId">{proId}</div>
            </div>
            <div className="u-proSize d-flex col-2">
              <div className="">尺寸：</div>
              <div className="">{orderSpec}</div>
            </div>
            <div className="u-proQty d-flex col-2">
              <div className="">數量：</div>
              <div className="">{orderQty}</div>
            </div>
            <div className="u-proTotalPrice d-flex col-2">
              <div className="">NT $</div>
              <div className="col">{proPrice}</div>
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
                    style={{ textDecoration: 'none' }}
                  >
                    我的評價
                  </Accordion.Toggle>
                  <div className="u-goEVAL">
                    <Link
                      to="/user-add"
                      style={{ textDecoration: 'none' }}
                    >
                      前往評價
                    </Link>
                  </div>
                </Card.Header>

                <Accordion.Collapse
                  className="u-collapse"
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
                        Lorem ipsum dolor sit amet
                        consectetur adipisicing elit.
                      </div>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>

          <div className="u-back">
            <Link
              className="u-link"
              to="/user-orderpro"
              style={{ textDecoration: 'none' }}
            >
              回訂單查詢
            </Link>
          </div>
        </Container>
      </div>
    </>
  )
}

export default withRouter(OrderProDetail)
