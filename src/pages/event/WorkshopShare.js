import { React, useState, useEffect } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Container, Row } from 'react-bootstrap'
import axios from 'axios'

// import component
import Lightheader from './components/Lightheader'
import BreadCrumb from './components/EventBreadCrumb'
import EventMore from './components/EventMore'

// react icons
import { IoIosArrowForward } from 'react-icons/io'

// import pictures
import Square from './images/square.gif'
// Pictures
import EuListCardPic from './images/event/006.jpg'
import EuListCardPic2 from './images/event/007.jpg'

import './style/reset.css'
import './style/fontAndBtn.scss'
import './style/WorkshopShare.scss'

function WorkshopShare(props) {
  const id = props.match.params.id

  const [eventName, setEventName] = useState('')
  const [shareImg, setShareImg] = useState('')
  const [shareImg2, setShareImg2] = useState('')
  const [shareImg3, setShareImg3] = useState('')
  const [shareImg4, setShareImg4] = useState('')
  const [shareComment, setShareComment] = useState('')

  async function getShareIdServer() {
    const url = `http://localhost:6005/event/share/${id}`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    const imgData = data.shareImg

    // data.shareImg 在資料庫中長這樣 ：["001.jpg","002.jpg","003.jpg","004.jpg"]
    const imgArr = JSON.parse(imgData)
    
    setEventName(data.eventName)

    if (imgArr.length >= 4) {
      setShareImg(imgArr[0])
      setShareImg2(imgArr[1])
      setShareImg3(imgArr[2])
      setShareImg4(imgArr[3])
    }else if(imgArr.length >= 3) {
      setShareImg(imgArr[0])
      setShareImg2(imgArr[1])
      setShareImg3(imgArr[2])
    }else if (imgArr.length >= 2) {
      setShareImg(imgArr[0])
      setShareImg2(imgArr[1])
    }else if (imgArr.length >= 1) {
      setShareImg(imgArr[0])
    }

    setShareComment(data.shareComment)
  }

  useEffect(() => {
    getShareIdServer()
  }, [])

  return (
    <>
      <div className="reduce-width">
        <Lightheader />
        <Container className="e-share " fluid>
          <Row className="py-4 es-bread both-padding">
            <BreadCrumb />
          </Row>
          <Row className="both-padding">
            <div className="es-pic-up col-12 p-0 mb-4">
              <h5 className="cn-font">主題工作坊</h5>
              <h2>{eventName}</h2>
            </div>
            {/* 資料form表單 */}
            <div className="col-12 pl-0 justify-content-between d-flex flex-wrap">
              <h5 className="es-work-title col-12 p-0 cn-font mb-3">
                作品圖片:
              </h5>
              <div className="col-8 p-0 justify-content-start d-flex flex-wrap">
                <div className="es-pic-left col-8 p-0 mr-3">
                  <div
                    style={{
                      backgroundImage:
                        'url(' +
                        `http://localhost:6005/eventpic/share/${shareImg}` +
                        ')',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                    }}
                  >
                    <img src={Square} alt="" />
                  </div>
                </div>

                <div className="es-pic-right col-3 p-0">
                  <div className="col-12 p-0 d-flex flex-wrap">
                    <div
                      className="col-10 p-0"
                      style={{
                        backgroundImage:
                          'url(' +
                          `http://localhost:6005/eventpic/share/${shareImg2}` +
                          ')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                      }}
                    >
                      <img src={Square} alt="" />
                    </div>
                    <div
                      className="col-10 my-2 p-0 "
                      style={{
                        backgroundImage:
                          'url(' +
                          `http://localhost:6005/eventpic/share/${shareImg3}` +
                          ')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                      }}
                    >
                      <img src={Square} alt="" />
                    </div>
                    <div
                      className="col-10 p-0"
                      style={{
                        backgroundImage:
                          'url(' +
                          `http://localhost:6005/eventpic/share/${shareImg4}` +
                          ')',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                      }}
                    >
                      <img src={Square} alt="" />
                    </div>
                  </div>
                </div>
                <h5 className="es-work-title col-11 p-0 cn-font mt-2">
                  作品說明:
                </h5>
                <p className="es-text cn-font col-11 p-0 pr-2">
                  {shareComment}
                </p>
              </div>

              {/* 其他活動區塊 */}
              <div className="es-more-event col-4">
                <h2 className="my-3 col-12 mb-3">
                  其他活動!
                  <span>
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                  </span>
                </h2>

                <Link
                  to="/event/event-list/detail/7"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="es-list-card col-12 pt-5 mb-5">
                    <img
                      className="col-12 p-0"
                      src={EuListCardPic2}
                      alt=""
                    />
                    <h6 className="col-12 p-0 cn-font my-2">
                      探索臺北城
                    </h6>
                    <div className="d-flex">
                      <div className="col-8 p-0">
                        <p>地點：台北市</p>
                        <p>2021年06月</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/event/event-list/detail/6"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="es-list-card col-12 pt-5 mb-5">
                    <img
                      className="col-12 p-0"
                      src={EuListCardPic}
                      alt=""
                    />
                    <h6 className="col-12 p-0 cn-font my-2">
                      解碼雲端
                    </h6>
                    <div className="d-flex">
                      <div className="col-8 p-0">
                        <p>地點：彰化縣</p>
                        <p>時間：2021年06月</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </Row>
        </Container>
        <Container fluid>
          <EventMore />
        </Container>
      </div>
    </>
  )
}

export default withRouter(WorkshopShare)
