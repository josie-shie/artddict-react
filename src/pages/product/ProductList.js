import React from 'react'
import { Link } from 'react-router-dom'
import '../../bootstrap/css/bootstrap.css'
import { Row } from 'react-bootstrap'
import {} from 'react-icons/cg'
import './style/ProductList.css'
// -----------svg---------
import logobk from './svg/logobk.svg'
import { GoSearch } from 'react-icons/go'
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from 'react-icons/io'
// ---------picture------------
import listtitle from './img/productList/listtitle.jpeg'
import productPic1 from './img/productList/productPic1.jpeg'
function ProductList() {
  return (
    <>
      <div className="prolist-full">
        <div className="prolist-titlepic">
          <img src={listtitle} alt="" />
          <div className="prolist-titleword d-flex">
            <div className="prolist-ArtDdictlogo ">
              <img src={logobk} alt="" />
            </div>
            <div className="prolist-titlewordA col-12">
              <p>
                書寫的藝
                <span className="prolist-zzzzzz">術</span>
              </p>
            </div>
            <div className="prolist-titlewordB col-12">
              <p>在ArtDDict探索藝術品</p>
            </div>
            <div className="col-12 d-flex prolist-justify">
              <button className="prolist-shopnowBtn ">
                <p>SHOP NOW</p>
              </button>
            </div>
          </div>
        </div>
        <div className="prolist-wordBox">
          <div className="prolist-quote">
            <p>ART GIVES US WINGS AND TAKE US FAR</p>
          </div>
          <div className="prolist-quote2">
            <p>-PICASSO-</p>
          </div>
        </div>
      </div>

      {/* -------------------------Part2------ */}
      <div className="prolist-full2">
        <div className="prolist-row">
          <div className="prolist-topOflist">
            <div className="prolist-breadbox">
              <div className="prolist-bread">
                <p className="prolist-breadwordall">
                  <Link to="/product">
                    <span className="prolist-breadwordA">
                      商品首頁
                    </span>
                  </Link>
                  /
                  <Link>
                    <span className="prolist-breadwordB">
                      美術館商品
                    </span>
                  </Link>
                </p>
              </div>
            </div>
            <div className="prolist-topofmiddle">
              <div className="prolist-filter d-flex ">
                <div className="prolist-arrangeAndIcon d-flex col-4">
                  <div
                    className="ed-select-box cn-font col-6 p-0 d-flex
              "
                  >
                    <h6 className="col-5 px-0 text-center pro-filterWordA">
                      排列
                    </h6>
                    <select
                      className="ed-select col-7 pro-filterWord"
                      name=""
                      id=""
                    >
                      <option
                        value=""
                        className="pro-filterWord"
                      >
                        請選擇
                      </option>
                      <option
                        value=""
                        className="pro-filterWord"
                      >
                        價格
                      </option>
                      <option
                        value=""
                        className="pro-filterWord"
                      >
                        oooo
                      </option>
                    </select>
                  </div>
                  <div className="prolist-searchIcon">
                    <GoSearch size={30} />
                  </div>
                </div>

                <div className="priceRangeBox d-flex">
                  <div className="pro-priceRange">
                    <p className="pro-filterWord ">
                      PRICERANGE
                    </p>
                  </div>
                  {/* 要用Jq做 */}
                  <div className="prolist-sliderbox d-flex pro-filterWord">
                    0
                    <input
                      type="range"
                      min="0"
                      max="3000"
                      step="500"
                      className="prolist-slider"
                      id="myRange"
                    />
                    3000
                  </div>
                </div>
                {/* 要用Jq做 */}
              </div>
            </div>
            <div className="pro-showing">
              <p className="pro-filterWord">
                showing 1-9 of 27
              </p>
            </div>
          </div>

          {/* --------------------Category------- */}
          <div className="prolist-productAndCategory d-flex">
            <div className="prolist-leftSide">
              <Link style={{ textDecoration: 'none' }}>
                <div className="museumProduct">
                  <p>美術館商品</p>
                </div>
              </Link>
              <Link style={{ textDecoration: 'none' }}>
                <div className="newArrival">
                  <p>新品上市</p>
                </div>
              </Link>
              <Link style={{ textDecoration: 'none' }}>
                <div className="hotProduct">
                  <p>暢銷商品</p>
                </div>
              </Link>
              <Link style={{ textDecoration: 'none' }}>
                <div className="pro-clothes">
                  <p>服飾</p>
                </div>
              </Link>
              <Link style={{ textDecoration: 'none' }}>
                <div className="pro-furniture">
                  <p>家飾</p>
                </div>
              </Link>
              <Link style={{ textDecoration: 'none' }}>
                <div className="pro-stationery">
                  <p>文具</p>
                </div>
              </Link>
              <Link>
                <div className="pro-books">
                  <p>書籍</p>
                </div>
              </Link>
              <Link style={{ textDecoration: 'none' }}>
                <div className="pro-accessories">
                  <p>配件</p>
                </div>
              </Link>
              <Link style={{ textDecoration: 'none' }}>
                <div className="pro-casual">
                  <p>休閒娛樂</p>
                </div>
              </Link>
            </div>

            {/* ------------商品區------------ */}
            <div className="prolist-rightSide">
              <div className="d-flex justify-content-between flex-wrap">
                {/* ---------------------- */}
                <div className="prolist-card ">
                  <div className="prolist-cardTop"></div>
                  <div className="prolist-imgBorderBox">
                    <div className="prolist-imgBox">
                      <img src={productPic1} alt="" />
                    </div>
                    <div className="prolist-blackBar"></div>
                  </div>
                  <div className="prolist-cardWordBox d-flex">
                    <div className="prolist-cardProName">
                      <p>蒙德里安之杯</p>
                    </div>
                    <div className="prolist-cardProPrice">
                      <p>NT$490</p>
                    </div>
                  </div>
                </div>
                {/* ---x2-- */}
                <div className="prolist-card ">
                  <div className="prolist-cardTop"></div>
                  <div className="prolist-imgBorderBox">
                    <div className="prolist-imgBox">
                      <img src={productPic1} alt="" />
                    </div>
                    <div className="prolist-blackBar"></div>
                  </div>
                  <div className="prolist-cardWordBox d-flex">
                    <div className="prolist-cardProName">
                      <p>莫內 睡蓮 T恤</p>
                    </div>
                    <div className="prolist-cardProPrice">
                      <p>NT$490</p>
                    </div>
                  </div>
                </div>
                {/* ---x3-- */}
                <div className="prolist-card">
                  <div className="prolist-cardTop"></div>
                  <div className="prolist-imgBorderBox">
                    <div className="prolist-imgBox">
                      <img src={productPic1} alt="" />
                    </div>
                    <div className="prolist-blackBar"></div>
                  </div>
                  <div className="prolist-cardWordBox d-flex">
                    <div className="prolist-cardProName">
                      <p>莫內 睡蓮 T恤</p>
                    </div>
                    <div className="prolist-cardProPrice">
                      <p>NT$490</p>
                    </div>
                  </div>
                </div>
                {/* ------------ */}
                {/* ---card-- */}
                <div className="prolist-card">
                  <div className="prolist-cardTop"></div>
                  <div className="prolist-imgBorderBox">
                    <div className="prolist-imgBox">
                      <img src={productPic1} alt="" />
                    </div>
                    <div className="prolist-blackBar"></div>
                  </div>
                  <div className="prolist-cardWordBox d-flex">
                    <div className="prolist-cardProName">
                      <p>莫內 睡蓮 T恤</p>
                    </div>
                    <div className="prolist-cardProPrice">
                      <p>NT$490</p>
                    </div>
                  </div>
                </div>
                {/* ------------ */}
                {/* ---card-- */}
                <div className="prolist-card">
                  <div className="prolist-cardTop"></div>
                  <div className="prolist-imgBorderBox">
                    <div className="prolist-imgBox">
                      <img src={productPic1} alt="" />
                    </div>
                    <div className="prolist-blackBar"></div>
                  </div>
                  <div className="prolist-cardWordBox d-flex">
                    <div className="prolist-cardProName">
                      <p>莫內 睡蓮 T恤</p>
                    </div>
                    <div className="prolist-cardProPrice">
                      <p>NT$490</p>
                    </div>
                  </div>
                </div>
                {/* ------------ */}
                {/* ---card-- */}
                <div className="prolist-card">
                  <div className="prolist-cardTop"></div>
                  <div className="prolist-imgBorderBox">
                    <div className="prolist-imgBox">
                      <img src={productPic1} alt="" />
                    </div>
                    <div className="prolist-blackBar"></div>
                  </div>
                  <div className="prolist-cardWordBox d-flex">
                    <div className="prolist-cardProName">
                      <p>莫內 睡蓮 T恤</p>
                    </div>
                    <div className="prolist-cardProPrice">
                      <p>NT$490</p>
                    </div>
                  </div>
                </div>
                {/* ------------ */}
                {/* ---card-- */}
                <div className="prolist-card">
                  <div className="prolist-cardTop"></div>
                  <div className="prolist-imgBorderBox">
                    <div className="prolist-imgBox">
                      <img src={productPic1} alt="" />
                    </div>
                    <div className="prolist-blackBar"></div>
                  </div>
                  <div className="prolist-cardWordBox d-flex">
                    <div className="prolist-cardProName">
                      <p>莫內 睡蓮 T恤</p>
                    </div>
                    <div className="prolist-cardProPrice">
                      <p>NT$490</p>
                    </div>
                  </div>
                </div>
                {/* ------------ */}
                {/* ---card-- */}
                <div className="prolist-card">
                  <div className="prolist-cardTop"></div>
                  <div className="prolist-imgBorderBox">
                    <div className="prolist-imgBox">
                      <img src={productPic1} alt="" />
                    </div>
                    <div className="prolist-blackBar"></div>
                  </div>
                  <div className="prolist-cardWordBox d-flex">
                    <div className="prolist-cardProName">
                      <p>莫內 睡蓮 T恤</p>
                    </div>
                    <div className="prolist-cardProPrice">
                      <p>NT$490</p>
                    </div>
                  </div>
                </div>
                {/* ------------ */}
                {/* ---card-- */}
                <div className="prolist-card">
                  <div className="prolist-cardTop"></div>
                  <div className="prolist-imgBorderBox">
                    <div className="prolist-imgBox">
                      <img src={productPic1} alt="" />
                    </div>
                    <div className="prolist-blackBar"></div>
                  </div>
                  <div className="prolist-cardWordBox d-flex">
                    <div className="prolist-cardProName">
                      <p>莫內 睡蓮 T恤</p>
                    </div>
                    <div className="prolist-cardProPrice">
                      <p>NT$490</p>
                    </div>
                  </div>
                </div>
                {/* ------------ */}
              </div>
              {/* --------------商品卡片截止線----- */}
              <div className="prolist-switchPage">
                <Row className="justify-content-center eng-font-regular mt-1 py-5">
                  <Link className="ed-pagenum mx-3">
                    <IoIosArrowBack />
                  </Link>
                  <Link className="ed-pagenum mx-3">
                    <p>1</p>
                  </Link>
                  <Link className="ed-pagenum mx-3">
                    <p>2</p>
                  </Link>
                  <Link className="ed-pagenum mx-3">
                    <p>3</p>
                  </Link>
                  <Link className="ed-pagenum mx-3">
                    <p>4</p>
                  </Link>
                  <Link className="ed-pagenum mx-3">
                    <p>5</p>
                  </Link>
                  <Link className="ed-pagenum mx-3">
                    <IoIosArrowForward />
                  </Link>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList
