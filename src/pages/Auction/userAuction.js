import React, { useEffect, useState } from 'react'
// import { useState } from 'react';
import './style/userAuction.scss'
import { withRouter, Link, NavLink } from 'react-router-dom'
import Logoheader from '../user/components/Logoheader'
import Breadcrumb from '../user/components/UserBreadcrumb'
// SweetAlert
import swal from 'sweetalert'

import {
  Container,
  Row,
  Button,
  Collapse,
} from 'react-bootstrap'
import PageNumber from './components/pageNumber'

import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowRoundDown,
  IoIosSearch,
  IoIosHeart,
  IoMdAdd,
  IoMdRemove,
} from 'react-icons/io'

function UserAuction(props) {
  const [userid, setUserId] = useState('')
  const [memAucData, setMemAucData] = useState([])
  const [count, setCount] = useState(0)
  const [aucRemainT, setAucRemainT] = useState([])
  const [aucInfo, setAucInfo] = useState([])
  //頁碼
  //該頁頁碼
  const [pages, setPages] = useState([])
  //頁碼資料
  const [pagesinfo, setPagesInfo] = useState('')
  //顯示的頁碼
  const [showPages, setShowPages] = useState([
    1, 2, 3, 4, 5,
  ])

  async function getMemAucDetailFromServer(id) {
    // 開啟載入指示
    // setDataLoading(true)
    // 連接的伺服器資料網址
    const url =
      `http://localhost:6005/auctoin/auc_member` +
      `?id=${id}` +
      `&pages=${pages}`

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    //設定資料
    setMemAucData(data.rows)
    //設定頁數資料
    setPagesInfo(data)

    console.log(data)
    //設定頁碼
    if (data.totalPages < 6) {
      let pagelength = []
      for (let i = 0; i < data.totalPages; i++) {
        pagelength.push(i + 1)
      }
      setShowPages(pagelength)
    }
  }

  useEffect(async () => {
    await getjwtvertifyFromServer()
  }, [])

  useEffect(() => {
    //從資料庫抓取資料
    getMemAucDetailFromServer(userid)
  }, [pages, userid])

  //驗證身分
  async function getjwtvertifyFromServer() {
    const token = localStorage.getItem('token')

    const response = await fetch(
      'http://localhost:6005/users/checklogin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
        }),
      }
    )

    const data = await response.json()
    console.log(data)
    setUserId(data.id)
  }

  //下一頁
  const nextpage = () => {
    if (pages < pagesinfo.totalPages) {
      let nowcurrentPage = pages + 1
      setPages(pages + 1)
      if (
        nowcurrentPage > 2 &&
        nowcurrentPage < pagesinfo.totalPages - 1 &&
        pagesinfo.totalPages > 5
      ) {
        setShowPages([
          nowcurrentPage - 2,
          nowcurrentPage - 1,
          nowcurrentPage,
          nowcurrentPage + 1,
          nowcurrentPage + 2,
        ])
      }
    }
  }

  //上一頁
  const previouspage = () => {
    if (pages > 1) {
      let nowcurrentPage = pages - 1
      setPages(pages - 1)
      if (
        nowcurrentPage > 2 &&
        nowcurrentPage < pagesinfo.totalPages - 1 &&
        pagesinfo.totalPages > 5
      ) {
        setShowPages([
          nowcurrentPage - 2,
          nowcurrentPage - 1,
          nowcurrentPage,
          nowcurrentPage + 1,
          nowcurrentPage + 2,
        ])
      }
    }
  }

  //計算剩餘時間
  const TimeRemaining = (deadline) => {
    //截止時間(毫秒)
    // 將資料拿到資料庫截止日期 從字串轉換成數字
    const deadlineMin = parseInt(deadline)
    //現在時間(毫秒)
    const timeRightNowA = new Date()
    const timeRightNow = timeRightNowA.getTime()

    const TimeRemaining = deadlineMin - timeRightNow

    const seconds = Math.floor((TimeRemaining / 1000) % 60)
    const minutes = Math.floor(
      (TimeRemaining / 1000 / 60) % 60
    )
    const hours = Math.floor(
      (TimeRemaining / (1000 * 60 * 60)) % 24
    )
    const days = Math.floor(
      TimeRemaining / (1000 * 60 * 60 * 24)
    )
    // console.log(days, "天", hours, '小時', minutes, '分鐘', seconds, '秒')
    if (TimeRemaining < 0) {
      return '競標結束'
    } else {
      return `${days}天 ${hours}小時 ${minutes}分鐘 ${seconds}秒`
    }
  }

  //倒數計時器
  useEffect(() => {
    let remainTime = []
    //把所有deadline取出來計算剩餘時間
    if (memAucData.length > 0) {
      for (let i = 0; i < memAucData.length; i++) {
        let deadlineA = new Date(
          memAucData[i].aucDeadline
        ).getTime()
        remainTime.push(TimeRemaining(deadlineA))
      }

      setAucRemainT(remainTime)
    }
    let test = setInterval(() => {
      setCount((count) => count + 1)
    }, 1000)
    // console.log('+++++++++++++++++++++++', count)
    return () => clearInterval(test)
  }, [count])

  async function logoutToSever() {
    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/users/logout'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    // 要等驗証過，再設定資料(簡單的直接設定)

    swal({
      text: '登出成功！',
      icon: 'success',
      button: false,
      timer: 3000,
    })

    const response = await fetch(request)
    // const data = await response.json()
  }

  return (
    <>
      {console.log("**********************************************************")}
      <div className="u-body-flex">
        <div className="u-body">
          <Logoheader
            user_id={userid}
            show_user_name={true}
          />
          <div className="u-breadcrumb">
            <Breadcrumb />
          </div>
          <div className="tab-bar">
            <NavLink
              activeClassName="activenav"
              className={'tab'}
              to={`/user-msgedit/${userid}`}
              style={{ textDecoration: 'none' }}
            >
              修改資料
            </NavLink>

            <NavLink
              activeClassName="activenav"
              className={'tab'}
              to={`/user-orderpro/${userid}`}
              style={{ textDecoration: 'none' }}
            >
              訂單查詢
            </NavLink>
            <NavLink
              activeClassName="activenav"
              className={'tab'}
              to={`/user-coupon/${userid}`}
              style={{ textDecoration: 'none' }}
            >
              我的優惠券
            </NavLink>
            <NavLink
              activeClassName="activenav"
              className={'tab'}
              to={`/user-ticket/${userid}`}
              style={{ textDecoration: 'none' }}
            >
              我的票券
            </NavLink>
            <NavLink
              activeClassName="activenav"
              className={'tab'}
              to={`/user-myfav/${userid}`}
              style={{ textDecoration: 'none' }}
            >
              我的收藏
            </NavLink>
            <NavLink
              activeClassName="activenav"
              className={'tab'}
              to={`/user-auction/${userid}`}
              style={{ textDecoration: 'none' }}
            >
              競標查詢
            </NavLink>
            <NavLink
              activeClassName="activenav"
              className={'tab'}
              to="/user-login"
              onClick={() => {
                logoutToSever()
              }}
              style={{ textDecoration: 'none' }}
            >
              登出
            </NavLink>
          </div>
          <div className="u-container-fluid">
            <div className="d-flex u-row justify-content-around">
              <div className="u-usertitleLeft1">
                <Link to={`/user-auction/${userid}`}>競標中</Link>
              </div>
              <div className="u-usertitleRight1">
                <Link to={`/user-auctionOver/${userid}`}>已得標</Link>
              </div>
            </div>
          </div>
          {memAucData.map((sinData, i) => (
            <div className="uAuc-main">
              <div className="uAuc-picture">
                <img
                  src={`http://localhost:6005/aucpics/auc/${memAucData[i].aucImg}`}
                  alt="Background"
                />
              </div>
              <div className="uAuc-productState">
                <ul>
                  <li>競標編號:{memAucData[i].Sid}</li>
                  <li>競標商品：{memAucData[i].aucName}</li>
                  <li>
                    您的出價：NT$ {memAucData[i].MaxPrice}
                  </li>
                  <li>
                    最高出價：NT${' '}
                    {memAucData[i].aucPriceNow}
                  </li>
                  <li>剩餘時間：{aucRemainT[i]}</li>
                </ul>
              </div>
              <div className="uAuc-btnf">
                <Link
                  className="uAuc-btn"
                  to={`/AuctionDetail/${memAucData[i].aucId}`}
                >
                  拍賣品細節
                </Link>
              </div>
            </div>
          ))}
          {/* <div className="uAuc-redirect">
            <button>
              <Link to={`auction/${userid}`}>
                前往競標！
              </Link>
            </button>
          </div> */}
          <div>
            <Row className="justify-content-center eng-font-regular mt-5 py-5">
              <Link
                className="ed-pagenum mx-3"
                onClick={previouspage}
              >
                <IoIosArrowBack />
              </Link>
              {showPages.map((pageNumber, i) => (
                <PageNumber
                  key={i}
                  pages={pages}
                  setPages={setPages}
                  pagesinfo={pagesinfo}
                  currentPage={showPages[i]}
                  showPages={showPages}
                  setShowPages={setShowPages}
                />
              ))}
              <Link
                className="ed-pagenum mx-3"
                onClick={nextpage}
              >
                <IoIosArrowForward />
              </Link>
            </Row>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(UserAuction)
