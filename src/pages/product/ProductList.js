import React from 'react'
import { Link } from 'react-router-dom'
import '../../bootstrap/css/bootstrap.css'
import {} from 'react-bootstrap'
import {} from 'react-icons/cg'
import './style/ProductList.css'
// -----------svg---------
import logobk from './svg/logobk.svg'
import { GoSearch } from 'react-icons/go'
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
                  <div>
                    <div className="ed-select-box cn-font p-1">
                      <div className="pr-3 pro-filterWord">
                        排列
                      </div>
                      <select
                        className="ed-select pl-2"
                        name=""
                        id=""
                      >
                        <option
                          style={{ color: '#707070' }}
                          value=""
                          className=" pl-4 pro-filterWord"
                        >
                          推薦
                        </option>
                        <option value="">價格嗨</option>
                        <option value="">價格嗨</option>
                      </select>
                    </div>
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
              <Link>
                <div className="museumProduct">
                  <p>美術館商品</p>
                </div>
              </Link>
              <Link>
                <div className="newArrival">
                  <p>新品上市</p>
                </div>
              </Link>
              <Link>
                <div className="hotProduct">
                  <p>暢銷商品</p>
                </div>
              </Link>
              <Link>
                <div className="pro-clothes">
                  <p>服飾</p>
                </div>
              </Link>
              <Link>
                <div className="pro-furniture">
                  <p>家飾</p>
                </div>
              </Link>
              <Link>
                <div className="pro-stationery">
                  <p>文具</p>
                </div>
              </Link>
              <Link>
                <div className="pro-books">
                  <p>書籍</p>
                </div>
              </Link>
              <Link>
                <div className="pro-accessories">
                  <p>配件</p>
                </div>
              </Link>
              <Link>
                <div className="pro-casual">
                  <p>休閒娛樂</p>
                </div>
              </Link>
            </div>

            {/* ------------商品區------------ */}
            <div className="prolist-rightSide">
              <div className="d-flex justify-content-between">
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
                      <p>莫內 睡蓮 T恤</p>
                    </div>
                    <div className="prolist-cardProPrice">
                      <p>490元</p>
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
                      <p>490元</p>
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
                      <p>490元</p>
                    </div>
                  </div>
                </div>
                {/* ------------ */}
              </div>
            </div>

            {/* ----------------商品卡片截止線----- */}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList
