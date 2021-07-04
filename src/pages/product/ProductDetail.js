import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../bootstrap/css/bootstrap.css'
import { Button, Collapse } from 'react-bootstrap'
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
  const [open, setOpen] = useState(true)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)
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
              {/* ------第一個+-------- */}
              <div className="proDe-appendPlus">
                <button
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  className="ed-detail-btn col-12 d-flex justify-content-center
                  cn-font p-0 my-3 "
                >
                  <p className="mr-auto proDe-titleName">
                    商品描述
                  </p>
                  <span>
                    <BiPlus size={50} />
                  </span>
                </button>
                <Collapse
                  in={open}
                  className="col-12 p-0  mb-5"
                >
                  <p
                    id="example-collapse-text"
                    className="proDe-invisibleWord"
                  >
                    1889年9月，荷蘭後印象派畫家文森特·梵谷（Vincent
                    van
                    Gogh）在畫布上用油畫了自畫像。這幅作品可能是梵谷的最後一幅自畫像，是在他離開法國南部聖雷米的普羅旺斯之前不久畫的。這幅畫現在在巴黎的奧賽博物館（Muséed'Orsay）展出。
                  </p>
                </Collapse>
              </div>
              {/* ---------第二個+------- */}
              <div className="proDe-appendPlus">
                <button
                  onClick={() => setOpen2(!open2)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open2}
                  className="ed-detail-btn col-12 d-flex justify-content-center
                  cn-font p-0 my-3 "
                >
                  <p className="mr-auto proDe-titleName">
                    商品規格
                  </p>
                  <span>
                    <BiPlus size={50} />
                  </span>
                </button>
                <Collapse
                  in={open2}
                  className="col-12 p-0  mb-5"
                >
                  <p
                    id="example-collapse-text"
                    className="proDe-invisibleWord"
                  >
                    123喵321
                  </p>
                </Collapse>
              </div>
              {/* ------------第三個----------- */}
              <div className="proDe-appendPlus">
                <button
                  onClick={() => setOpen3(!open3)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open3}
                  className="ed-detail-btn col-12 d-flex justify-content-center
                  cn-font p-0 my-3 "
                >
                  <p className="mr-auto proDe-titleName">
                    運費 & 退貨條款
                  </p>
                  <span>
                    <BiPlus size={50} />
                  </span>
                </button>
                <Collapse
                  in={open3}
                  className="col-12 p-0  mb-5"
                >
                  <p
                    id="example-collapse-text"
                    className="proDe-invisibleWord"
                  >
                    123喵321777777 777 777 777 77 77
                  </p>
                </Collapse>
              </div>

              {/* ------------商品評價zone------- */}
              <div className="proDe-commentsAndBar d-flex">
                <div className="proDe-commentsLeft">
                  <div className="proDe-commentsWord1">
                    <p>商品評價</p>
                  </div>
                  <div className="proDe-commentsNumAndStar d-flex ">
                    <p>5</p>
                    <div className="proDe-pushLeft">
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
                      <p className="proDe-underStarWord">
                        12則評論
                      </p>
                    </div>
                  </div>
                </div>
                <div className="proDe-commentsRight ">
                  <div className="proDe-commentsBar1 d-flex">
                    <p className="proDe-1">5星</p>
                    <input
                      type="range"
                      min="0"
                      className="pro-slider"
                      id="myRange"
                      value="100"
                    />
                    <p className="proDe-2">12(100%)</p>
                  </div>
                  <div className="proDe-commentsBar1 d-flex">
                    <p className="proDe-1">4星</p>
                    <input
                      type="range"
                      min="0"
                      className="pro-slider"
                      id="myRange"
                      value="50"
                    />
                    <p className="proDe-2">6(50%)</p>
                  </div>
                  <div className="proDe-commentsBar1 d-flex">
                    <p className="proDe-1">3星</p>
                    <input
                      type="range"
                      min="0"
                      className="pro-slider"
                      id="myRange"
                      value="0"
                    />
                    <p className="proDe-2">0(0%)</p>
                  </div>
                  <div className="proDe-commentsBar1 d-flex">
                    <p className="proDe-1">2星</p>
                    <input
                      type="range"
                      min="0"
                      className="pro-slider"
                      id="myRange"
                      value="0"
                    />
                    <p className="proDe-2">0(0%)</p>
                  </div>
                  <div className="proDe-commentsBar1 d-flex">
                    <p className="proDe-1">1星</p>
                    <input
                      type="range"
                      min="0"
                      className="pro-slider"
                      id="myRange"
                      value="0"
                    />
                    <p className="proDe-2">0(0%)</p>
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
