import { React, useState, useEffect, useRef } from 'react'
import { Link, withRouter } from 'react-router-dom'
import $ from 'jquery'
import { Container, Row, Collapse } from 'react-bootstrap'
import Cookies from 'universal-cookie'
import swal from 'sweetalert'

// Component
import EHeader from './components/Darkheader'
import BreadCrumb from './components/EventBreadCrumb'

import EventMore from './components/EventMore'

// react icons
import {
  IoIosArrowForward,
  IoIosHeart,
  IoMdAdd,
  IoMdRemove,
} from 'react-icons/io'

// Pictures
import TopicPic from './images/event/007.jpg'

// styles
import './style/reset.css'
import './style/fontAndBtn.scss'
import './style/eventDetail.scss'



// open weather
const myKey = "24eb2177b3c656250ca2c17ba3389113"

function EventDetail(props) {
  const id = props.match.params.id

  //開合功能state
  const [open, setOpen] = useState(true)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)

  const [eventName, setEventName] = useState('')
  const [eventId, setEventId] = useState('')
  const [eventDateStart, setEventDateStart] = useState('')
  const [eventDateEnd, setEventDateEnd] = useState('')
  const [eventDesc, setEventDesc] = useState('')
  const [eventPrice, setEventPrice] = useState('')
  const [eventImg, setEventImg] = useState('')
  const [eventCity, setEventCity] = useState('')
  const [userId, setUserId] = useState(1)
  const [eventClass, setEventClass] = useState('C')
  const [cityId, setCityid] = useState('Taipei')
  const [temp, setTemp] = useState()
  const [tempIcon, setTempIcon] = useState('')
  const [weather, setWeather] = useState('')
  // 加入購物車
  const [isShared, setIsShared] = useState(true)

  // 確認是否已儲存
  const [isFav, setIsFav] = useState(false)

  const [sqleventid, setSqlEventId] = useState('')

  // 票價數量
  const [ticketNum, setTicketNum] = useState(1)


  // 購物車
  const [cartItems, setCartItems] = useState([])
  const cookies = new Cookies()

  // 票種useState
  const [tickettype, setTicketType] = useState('成人票')

  async function getEventIdServer() {
    const url = `http://localhost:6005/event/event-list/${id}`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    setEventName(data.eventName)
    setEventId(data.eventId)
    setEventDateStart(data.eventDateStart)
    setEventDateEnd(data.eventDateEnd)
    setEventDesc(data.eventDescription)
    setEventPrice(data.eventPrice)
    setEventClass(data.eventClass)
    setEventImg(data.eventImg)
    setEventCity(data.cityName)
    setIsShared(data.shareId)
    setCityid(data.cityFullName)
    // 加入購物車
    setSqlEventId(data.eventId)
  }

  async function addEventFavSever() {
   
    const newData = { eventId, userId }

    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/event/eventFav'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    
  }

  async function deleteUserFav(eventId) {
    const url = `http://localhost:6005/users/userFavDelete/${eventId}`
    const request = new Request(url, {
      method: 'DELETE',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
  }

  async function getWeather() {
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityId}&appid=${myKey}`
    let weather = await fetch(weatherUrl)
    let weatherData = await weather.json()
    let tempNum = (weatherData.main.temp - 273.15).toFixed(
      1
    )
    setTemp(tempNum)
    setWeather(weatherData.weather[0].main)
    setTempIcon(weatherData.weather[0].icon)
  }


  async function getEventFavServer() {
    const url = `http://localhost:6005/event/isEventFav/${userId}`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    const favArray = data.map((fav)=>{
      return fav.eventId
    })


    // 確認是否有該eventId
    if (!(favArray.indexOf(eventId) == -1)){
      console.log(favArray.indexOf(eventId))
      console.log(eventId)
      setIsFav(true)
    }else{
      console.log(
        'No match' + favArray.indexOf(eventId)
      )
      console.log(eventId)
      setIsFav(false)
    }

    
  }

  console.log(temp, weather, tempIcon)

  let shareBtn = ''
  if (isShared) {
    shareBtn = 'block'
  } else {
    shareBtn = 'none'
  }

  // 加入購物車的 pop up
  const callSwal = () => {
    swal({
      text: '新增成功',
      icon: 'success',
      button: false,
      timer: 1000,
    })
  }

  useEffect(() => {
    getEventIdServer()
    getWeather()
    getEventFavServer()
   
  }, [])

  useEffect(() => {
    getWeather()
    getEventFavServer()
  }, [cityId])

  useEffect(() => {
    getEventFavServer()
  }, [eventId])

  useEffect(() => {
    getEventIdServer()
  }, [id])

  $('.e-ticket-type').click(function () {
    $(this)
      .css('background', 'black')
      .css('color', 'white')
      .siblings()
      .css('background', 'transparent')
      .css('color', 'black')
  })

  $('.ed-like-icon2').click(function () {
    $(this)
      .css('color', 'white')
  })

  $('.ed-like-icon').click(function () {
    $(this).css('color', '#81FC4D')
  })

  useEffect(() => {
    if (ticketNum < 1) {
      setTicketNum(1)
    }
    if (ticketNum > 50) {
      setTicketNum(50)
    }
  }, [ticketNum])

  //didMount就load FB套件
  useEffect(() => {
    if (window.FB) {
      console.log('window.FB', window.FB)
      window.FB.XFBML.parse()
    }
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '{4372278766148991}',
        cookie: true,
        xfbml: true,
        version: '{api-version}',
      })
      window.FB.AppEvents.logPageView()
    }
    ;(function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) {
        return
      }
      js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
  }, [])

  /**
   * 更新 event Cookie
   *
   * @param {Object} event 欲改變的目標 event.
   * @param {number} quantityNum 欲更新event.qty到的數字.
   * @param {string} type 根據不同type，event.qty 更新方法不同
   *
   *
   */

  // 加入購物車
  const onCookie = (eventid, quantityNum, type) => {
    console.log(type)
    console.log(eventid)
    let cookieEventId =
      eventid.sqleventid + '-' + type.tickettype
    let updateCookie = []
    let cookieEvent = cookies.get('event') // 取得 event cookie

    if (cookieEvent) {
      // 如果有已存在的 event cookie
      // 查看cookie裡面的 event id
      const idSet = new Set()
      for (let i in cookieEvent) {
        idSet.add(cookieEvent[i].id)
      }
      // event 在 event cookie 中
      if (idSet.has(cookieEventId)) {
        for (let i in cookieEvent) {
          if (cookieEvent[i].id == cookieEventId) {
            // 如果event是從Input,數量直接到指定數字
            cookieEvent[i].qty += quantityNum.ticketNum
          }
        }
      } else {
        // 如果被改變的event 不在 event cookie 中
        // 初始數量為1
        let eventjson = {}
        eventjson.id = cookieEventId
        eventjson.qty = quantityNum.ticketNum
        cookieEvent.push(eventjson)
      }
      // 如果被改變後的event數量>0，加入在cookie 中
      for (let i in cookieEvent) {
        if (cookieEvent[i].qty > 0) {
          updateCookie.push(cookieEvent[i])
        }
      }
    } else {
      // 如果沒有已存在的 event cookie
      // 初始數量為1
      let eventjson = {}
      eventjson.id = cookieEventId
      eventjson.qty = quantityNum.ticketNum
      updateCookie.push(eventjson)
    }
    cookies.set('event', updateCookie, { path: '/' }) //更新Cookie
    console.log(updateCookie)
  }

  return (
    <>
      <div className="reduce-width">
        <EHeader />
        <Container className="ed-hero-zone " fluid>
          <Row className="py-4 ed-bread both-padding">
            <BreadCrumb />
          </Row>
          <Row className="both-padding ed-detail-main">
            <h4 className="col-12 p-0 cn-font ed-event-name py-4">
              {eventName}
            </h4>
            <img
              className="col-12 p-0 mb-5"
              src={`http://localhost:6005/eventpic/event/${eventImg}`}
              alt=""
            />
          </Row>
          <Row className="ed-detail-intro both-padding mt-5 pb-5">
            <div className="col-6 p-0 d-flex flex-wrap">
              <h4 className="col-10 cn-font p-0">
                {eventName}
              </h4>
              {isFav ? (
                <div
                  className="ed-like-icon2 col-2"
                  onClick={() => {
                    deleteUserFav(eventId)
                  }}
                >
                  <IoIosHeart />
                </div>
              ) : (
                <div
                  className="ed-like-icon col-2"
                  onClick={() => {
                    addEventFavSever()
                    // callSwal()
                  }}
                >
                  <IoIosHeart />
                </div>
              )}
      
              <p className="col-12 cn-font p-0 mt-3">
                時間：{eventDateStart.split('-')[0]}年
                {eventDateStart.split('-')[1]}月～
                {eventDateEnd.split('-')[0]}年
                {eventDateEnd.split('-')[1]}月
              </p>
              <p className="col-12 cn-font p-0 mt-2">
                地點：{eventCity}
              </p>
            </div>
            {eventClass === 'C' ? (
              <div
                className="col-6 d-flex justify-content-between
            align-items-center flex-wrap ed-weather pl-5 pt-4"
              >
                <div className="col-5 d-flex flex-wrap">
                  <h6 className="cn-font col-12 p-0">
                    {eventCity}天候：
                  </h6>
                  <p className="eng-font-regular col-12 p-0">
                    {weather}
                  </p>
                  {/* <img
                    src={`http://openweathermap.org/img/wn/${tempIcon}@2x.png`}
                    alt=""
                  /> */}
                </div>
                <div className="col-5 d-flex flex-wrap">
                  <h6 className="cn-font col-12 p-0">
                    氣溫：
                  </h6>
                  <p className="eng-font-regular col-12 p-0">
                    {temp}°C
                  </p>
                </div>
                <div className="col-6"></div>
              </div>
            ) : (
              <div
                className="ed-commu-btn  col-6 d-flex justify-content-center
            align-items-center"
              >
                {isShared ? (
                  <Link
                    to={`/event/event-list/detail/update/${id}`}
                    className="col-6"
                  >
                    <button
                      type="button"
                      className="cn-font px-0"
                      // onClick={(e) => e.preventDefault()}
                    >
                      修改作品
                    </button>
                  </Link>
                ) : (
                  <Link
                    to={`/event/event-list/detail/upload/${id}`}
                    className="col-6"
                  >
                    <button
                      type="button"
                      className="cn-font px-0"
                      // onClick={(e) => e.preventDefault()}
                    >
                      上傳作品
                    </button>
                  </Link>
                )}
                <Link
                  to={`/event/event-list/detail/share/${id}`}
                  className="col-6"
                  style={{ textDecoration: 'none' }}
                >
                  <button
                    type="button"
                    className="cn-font px-0"
                    // onClick={(e) => e.preventDefault()}
                    style={{
                      display: `${shareBtn}`,
                    }}
                  >
                    觀賞作品
                  </button>
                </Link>
              </div>
            )}
          </Row>
          <Row className="left-padding cn-font ">
            <div className="col-8 pl-0 ed-detail-content">
              <div className="col-12 p-0 ">
                {/* 第一個按鈕 */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    setOpen(!open)
                  }}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  className="ed-detail-btn col-12 d-flex justify-content-center
                  cn-font p-0 my-5"
                >
                  <span className="mr-auto">活動介紹</span>
                  <span>
                    <IoMdRemove />
                  </span>
                </button>
                <Collapse
                  in={open}
                  className="col-12 p-0  mb-5"
                >
                  <p id="example-collapse-text">
                    {eventDesc}
                  </p>
                </Collapse>

                {/* 第二個按鈕 */}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault()
                    setOpen2(!open2)
                  }}
                  aria-controls="example-collapse-text"
                  aria-expanded={open2}
                  className="ed-detail-btn col-12 d-flex justify-content-center
                  cn-font p-0 py-5 ed-rules"
                >
                  <span className="mr-auto">活動規範</span>
                  <span>
                    <IoMdRemove />
                  </span>
                </button>
                <Collapse
                  in={open2}
                  className="col-12 p-0 ed-detail-content mb-5"
                >
                  <p id="example-collapse-text">
                    || 為示範以活動介紹文字取代活動規範 ||{' '}
                    <br />
                    <br />
                    {eventDesc}
                  </p>
                </Collapse>

                {/* 第三個按鈕 */}
                {/* <button
                  onClick={() => setOpen3(!open3)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open3}
                  className="ed-detail-btn col-12 d-flex justify-content-center
                  cn-font p-0 pt-5 ed-rules mb-5"
                >
                  <span className="mr-auto">活動評價</span>
                  <span>
                    <IoMdRemove />
                  </span>
                </button>
                <Collapse
                  in={open3}
                  className="col-12 p-0 mt-3 mb-5 ed-message"
                >
                  <div
                    id="example-collapse-text"
                    className="col-12 p-0 ed-message"
                  >
                    <h1>金喚</h1>
                    <p className="mt-2">
                      1889年9月，荷蘭後印象派畫家文森特·梵谷（Vincent
                      van
                      Gogh）在畫布上用油畫了自畫像。這幅作品可能是梵谷的最後一幅自畫像，是在他離開法國南部聖雷米的普羅旺斯之前不久畫的。這幅畫現在在巴黎的奧賽博物館（Muséed'Orsay）展出。
                    </p>
                  </div>
                </Collapse> */}

                {/* 留言按鈕 */}
                <div className="col-12 p-0 d-flex justify-content-center flex-wrap e-fb-area py-5">
                  <div
                    onClick={(e) => {
                      e.preventDefault()
                      setOpen4(!open4)
                    }}
                    aria-controls="example-collapse-text"
                    aria-expanded={open4}
                    className="ed-comment e-btn-l mb-5 px-2"
                  >
                    Facebook 留言
                  </div>
                  <Collapse
                    in={open4}
                    className="col-12 p-0 mt-3 mb-5 "
                  >
                    <div className="col-12 p-0 e-fb-cmt">
                      <div
                        className="fb-comments mb-5"
                        data-href="http://localhost:3000/event/event-list/detail"
                        data-width="100%"
                        data-numposts="5"
                      ></div>
                      {/* <form
                        className="border-0 d-flex flex-wrap justify-content-center"
                        action=""
                      >
                        <textarea
                          className="ed-textarea col-12 p-0"
                          name=""
                          id=""
                          cols="30"
                          rows="10"
                        ></textarea>
                        <button
                          className="ed-leave-msg e-btn-m col-l2 mt-3"
                          type="submit"
                        >
                          送出評論
                        </button>
                      </form> */}
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>

            {/* 下訂區塊 */}
            <div className="col-4 ed-ticket h-100">
              <div className="col-12 d-flex justify-content-center flex-wrap">
                <h2 className="mt-3 col-12">
                  馬上搶票!
                  <span>
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                  </span>
                </h2>
                <p className="col-12 pb-4 mb-4">
                  票價：NT$ <span>{eventPrice}</span>
                </p>
                <form
                  className="col-12 d-block d-flex flex-wrap justify-content-between"
                  action=""
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      setTicketType('成人票')
                    }}
                    type="button"
                    className="col-5 e-ticket-type "
                  >
                    成人票
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      setTicketType('孩童票')
                    }}
                    type="button"
                    className="col-5 e-ticket-type"
                  >
                    孩童票
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      setTicketType('敬老票')
                    }}
                    type="button"
                    className="col-5 e-ticket-type"
                  >
                    敬老票
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      setTicketType('愛心票')
                    }}
                    type="button"
                    className="col-5 e-ticket-type"
                  >
                    愛心票
                  </button>
                  <p className="col-12 pb-2 ticket-num mt-4 p-0">
                    數量：
                  </p>
                  <div className="col-12 p-0 mb-4">
                    <button
                      className="ticket-count"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault()
                        setTicketNum(ticketNum - 1)
                      }}
                    >
                      <IoMdRemove className="ed-count-icon" />
                    </button>
                    <div className="ticket-amount">
                      <p>{ticketNum}</p>
                    </div>

                    <button
                      className="ticket-count"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault()
                        setTicketNum(ticketNum + 1)
                      }}
                    >
                      <IoMdAdd className="ed-count-icon" />
                    </button>
                  </div>
                  <p className="col-12 mb-1 ed-total p-0">
                    小計：NT$
                    <span>{eventPrice * ticketNum}</span>
                  </p>

                  <div className="col-12 p-0 mb-5 border-0">
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        callSwal()
                        onCookie(
                          { sqleventid },
                          { ticketNum },
                          { tickettype }
                        )
                        
                      }}
                      className="col-12 p-0 ed-submit-btn"
                      type="submit"
                    >
                      加入購物車
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Row>
        </Container>
        <Container className="ed-more" fluid>
          <EventMore />
        </Container>
      </div>
    </>
  )
}

export default withRouter(EventDetail)
