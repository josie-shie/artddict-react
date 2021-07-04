import React from 'react'
import { Link } from 'react-router-dom'
import '../../bootstrap/css/bootstrap.css'
import {} from 'react-bootstrap'
import './style/ProductDetail.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

// -----------svg---------
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosHeart,
} from 'react-icons/io'
import logobk from './svg/logobk.svg'
// ---------picture------------
import product1 from './img/productDetail/product1.jpeg'
import product2 from './img/productDetail/product2.jpeg'
import product3 from './img/productDetail/product3.jpeg'

function ProductDetail() {
  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={`${product1}/abstract0${i + 1}.jpg`} />
        </a>
      )
    },
    dots: true,
    dotsClass: 'slick-dots slick-thumb',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <div className="proDe-full">
        <div className="d-flex">
          <div className="proDe-leftSide">
            <div>
              <h2>Custom Paging</h2>
              <Slider {...settings}>
                <div className=".proDe-slickPic">
                  <img src={product1 + '/abstract01.jpg'} />
                </div>
                <div>
                  <img src={product2 + '/abstract02.jpg'} />
                </div>
                <div>
                  <img src={product3 + '/abstract03.jpg'} />
                </div>
              </Slider>
            </div>
          </div>
          <div className="proDe-rightSide">
            <div className="proDe-rightSideBox">
              <div className="proDe-logo"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
