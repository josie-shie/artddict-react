import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../pics/logo.svg'
import '../../bootstrap/css/bootstrap.css'
import { Card, Button } from 'react-bootstrap'
//----------icon and css and slick----------
import {} from 'react-icons/cg'
import { MdKeyboardArrowRight } from 'react-icons/md'

import {
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
} from 'react-icons/io'
import { BsThreeDots } from 'react-icons/bs'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './style/Product.css'

//-------test-----
import Testcard from './compoenents/testCard'
// -----picturre--------
import logo from './svg/logo.svg'
import arddictCircleG from './svg/arddictCircleG.svg'
import arddictEyeG from './svg/arddictEyeG.svg'
import leftArrow from './svg/leftArrow.svg'
import upLogo from './img/upLogo.png'
import homepic1 from './img/homepic1.jpeg'
import homepic2 from './img/homepic2.png'
import homepic3 from './img/homepic3.png'
import homepic4 from './img/homepic4.png'
import homepic5 from './img/homepic5.jpeg'
import homepic6 from './img/homepic6.jpeg'
import museumGif from './img/museumGif.gif'
import slickA1 from './img/slickA1.jpeg'
import slickA2 from './img/slickA2.jpeg'
import slickA3 from './img/slickA3.jpeg'
import slickA4 from './img/slickA4.jpeg'
import slickA5 from './img/slickA5.jpeg'
import slickA6 from './img/slickA6.jpeg'
import slickB1 from './img/slickB1.jpeg'
import slickB2 from './img/slickB2.jpeg'
import slickB3 from './img/slickB3.jpeg'
import slickB4 from './img/slickB4.jpeg'
import slickB5 from './img/slickB5.jpeg'
import slickB6 from './img/slickB6.jpeg'

function Product() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  let settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
        }}
        onClick={onClick}
      />
    )
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
        }}
        onClick={onClick}
      />
    )
  }

  return (
    <>
      <div className="pro-outside">
        <div className="row">
          <div className="homepageA-left">
            <div className="ArtLogoDiv">
              <img src={logo} alt="" />
            </div>
            <div className="upLogoDiv">
              <img className="upLogo" src={upLogo} alt="" />
            </div>
            <div className="homepageA-word-div">
              <h1 className="homepageA-word">鹽田千春</h1>
            </div>
            <div className="homepageA-wordB-div">
              <p className="homepageA-wordB">
                現在藝術大師鹽田千春
                <br />
                2021『這樣的千春』展覽系列商品
                <br />
                只有在———
                <span className="pro-English">
                  ARTDDICT
                </span>
              </p>
            </div>
            <button
              onclick="javascript:location.href='productList'"
              className="homepageA-box btn-lg pro-English "
            >
              Go Shop
            </button>
          </div>
          <div className="homepageA-right">
            <div className="homepageA-right-box d-flex">
              <div className="homepageA-right-box-picA">
                <img
                  className="homepageA-right-picA"
                  src={homepic1}
                  alt=""
                />
              </div>
              <div className="homepageA-right-box-picB">
                <img
                  className="homepageA-right-picB"
                  src={homepic2}
                  alt=""
                />
              </div>
              <div className="homepageA-right-box-picC">
                <img
                  className="homepageA-right-picC"
                  src={homepic3}
                  alt=""
                />
              </div>
              <div className="homepageA-right-box-picD">
                <img
                  className="homepageA-right-picD"
                  src={homepic4}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="arddictCircleG"
          src={arddictCircleG}
          alt=""
        />
        <img
          className="arddictEyeG"
          src={arddictEyeG}
          alt=""
        />
      </div>
      {/* -----------------------首頁第一頁 以下第二頁 */}
      <div className="pro-outside2">
        <div className="row">
          <div className="homepageB-left">
            <p className="pro-English homepageB-left-word">
              TO DRAW, <br />
              YOU MUST CLOSE <br /> YOUR EYES
              <br /> AND SING
              <br />
              ——PABLO PICASSO
            </p>
            <div className="pro-gif">
              <img
                className="museumGif"
                src={museumGif}
                alt=""
              />
            </div>
          </div>
          <div className="homepageB-right"> </div>
        </div>
      </div>
      {/* --------------------------homepage3 */}
      <div className="pro-outside3">
        <div className="homepage3 d-flex">
          <div className="homepage3-NewArrival-box">
            <h1 className="homepage3-NewArrival">
              NEW <br />
              ARRIVAL
            </h1>
          </div>
          <div className="pro-green"></div>
          <div className="homepage3-left-box">
            <p className="homepage3-word">
              藝術——————新品上架
              <br />
              <Link
                to="/"
                style={{
                  color: 'black',
                  textDecoration: 'none',
                }}
                className="homepage3-more"
              >
                MORE
              </Link>
            </p>
          </div>

          <div className="homepage3-right-box">
            <div className="pro-arrow">
              <marquee scrollamount="10" direction="right">
                <MdKeyboardArrowRight size={70} />
                <MdKeyboardArrowRight size={70} />
                <MdKeyboardArrowRight size={70} />
                <MdKeyboardArrowRight size={70} />
                <MdKeyboardArrowRight size={70} />
                <MdKeyboardArrowRight size={70} />
                <MdKeyboardArrowRight size={70} />
                <MdKeyboardArrowRight size={70} />
              </marquee>
            </div>
            <div className="slickWidth">
              <div className="switchLeftBtn">
                <IoIosArrowRoundBack size={70} />
              </div>
              <div className="switchRightBtn">
                <IoIosArrowRoundForward size={70} />
              </div>
              <Slider {...settings}>
                <div className="slickPic1">
                  <div className="slickPic-box">
                    <Link to="/">
                      <img src={slickA6} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="slickPic2">
                  <div className="slickPic-box">
                    <Link to="/">
                      <img src={slickA3} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="slickPic3">
                  <div className="slickPic-box">
                    <Link to="/">
                      <img src={slickA2} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="slickPic4">
                  <div className="slickPic-box">
                    <Link to="/">
                      <img src={slickA4} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="slickPic5">
                  <div className="slickPic-box">
                    <Link to="/">
                      <img src={slickA5} alt="" />
                    </Link>
                  </div>
                </div>
                <div className="slickPic6">
                  <div className="slickPic-box">
                    <Link to="/">
                      <img src={slickA1} alt="" />
                    </Link>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------homepage4------ */}
      <div className="pro-outside4">
        <div className="pro-gray4">
          <div className="homepage4-doublePicA">
            <img src={homepic5} alt="" />
          </div>
          <div className="homepage4-doublePicB">
            <img src={homepic6} alt="" />
          </div>
          <div className="homepage4-wordBox">
            <div className="homepage4-wordA">
              <p>
                藝術———熱賣商品
                <span className="homepage4-wordB">
                  THIS
                </span>
              </p>
            </div>
            <div className="homepage4-wordC">
              <p>PRODUCT</p>
            </div>
            <div className="homepage4-wordD">
              <p className="indexTry">IS IN</p>
            </div>
          </div>
          <div className="pro-green2"></div>

          <div className="slickWidth2">
            {/* <div className="switchLeftBtn">
                <IoIosArrowRoundBack size={70} />
              </div>
              <div className="switchRightBtn">
                <IoIosArrowRoundForward size={70} />
              </div> */}
            <Slider {...settings2}>
              <div className="slickB1">
                <div className="slickPicB-box">
                  <Link to="/">
                    <div className="slickPicB-black"></div>
                    <img src={slickB1} alt="" />
                  </Link>
                </div>
              </div>
              <div className="slickB2">
                <div className="slickPicB-box">
                  <Link to="/">
                    <div className="slickPicB-black"></div>
                    <img src={slickB2} alt="" />
                  </Link>
                </div>
              </div>
              <div className="slickB3">
                <div className="slickPicB-box">
                  <Link to="/">
                    <div className="slickPicB-black"></div>
                    <img src={slickB3} alt="" />
                  </Link>
                </div>
              </div>
              <div className="slickB4">
                <div className="slickPicB-box">
                  <Link to="/">
                    <div className="slickPicB-black"></div>
                    <img src={slickB4} alt="" />
                  </Link>
                </div>
              </div>
              <div className="slickB5">
                <div className="slickPicB-box">
                  <Link to="/">
                    <div className="slickPicB-black"></div>
                    <img src={slickB5} alt="" />
                  </Link>
                </div>
              </div>
              <div className="slickB6">
                <div className="slickPicB-box">
                  <Link to="/">
                    <div className="slickPicB-black"></div>
                    <img src={slickB6} alt="" />
                  </Link>
                </div>
              </div>
            </Slider>
          </div>
          <Link to="/">
            <div className="pro-watchAll">
              <p className="pro-watchAllWord">WATCH ALL</p>
            </div>
          </Link>
        </div>
      </div>
      {/* ------------------homepage5------ */}
      <div className="pro-outside5">
        <div className="pro-gray5"></div>
      </div>
    </>
  )
}

export default Product
