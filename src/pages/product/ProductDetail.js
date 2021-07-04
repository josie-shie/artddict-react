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
import { BiPlus } from 'react-icons/bi'
import { RiSubtractLine } from 'react-icons/ri'
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
                      <button>S</button>
                      <button>M</button>
                      <button>L</button>
                    </div>
                    <div className="proDe-sizeCheck">
                      <Link
                        style={{ textDecoration: 'none' }}
                      >
                        <p>尺寸對照表</p>
                      </Link>
                    </div>
                  </div>
                  <div className="proDe-proId">
                    <p> 產品編號#886886</p>
                  </div>
                  <div className="proDe-countAndAdd d-flex">
                    <div className="proDe-numberAndBox d-flex">
                      <div className="proDe-numberName">
                        <p>數量</p>
                      </div>
                      <div className="proDe-numberCount ">
                        <form action="">
                          <div className="d-flex proDe-CountBtn">
                            <button>
                              <RiSubtractLine size={30} />
                            </button>
                            <div className="proDe-spaceMid">
                              <p> 1</p>
                            </div>
                            <button>
                              <BiPlus size={30} />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="proDe-addToCart">
                      <button>
                        <p>加入購物車</p>
                      </button>
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
