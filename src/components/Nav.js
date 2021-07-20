//TODO:判斷是否登入

import React, { useRef, useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { ReactComponent as Logo } from '../pics/logo.svg'
import ScrollBtn from '../components/ScrollBtn'
import $ from 'jquery'
import Cookies from 'universal-cookie'
import swal from 'sweetalert'

// icon
import { BiCartAlt } from 'react-icons/bi'
import { FiLogOut } from 'react-icons/fi'
import {
  FaUserAstronaut,
  FaMapMarkedAlt,
} from 'react-icons/fa'

//style
import '../style/Nav.scss'
import '../bootstrap/css/bootstrap.css'

const Nav = (props) => {
  const burgerRef = useRef()
  const circleRef = useRef()
  const xRef = useRef()
  const yRef = useRef()
  const zRef = useRef()
  const liRef = useRef()
  const logoRef = useRef()

  //cart
  const cookies = new Cookies()
  let cookieProduct = cookies.get('product') || []
  let cookieEvent = cookies.get('event') || []
  const [cookieEvenQty, setCookieEvenQty] = useState(0)
  const [cookieProQty, setCookieProQty] = useState(0)
  const [cookieTotal, setCookieTotal] = useState(0)

  //驗證身份
  const [id, setId] = useState('')

  const updateSpeed = () => {
    if (cookieProduct) {
      let cookieProQty1 = cookieProduct.length
      setCookieProQty(cookieProQty1)
      console.log(cookieProQty1)
    }
    if (cookieEvent) {
      setCookieEvenQty(cookieEvent.length)
      console.log('cookieEvenQty', cookieEvenQty)
    }
  }

  useEffect(() => {
    //!!判斷購物車陣列是否存在 如果存在用長度當數量
    //console.log('cookieProduct', cookieProduct.length)

    setInterval(() => {
      let cookieProduct = cookies.get('product') || []
      let cookieEvent = cookies.get('event') || []
      let newcookieProQty = 0
      let newcookieEventQty = 0

      if (cookieProduct) {
        newcookieProQty += cookieProduct.length
        // setCookieProQty(cookieProQty)
      }

      if (cookieEvent) {
        newcookieEventQty += cookieEvent.length
      }

      //console.log('newcookieProQty', newcookieProQty)
      //console.log('newcookieEventQty', newcookieEventQty)
      setCookieProQty(newcookieProQty)
      setCookieEvenQty(newcookieEventQty)
      setCookieTotal(newcookieProQty + newcookieEventQty)
      //console.log('cookieTotal', cookieTotal)
    }, 1000)

    //updateSpeed()
    //console.log(cookieProQty)

    // if (cookieProduct || cookieEvent) {
    //   let cookieProQty = cookieProduct.length
    //   let cookieEvenQty = cookieEvent.length
    //   setCookieTotal(cookieProQty + cookieEvenQty)
    // }

    //!測試使用burger狀態去判斷
    //!Nav動態
    // $(burgerRef.current).on('click', function () {
    //   burger ? openMenu() : closeMenu()
    //   console.log(burger)
    $(burgerRef.current).on('click', function () {
      if (!$(this).hasClass('open')) {
        openMenu()
      } else {
        closeMenu()
      }
    })

    $('.menu li').on('click', function () {
      closeMenu()
    })

    $(logoRef.current).on('click', function () {
      closeMenu()
    })
    //!Nav動態

    //驗證身份
    getjwtvertifyFromServer()
    console.log('didMount', id)
  }, [])

  //立即更新購物車數量

  // useEffect(() => {
  //   if (cookieProduct || cookieEvent) {
  //     let cookieProQty = cookieProduct.length
  //     let cookieEvenQty = cookieEvent.length
  //     //console.log('cookieProQty', cookieProQty)
  //     //console.log('cookieEvenQty', cookieEvenQty)
  //     setCookieTotal(cookieProQty + cookieEvenQty)
  //   }
  //   console.log('cookieTotal', cookieTotal)
  // }, [cookieEvenQty, cookieProQty])

  const openMenu = () => {
    $(circleRef.current).addClass('expand')

    $(burgerRef.current).addClass('open')
    $(xRef.current).css('top', '20px')
    $(zRef.current).css('top', '20px')
    $('.menu li').addClass('animate')
    $(logoRef.current)
      .addClass('animate')
      .removeClass('nav-none')

    setTimeout(function () {
      $(yRef.current).hide()
      $(xRef.current).addClass('rotate30')
      $(zRef.current).addClass('rotate150')
    }, 70)
    setTimeout(function () {
      $(xRef.current).addClass('rotate45')
      $(zRef.current).addClass('rotate135')
    }, 120)
  }

  const closeMenu = () => {
    $(burgerRef.current).removeClass('open')
    $(xRef.current)
      .removeClass('rotate45')
      .addClass('rotate30')
    $(zRef.current)
      .removeClass('rotate135')
      .addClass('rotate150')
    $(circleRef.current).removeClass('expand')
    $('.menu li').removeClass('animate')
    $(logoRef.current)
      .removeClass('animate')
      .addClass('nav-none')

    setTimeout(function () {
      $(xRef.current).removeClass('rotate30')
      $(zRef.current).removeClass('rotate150')
    }, 50)
    setTimeout(function () {
      $(yRef.current).show()
      $(xRef.current).css('top', '0px')
      $(zRef.current).css('top', '37px')
    }, 30)
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
    setId(data.id)
    //setLogin(true)
    console.log('data done', id)
  }

  //使用者登出

  async function logoutToSever() {
    // 連接的伺服器資料網址
    localStorage.removeItem('token')
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
    const data = await response.json()
    setId(data.id)
    console.log(123)
    //setLogin(false)
  }

  return (
    <>
      <div className="nav-area">
        <nav className="index-nav">
          <div className="mynav">
            <div ref={circleRef} className="circle"></div>
            <div className="nav-icon text-center">
              <div className="mb-4">
                <Link to="/map">
                  <i>
                    <FaMapMarkedAlt />
                  </i>
                </Link>
              </div>
              <div className="mb-4">
                {/* <FaUserAstronaut /> */}
                {/* //TODO:判斷是否登入 */}
                {id ? (
                  <Link to="/">
                    <i>
                      <FiLogOut
                        onClick={() => {
                          logoutToSever()
                        }}
                      />
                    </i>
                  </Link>
                ) : (
                  <Link to="/user-login">
                    <i>
                      <FaUserAstronaut />
                    </i>
                  </Link>
                )}
              </div>
              <div className="mb-4 nav-cart">
                <Link to="/cart-product">
                  <i>
                    <BiCartAlt />
                    {cookieTotal !== 0 ? (
                      <span>{cookieTotal}</span>
                    ) : (
                      ''
                    )}
                  </i>
                </Link>
              </div>
              <div className="mb-4">
                <Link to="#">
                  <i>
                    <ScrollBtn />
                  </i>
                </Link>
              </div>
            </div>
            <div ref={burgerRef} className="burger">
              <div ref={xRef} className="x"></div>
              <div ref={yRef} className="y"></div>
              <div ref={zRef} className="z"></div>
            </div>
            <div className="nav-logo-sm"></div>
          </div>
          <div className="menu">
            <Link to="/">
              <Logo className="nav-logo" ref={logoRef} />
            </Link>
            <div>
              <ul>
                <li>
                  <Link ref={liRef} to="/product">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link ref={liRef} to="/event">
                    Event
                  </Link>
                </li>
                <li>
                  <Link ref={liRef} to="/auction">
                    Auction
                  </Link>
                </li>
                <li>
                  <Link
                    ref={liRef}
                    to={
                      id
                        ? `/user-msgedit/${id}`
                        : `/user-login`
                    }
                  >
                    Member
                  </Link>
                </li>

                <li>
                  <Link ref={liRef} to="/contact">
                    our Team
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default withRouter(Nav)
