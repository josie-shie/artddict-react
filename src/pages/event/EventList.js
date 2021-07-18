import { React, useEffect, useState, useRef } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import $ from 'jquery'
import ReactPaginate from 'react-paginate'

// Component
import EHeader from './components/Darkheader'
import EDetailCaro from './components/EDetailCaro'
import {
  data,
  countries,
  townships,
} from './config/townships'

// react icons
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowRoundDown,
  IoIosSearch,
  IoIosHeart,
} from 'react-icons/io'
import { FaFilter } from 'react-icons/fa'

// Pictures
// import EdListCardPic from './images/event/006.jpg'

// styles
import './style/reset.css'
import './style/fontAndBtn.scss'
import './style/eventList.scss'

function EventList(props) {
  const [events, setEvents] = useState([])
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)
  const [city, setCity] = useState('')
  const [eventClass, setEventClass] = useState('')
  const [page, setPage] = useState(1)
  const [totalCount, setTotalCount] = useState('')
  const [totalPages, setTotalPages] = useState('')
  const [userId, setUserId] = useState(1)
  const [favArray, setFavArray] = useState([])
  // const [museum, setMuseum] = useState('')
  // const [date, setDate] = useState('')
  // const [isFilter, setIsfFilter] = useState(false)
  const [order, setOrder] = useState(true)

  // setCity(props.match.params.city)

  let orderBy = ''
  if (order) {
    orderBy = 'latest'
  } else {
    orderBy = 'oldest'
  }

  // async function getEventServer() {
  //   const url = 'http://localhost:6005/event'

  //   const request = new Request(url, {
  //     method: 'GET',
  //     headers: new Headers({
  //       Accept: 'application/json',
  //       'Content-Type': 'appliaction/json',
  //     }),
  //   })

  //   const response = await fetch(request)
  //   const data = await response.json()
  //   // 設定資料
  //   setEvents(data)
  // }

  async function getEventQueryServer() {

    const url = `http://localhost:6005/event?city=${city}&class=${eventClass}&order=${orderBy}&page=${page}`

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const row = await response.json()
    const eData = row['eventData']
    const totalCount = row['totalCount'].num
    const totalPages = row['totalPages']

    // 設定資料
    if (totalCount) {
      setTotalCount(totalCount)
    }
    if (totalPages) {
      setTotalPages(totalPages)
    }
    if (eData) {
      setEvents(eData)
    }
  }

 

  async function addEventFavSever(eventId) {
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


  // 檢查跳首頁資料
  function jumpJumpJump(){
    console.log(totalCount, totalPages, events)
  }

   function handlePageClick(paginate) {
     let selected = paginate.selected
     setPage(selected + 1)   
   }

  $('.e-detail-class').click(function () {
    $(this)
      .css('background', 'white')
      .css('color', 'black')
      .siblings()
      .css('background', 'black')
      .css('color', 'white')
  })


  useEffect(() => {
    getEventQueryServer()
  }, [])

  useEffect(() => {
    getEventQueryServer()
    setPage(1)
  }, [eventClass])

  useEffect(() => {
    getEventQueryServer()
  }, [page])

  //測試城市選單
  useEffect(() => {
    console.log(country, township, city, orderBy)
  }, [country, township, city, order])

  const eventDisplay = events.map((event) => {
    return (
      <Link
        to={`/event/event-list/detail/${event.id}`}
        style={{ textDecoration: 'none' }}
        className="ed-list-card col-4 my-3 "
        key={event.eventId}
      >
        <img
          className="col-12 p-0"
          src={`http://localhost:6005/eventpic/event/${event.eventImg}`}
          alt="/"
        />
        <h6 className="col-12 p-0 cn-font my-2">
          {event.eventName}
        </h6>
        <div className="d-flex">
          <div className="col-8 p-0">
            <p>{event.cityName}</p>
            <p>
              時間：{event.eventDateStart.split('-')[0]}年
              {event.eventDateStart.split('-')[1]}月
            </p>
          </div>
          <div className="col-4 p-0">
            <button
              onClick={(e) => {
                e.preventDefault()
                addEventFavSever(event.eventId)
              }}
              className="border-right col-4 text-center"
            >
              <IoIosHeart />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault()
              }}
              className="col-8 text-center"
            >
              MORE+
            </button>
          </div>
        </div>
      </Link>
    )
  })

  return (
    <>
      <div className="reduce-width overflow-hidden">
        <EHeader />

        {/* HERO Section 輪播牆 */}
        <Container fluid className="ed-hero">
          <Row>
            <h1 className="col-12 p-0 eng-font-regular e-detail-title text-center py-4">
              <IoIosArrowBack />
              <IoIosArrowBack />
              <IoIosArrowBack />
              <IoIosArrowBack />
              <IoIosArrowBack />
              EXHIBITION AND WORK SHOP
              <IoIosArrowForward />
              <IoIosArrowForward />
              <IoIosArrowForward />
              <IoIosArrowForward />
              <IoIosArrowForward />
            </h1>
          </Row>

          <EDetailCaro />
          <Row className="mt-2 pb-5 ed-type">
            <button
              className="col-6 e-detail-class cn-font border-left-0 py-4 shadow-none"
              type="button"
              onClick={(e) => {
                e.preventDefault()
                setEventClass('C')
              }}
            >
              藝文活動展
              <IoIosArrowRoundDown />
            </button>
            <button
              className="col-6 e-detail-class cn-font py-4 border-right-0"
              type="button"
              onClick={(e) => {
                e.preventDefault()
                setEventClass('D')
              }}
            >
              活動工作坊
              <IoIosArrowRoundDown />
            </button>
          </Row>
        </Container>
        <Container className="ed-list both-padding" fluid>
          <Row className="mb-4">
            <div
              className="ed-filter col-12 px-0 d-flex justify-content-between my-5 pb-5"
              action=" "
            >
              {/* 地區選單 */}
              <div
                className="ed-select-box cn-font col-3 p-0 d-flex
              "
              >
                <h6 className="col-5 px-0 text-center">
                  地區
                </h6>
                <select
                  className="ed-select col-7"
                  value={country}
                  onChange={(e) => {
                    // 將字串轉成數字
                    setCountry(+e.target.value)
                    // 重置township的值
                    setTownship(-1)
                    setCity('')
                  }}
                  name=""
                  id=""
                >
                  <option value="-1">請選擇</option>
                  {countries.map((value, index) => (
                    <option key={index} value={index}>
                      {value}
                    </option>
                  ))}
                </select>
              </div>

              {/* 城市選單 */}
              <div
                className="ed-select-box cn-font col-3 p-0 d-flex
              "
              >
                <h6 className="col-5 px-0 text-center">
                  城市
                </h6>
                <select
                  className="ed-select col-7"
                  value={township}
                  onChange={(e) => {
                    // 將字串轉成數字
                    setTownship(+e.target.value)
                    setCity(
                      townships[country][+e.target.value]
                    )
                  }}
                  name=""
                  id=""
                >
                  <option value="-1">請選擇</option>
                  {country > -1 &&
                    townships[country].map(
                      (value, index) => (
                        <option key={index} value={index}>
                          {value}
                        </option>
                      )
                    )}
                </select>
              </div>

              <div
                className="ed-select-box cn-font col-3 p-0 d-flex
              "
              >
                <h6 className="col-5 px-0 text-center">
                  開始日期
                </h6>
                <select
                  className="ed-select col-7"
                  onChange={(e) => {
                    // 將字串轉成數字
                    setOrder(!order)
                  }}
                  name=""
                  id=""
                >
                  <option value="latest">由舊至新</option>
                  <option value="oldest">由新至舊</option>
                </select>
              </div>

              <div
                className="ed-list-btn col-1"
                onClick={() => {
                  getEventQueryServer()
                  // jumpJumpJump()
                }}
              >
                <FaFilter />
              </div>
            </div>
            <div className="my-5"></div>
          </Row>
          <Row className="ed-list-card justify-content-start flex-wrap cn-font">
            {/* test node area */}
            {eventDisplay}
            {/* test node area */}
          </Row>

          <ReactPaginate
            pageCount={totalPages}
            pageRangeDisplayed={4}
            marginPagesDisplayed={0}
            previousLabel={<IoIosArrowBack />}
            nextLabel={<IoIosArrowForward />}
            breakLabel={''}
            containerClassName={
              'justify-content-center eng-font-regular mt-5 py-5 row'
            }
            pageLinkClassName={'ed-pagenum mx-3'}
            previousClassName={'ed-pagenum mx-3'}
            nextClassName={'ed-pagenum mx-3'}
            onPageChange={handlePageClick}
            activeLinkClassName={'ed-pagenum-active'}
          />
        </Container>
      </div>
    </>
  )
}

export default withRouter(EventList)
