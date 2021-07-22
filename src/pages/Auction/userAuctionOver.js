import './style/userAuctionOver.scss'
import Logoheader from '../user/components/Logoheader'
import Breadcrumb from '../user/components/UserBreadcrumb'
import { withRouter, Link, NavLink } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import PageNumber from './components/pageNumber'
// SweetAlert
import swal from 'sweetalert'
import {
  Container,
  Row,
  Button,
  Collapse,
} from 'react-bootstrap'
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosArrowRoundDown,
  IoIosSearch,
  IoIosHeart,
  IoMdAdd,
  IoMdRemove,
} from 'react-icons/io'
import Display from '../event/components/tetris/Display'

function UserAuctionOver(props) {

  // const userid = props.match.params.userid
  //頁碼
  //該頁頁碼
  const [pages, setPages] = useState([])
  //頁碼資料
  const [pagesinfo, setPagesInfo] = useState('')
  //顯示的頁碼
  const [showPages, setShowPages] = useState([
    1, 2, 3, 4, 5,
  ])

  const [userid, setUserId] = useState('')
  const [memAucOrderData, setMemAucOrderData] = useState([])
  const [orderStatus, setOrderStatus] = useState([])
  //日期處理
  const [dateinfo, setDateinfo] = useState([])

  const [showOrderList, setShowOrderList] = useState([])

  async function getMemAucDetailFromServer(userid) {
    // 開啟載入指示
    // setDataLoading(true)
    // 連接的伺服器資料網址
    const url =
      `http://localhost:6005/auctoin/auc-order?userId=${userid}&pages=${pages}`
    // `&pages=${pages}`

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
    // //設定資料
    setMemAucOrderData(data.rows)
    // //設定頁數資料
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


    //貨物狀態代號轉換
    let a = []
    for (let i = 0; i < data.rows.length; i++) {
      if (data.rows[i].orderStatus === 0) {
        a.push('待出貨')
      }
      if (data.rows[i].orderStatus === 1) {
        a.push('已出貨')
      }
      if (data.rows[i].orderStatus === 2) {
        a.push('已取消')
      }
    }
    setOrderStatus(a)

    //風琴折
    let b = []
    for (let i = 0; i < data.rows.length; i++) {
      b.push('none')
    }
    setShowOrderList(b)

    //日期格式轉換
    let d = []
    for (let i = 0; i < data.rows.length; i++) {
      let f = data.rows[i].aucDeadline
      d.push(new Date(f).toLocaleString())
    }
    setDateinfo(d)
  }

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

  //顯示訂單
  const orderShowAAA = (i) => {
    if (showOrderList[i] == 'none') {
      let newshowOrderList = [...showOrderList]
      newshowOrderList[i] = 'block'
      setShowOrderList(newshowOrderList)
    } else {
      let newshowOrderList = [...showOrderList]
      newshowOrderList[i] = 'none'
      setShowOrderList(newshowOrderList)
    }
  }

  useEffect(async () => {
    await getjwtvertifyFromServer()
  }, [])

  useEffect(() => {
    //從資料庫抓取資料
    getMemAucDetailFromServer(userid)
  }, [pages, userid])

  return (
    <>
      <div>
        <div className="auc-body">
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
              <div className="u-usertitleLeft">
                <Link to={`/user-auction/${userid}`}>競標中</Link>
              </div>
              <div className="u-usertitleRight">
                <Link to={`/user-auctionOver/${userid}`}>已得標</Link>
              </div>
            </div>
          </div>
          {memAucOrderData.map((AucOrderData, i) => (
            <>
              <div className="uAucO-main">
                <div className="uAucO-picture">
                  <img
                    src={`http://localhost:6005/aucpics/auc/${memAucOrderData[i].aucImg}`}
                    alt="Background"
                  />
                </div>
                <div className="uAucO-productState">
                  <ul>
                    <li>
                      商品編號:{memAucOrderData[i].aucId}
                    </li>
                    <li>
                      競標商品：{memAucOrderData[i].aucName}
                    </li>
                    <li>
                      得標價格：NT${' '}
                      {memAucOrderData[i].orderPrice}
                    </li>
                  </ul>
                </div>
                <div className="uAucO-btnf">
                  <button className="uAucO-btnA">
                    拍賣品細節
                  </button>
                  <button
                    className="uAucO-btnB"
                    onClick={(e) => {
                      orderShowAAA(i)
                    }}
                  >
                    訂單明細
                  </button>
                </div>
              </div>
              <div
                className="uAucO-detail"
                style={{ display: `${showOrderList[i]}` }}
              >
                <div className="uAucO-detail-Title">
                  訂單明細
                </div>
                <div className="uAuc-detail-contentA">
                  <ul>
                    <li>訂單編號</li>
                    <li>結標時間</li>
                    <li>收件人</li>
                    <li>手機號碼</li>
                    <li>訂單狀態</li>
                  </ul>
                  <ul>
                    <li>{memAucOrderData[i].orderId}</li>
                    <li>
                      {dateinfo[i]}
                    </li>
                    <li>{memAucOrderData[i].username}</li>
                    <li>{memAucOrderData[i].userPhone}</li>
                    <li>{orderStatus[i]}</li>
                  </ul>
                  <ul>
                    <li>付款方式</li>
                    <li>運送方式</li>
                    <li>總金額</li>
                  </ul>
                  <ul>
                    <li>信用卡</li>
                    <li>{memAucOrderData[i].orderShip}</li>
                    <li>
                      {parseInt(
                        memAucOrderData[i].orderPrice
                      ) + 200}
                    </li>
                  </ul>
                </div>
              </div>
            </>
          ))}
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

export default withRouter(UserAuctionOver)
