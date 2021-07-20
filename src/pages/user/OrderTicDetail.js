import React, { useState, useEffect } from 'react'
// import { Accordion } from 'react-bootstrap'
import './styles/OrderProDetail.scss'
import Accordion from 'react-bootstrap/Accordion'
import { Card, Button, Container } from 'react-bootstrap'
import {
  withRouter,
  Link,
  useHistory,
} from 'react-router-dom'
import Logoheader from './components/Logoheader'

function OrderTicDetail(props) {
  const id = props.match.params.id
  let history = useHistory()

  const [ticDatas, setTicDatas] = useState([])

  // 付款資訊
  const [orderPay, setOrdrPay] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [cardExpdate, setCardExpdate] = useState('')
  const [orderPrice, setOrderPrice] = useState('')

  // 收件人資訊
  const [name, setName] = useState('')
  const [userAddress, setUserAddress] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [orderShip, setOrderShip] = useState('')

  // 商品細節
  const [eventImg, setEventImg] = useState('')
  const [eventName, setEventName] = useState('')
  const [eventId, setEventId] = useState('')
  const [orderSpec, setOrderSpec] = useState('')
  const [orderQty, setOrderQty] = useState('')

  async function getUserOrderTicDetail() {
    const url = `http://localhost:6005/users/getOrderTicDetail/${id}`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    setOrdrPay(data[0].orderPay)
    setCardNumber(data[0].cardNumber)
    setCardExpdate(data[0].cardExpdate)
    setOrderPrice(data[0].orderPrice)
    setName(data[0].name)
    setUserAddress(data[0].userAddress)
    setUserPhone(data[0].userPhone)
    setOrderShip(data[0].orderShip)
    setEventImg(data[0].eventImg)
    setEventName(data[0].eventName)
    setEventId(data[0].eventId)
    setOrderSpec(data[0].orderSpec)
    setOrderQty(data[0].orderQty)
    setTicDatas(data)
  }

  useEffect(() => {
    getUserOrderTicDetail()
  }, [])

  const TicDetail = ticDatas.map((tic) => {
    return (
      <>
        <div className="u-boxPro d-flex justify-content-between">
          <div className="u-ticImg1">
            <img
              src={`http://localhost:6005/eventpic/event/${tic.eventImg}`}
              alt="活動圖"
            />
          </div>
          <div className="u-proText col-2">
            <div className="u-proName ">
              {tic.eventName}
            </div>
            <div className="u-proId">#{tic.eventId}</div>
          </div>
          <div className="u-proSize d-flex col-2">
            <div className="">規格：</div>
            <div className="">{tic.orderSpec}</div>
          </div>
          <div className="u-proQty d-flex col-2">
            <div className="">數量：</div>
            <div className="">{tic.orderQty}</div>
          </div>
          {/* <div className="u-proTotalPrice d-flex col-2">
              <div className="">NT $</div>
              <div className="col">{proPrice}</div>
            </div> */}
          <div className="u-goEVAL">
            <Link
              to={`/event/event-list/detail/${tic.id}`}
              style={{ textDecoration: 'none' }}
            >
              前往評價
            </Link>
          </div>
        </div>
      </>
    )
  })

  return (
    <>
      <div className="u-body">
        <Logoheader />
        <Container fluid>
          <div className="u-box">
            <div className="u-creditNews col">付款資訊</div>
            <div className="u-creditType">
              <div className="col">
                信用卡別：{orderPay}
              </div>
            </div>

            <div className="u-creditNum">
              <div className="col">
                信用卡號：{cardNumber}
              </div>
            </div>

            <div className="u-creditDate">
              <div className="col">
                有效期限： {cardExpdate}
              </div>
            </div>

            <div className="u-creditNT">
              <div className="col">
                刷卡金額： {orderPrice}
              </div>
            </div>
          </div>

          <div className="u-box">
            <div className="u-creditNews col">收件資訊</div>
            <div className="u-creditType">
              <div className="col">收件人：{name}</div>
            </div>
            <div className="u-creditNum">
              <div className="col">
                收件地址： {userAddress}
              </div>
            </div>
            <div className="u-creditDate">
              <div className="col">
                聯絡電話：{userPhone}
              </div>
            </div>
            <div className="u-creditNT d-flex">
              <div className="col">
                寄送方式：{orderShip}
              </div>
            </div>
          </div>

          {/* <div className="u-boxPro d-flex justify-content-between">
            <div className="u-proImg">
              <img
                src={`http://localhost:6005/eventpic/event/${eventImg}`}
                alt="活動圖"
              />
            </div>
            <div className="u-proText col-2">
              <div className="u-proName ">{eventName}</div>
              <div className="u-proId">{eventId}</div>
            </div>
            <div className="u-proSize d-flex col-2">
              <div className="">尺寸：</div>
              <div className="">{orderSpec}</div>
            </div>
            <div className="u-proQty d-flex col-2">
              <div className="">數量：</div>
              <div className="">{orderQty}</div>
            </div>
          </div>
          <div> */}

          {TicDetail}
          {/* <Accordion>
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
                      to="#/"
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
          </div>*/}

          {/* <div className="u-back">
            <Link
              style={{ textDecoration: 'none' }}
              className="u-link"
              // to="/user-ordertic"
              onClick={() => {
                props.history.push('/user-orderpro/2')
              }}
            >
              回訂單查詢
            </Link>
          </div> */}
          <div className="u-gobackBox">
            <div className="u-back">
              <Link
                className="u-goback"
                onClick={() => {
                  history.goBack()
                }}
                style={{ textDecoration: 'none' }}
              >
                回訂單查詢
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default withRouter(OrderTicDetail)
