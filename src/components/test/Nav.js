//TODO:Nav:一鍵置頂/背景要變灰階

import React, { useRef, useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { ReactComponent as Logo } from '../pics/logo.svg'
import { BiCartAlt } from 'react-icons/bi'
import {
  FaUserAstronaut,
  FaMapMarkedAlt,
} from 'react-icons/fa'
import ScrollBtn from '../components/ScrollBtn'
import $ from 'jquery'
import '../style/Nav.css'
import '../bootstrap/css/bootstrap.css'

const Nav = () => {
  const burgerRef = useRef()
  const circleRef = useRef()
  const xRef = useRef()
  const yRef = useRef()
  const zRef = useRef()
  const liRef = useRef()
  const logoRef = useRef()

  // const [li, setli] = useState(false) //!why not false
  // const [burger, setburger] = useState(false) //!why not false

  useEffect(() => {
    // if ('ontouchstart' in window) {
    //   var click = 'touchstart'
    // } else {
    //   var click = 'click'
    // }

    //!測試使用burger狀態去判斷 
    // $(burgerRef.current).on('click', function () {
    //   burger ? openMenu() : closeMenu()
    //   console.log(burger)
    $(burgerRef.current).on('click', function () {
      if (!$(this).hasClass('open')) {
        openMenu()
      } else {
        closeMenu()
      }

      $('.menu li').on('click', function () {
        closeMenu()
      })

      $(logoRef.current).on('click', function () {
        closeMenu()
      })
    })
  }, [])

  const openMenu = () => {
    $(circleRef.current).addClass('expand')

    $(burgerRef.current).addClass('open')
    $(xRef.current).css('top', '20px')
    $(zRef.current).css('top', '20px')
    $('.menu li').addClass('animate')
    $(logoRef.current).addClass('animate')

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
    $(logoRef.current).removeClass('animate')

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

  // useEffect(() => {}, [])

  // const handleGlobalClick = () => {
  //   console.log('global click')

  //   this.setState({ dropDownExpanded: false })
  //   document.removeEventListener(
  //     'click',
  //     this.handleGlobalClick
  //   )
  // }

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
                <Link to="/user-login">
                  <i>
                    <FaUserAstronaut />
                  </i>
                </Link>
              </div>
              <div className="mb-4">
                <Link to="/cart-product">
                  <i>
                    <BiCartAlt />
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
                  <Link
                    ref={liRef}
                    to="/product"
                    onCLick={() => {
                      closeMenu()
                    }}
                  >
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
                  <Link ref={liRef} to="/user-login">
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
