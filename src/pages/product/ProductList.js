import { React, useEffect, useState, useRef } from 'react'
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
  const [products, setProducts] = useState([])
  const [proClass, setProClass] = useState('')
  const [clothes, setClothes] = useState('')

  async function getAllProductSQL() {
    const url = `http://localhost:6005/product/product-list/`

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // 設定資料
    setProducts(data)
  }
  useEffect(() => {
    getAllProductSQL()
  }, [])

  async function getClassBySQLnew() {
    const url = `http://localhost:6005/product/product-list/new`

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // 設定資料
    setProducts(data)
  }

  async function getClassBySQLhot() {
    const url = `http://localhost:6005/product/product-list/hot`

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // 設定資料
    setProducts(data)
  }

  async function getClassBySQLbooks() {
    const url = `http://localhost:6005/product/product-list/books`

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // 設定資料
    setProducts(data)
  }

  async function getClassBySQLfurniture() {
    const url = `http://localhost:6005/product/product-list/furniture`

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // 設定資料
    setProducts(data)
  }

  async function getClassBySQLclothes() {
    const url = `http://localhost:6005/product/product-list/clothes`

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // 設定資料
    setProducts(data)
  }

  async function getClassBySQLaccessories() {
    const url = `http://localhost:6005/product/product-list/accessories`

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // 設定資料
    setProducts(data)
  }

  async function getClassBySQLstationery() {
    const url = `http://localhost:6005/product/product-list/stationery`

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // 設定資料
    setProducts(data)
  }

  async function getClassBySQLcasual() {
    const url = `http://localhost:6005/product/product-list/casual`

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    // 設定資料
    setProducts(data)
  }

  const productListCard = products.map((pro) => {
    let trydd = JSON.parse(`${pro.proImg}`)
    return (
      <>
        <div className="prolist-card ">
          <div className="prolist-cardTop"></div>
          <div className="prolist-imgBorderBox">
            <div className="prolist-imgBox d-flex">
              <Link to="/" className="prolist-imgLink">
                <img
                  className="prolist-inImg"
                  src={`http://localhost:6005/productpics/${trydd}`}
                  alt=""
                />
              </Link>
            </div>
            <div className="prolist-blackBar"></div>
          </div>
          <div className="prolist-cardWordBox d-flex">
            <div className="prolist-cardProName">
              <p>{pro.proName}</p>
            </div>
            <div className="prolist-cardProPrice">
              <p>NT${pro.proPrice}</p>
            </div>
          </div>
        </div>
      </>
    )
  })

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
                        價格由高至低
                      </option>
                      <option
                        value=""
                        className="pro-filterWord"
                      >
                        價格由低至高
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
              <Link
                style={{ textDecoration: 'none' }}
                // to="/product/product-list"
                onClick={(e) => {
                  e.preventDefault()
                  getAllProductSQL()
                }}
              >
                <div className="museumProduct">
                  <p>美術館商品</p>
                </div>
              </Link>
              <Link
                style={{ textDecoration: 'none' }}
                // to="/product/product-list-newarrival"
                onClick={(e) => {
                  e.preventDefault()
                  getClassBySQLnew()
                }}
              >
                <div className="newArrival">
                  <p>新品上市</p>
                </div>
              </Link>
              <Link
                style={{ textDecoration: 'none' }}
                // to="/product/product-list-hotproduct"
                onClick={(e) => {
                  e.preventDefault()
                  getClassBySQLhot()
                }}
              >
                <div className="hotProduct">
                  <p>暢銷商品</p>
                </div>
              </Link>
              <Link
                style={{ textDecoration: 'none' }}
                // to="/product/product-list-clothes"
                onClick={(e) => {
                  e.preventDefault()
                  getClassBySQLclothes()
                }}
              >
                <div className="pro-clothes">
                  <p>服飾</p>
                </div>
              </Link>
              <Link
                style={{ textDecoration: 'none' }}
                // to="/product/product-list-furniture"
                onClick={(e) => {
                  e.preventDefault()
                  getClassBySQLfurniture()
                }}
              >
                <div className="pro-furniture">
                  <p>家飾</p>
                </div>
              </Link>
              <Link
                style={{ textDecoration: 'none' }}
                // to="/product/product-list-stationery"
                onClick={(e) => {
                  e.preventDefault()
                  getClassBySQLstationery()
                }}
              >
                <div className="pro-stationery">
                  <p>文具</p>
                </div>
              </Link>
              <Link
                // to="/product/product-list-books"
                style={{ textDecoration: 'none' }}
                onClick={(e) => {
                  e.preventDefault()
                  getClassBySQLbooks()
                }}
              >
                <div className="pro-books">
                  <p>書籍</p>
                </div>
              </Link>
              <Link
                style={{ textDecoration: 'none' }}
                // to="/product/product-list-accessories"
                onClick={(e) => {
                  e.preventDefault()
                  getClassBySQLaccessories()
                }}
              >
                <div className="pro-accessories">
                  <p>配件</p>
                </div>
              </Link>
              <Link
                style={{ textDecoration: 'none' }}
                // to="/product/product-list-casual"
                onClick={(e) => {
                  e.preventDefault()
                  getClassBySQLcasual()
                }}
              >
                <div className="pro-casual">
                  <p>休閒娛樂</p>
                </div>
              </Link>
            </div>

            {/* ------------商品區------------ */}
            <div className="prolist-rightSide">
              <div className="d-flex justify-content-between flex-wrap">
                {productListCard}
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
