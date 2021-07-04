import React from 'react'
import { Link } from 'react-router-dom'
import '../../bootstrap/css/bootstrap.css'
import { Button } from 'react-bootstrap'
import './style/ProductDetail.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

// -----------svg---------
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdHeart,
  IoIosStar,
} from 'react-icons/io'
import lightLogo from './svg/lightLogo.svg'
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
              <div className="proDe-logoTopBox d-flex">
                <div className="proDe-logoBox">
                  <img src={lightLogo} alt="" />
                  <p>
                    商店 / 服飾 /
                    <span>威廉 玫瑰粉 披肩</span>
                  </p>
                </div>
              </div>
              {/* --------------商品名稱SIZE zone------- */}

              <div className="proDe-chooseBox">
                <div className="proDe-nameAndHeart d-flex">
                  <div className="proDe-name">
                    <p>威廉 玫瑰粉 披肩</p>
                  </div>
                  <div className="proDe-heartlogo">
                    <Link style={{ decoration: 'none' }}>
                      <IoMdHeart
                        size={40}
                        color={'#FFFFFF'}
                      />
                    </Link>
                  </div>
                </div>
                <div className="proDe-starsComment d-flex">
                  <div className="proDe-stars">
                    <IoIosStar
                      size={30}
                      color={'#1D0AFF'}
                    />
                    <IoIosStar
                      size={30}
                      color={'#1D0AFF'}
                    />
                    <IoIosStar
                      size={30}
                      color={'#1D0AFF'}
                    />
                    <IoIosStar
                      size={30}
                      color={'#1D0AFF'}
                    />
                    <IoIosStar
                      size={30}
                      color={'#1D0AFF'}
                    />
                  </div>
                  <div className="proDe-scoresAndWrite">
                    <p>
                      5(12)
                      <Link
                        style={{ textDecoration: 'none' }}
                      >
                        <span className="proDe-writee">
                          撰寫評論
                        </span>
                      </Link>
                    </p>
                  </div>
                </div>
                {/* -------------price-------- */}

                <div className="proDe-productPrice">
                  <div className="proDe-productPricee">
                    <p>售價：NT$ 780</p>
                  </div>
                </div>

                <div className="proDe-sizeBtnBox">
                  <div className="proDe-sizeBtnBox2 d-flex">
                    <div className="proDe-sizeBtn d-flex">
                      <Button
                        variant="outline-dark"
                        size="lg"
                      >
                        S
                      </Button>
                      <Button
                        variant="outline-dark"
                        size="lg"
                      >
                        M
                      </Button>
                      <Button
                        variant="outline-dark"
                        size="lg"
                      >
                        L
                      </Button>
                    </div>
                    <div className="proDe-sizeCheck">
                      <Link
                        style={{ textDecoration: 'none' }}
                      >
                        <p>尺寸對照表</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetail
