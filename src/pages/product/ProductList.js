import { React, useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import '../../bootstrap/css/bootstrap.css'
import { Row } from 'react-bootstrap'
import {} from 'react-icons/cg'
import './style/ProductList.css'
import $ from 'jquery'
//-----slider bar----------
import 'rc-tooltip/assets/bootstrap.css'
import Slider, { SliderTooltip } from 'rc-slider'
import 'rc-slider/assets/index.css'
import swal from 'sweetalert'

//--------change pages----------
import ReactPaginate from 'react-paginate'
import Cookies from 'universal-cookie'

// -----------svg---------
import logobk from './svg/logobk.svg'
import { GoSearch } from 'react-icons/go'
import {
  IoIosArrowBack,
  IoIosArrowForward,
} from 'react-icons/io'
import { IoIosHeart } from 'react-icons/io'

// ---------picture------------
import listtitle from './img/productList/listtitle.jpeg'
import productPic1 from './img/productList/productPic1.jpeg'
function ProductList() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [arrangement, setArrangement] = useState('')
  const [category, setCategory] = useState('allproduct')
  const [priceRange, setPriceRange] = useState(8000)
  const [page, setPage] = useState(1)
  const [totalCount, setTotalCount] = useState('')
  const [totalPages, setTotalPages] = useState('')
  const [showing1, setShowing1] = useState('')
  const [showing2, setShowing2] = useState('')
  const [sendBox, setSendBox] = useState(false)

  // ------------- for Gary---------
  const cookies = new Cookies()
  const [sizeGary, setSizeGary] = useState('')
  const [qtyNum, setQtyNum] = useState(1)
  const [sqlProductId, setSqlProductId] = useState('')
  const [toCart, setToCart] = useState('false')

  async function getClassPriceSearchByQuerySQL() {
    const url =
      'http://localhost:6005/product/productArr' +
      `?category=${category}` +
      `&search=${search}` +
      `&priceRange=${priceRange}` +
      `&arrangement=${arrangement}` +
      `&page=${page}`

    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    const totalCount = data['totalCount'].num
    const totalPages = data['totalPages']
    console.log(data)
    console.log('products', products)
    // 設定資料
    setProducts(data.productData)
    setShowing1(1 + 9 * (page - 1))
    setShowing2(data.productData.length + 9 * (page - 1))
    console.log(
      'data.productData[id]',
      data.productData['id']
    )
    console.log('products', products)
    if (totalCount) {
      setTotalCount(totalCount)
    }
    if (totalPages) {
      setTotalPages(totalPages)
    }
  }
  function handlePageClick(paginate) {
    let selected = paginate.selected
    setPage(selected + 1)
  }

  useEffect(() => {
    getClassPriceSearchByQuerySQL()
  }, [category, search, arrangement, priceRange])

  useEffect(() => {
    getClassPriceSearchByQuerySQL()
  }, [page])

  useEffect(() => {
    console.log(category, search, arrangement, priceRange)
  }, [category, search, arrangement, priceRange])

  $('.siblings').click(function () {
    $(this)
      .addClass('changeColors')
      .parent()
      .siblings()
      .children()
      .removeClass('changeColors')
      .removeClass('museumProduct')
  })

  $('.abc-Search').click(function () {
    setTimeout(function () {
      $('.aucd-Searchbox').addClass('helloSearch')
    }, 500)
    $('.abc-Search').addClass('proMove')
  })

  $('.prolist-imgBorderBox').mouseenter(function () {
    $(this).children().next().css({
      transform: 'translateY(-50px)',
      'transition-duration': '300ms',
    })
  })

  $('.prolist-imgBorderBox').mouseleave(function () {
    $('.pro-index-card-rect').css({
      transform: 'translateY(0px)',
      'transition-duration': '300ms',
    })
  })

  $('.pro-index-heart1').click(function () {
    let color = 0
    if (!color) {
      $(this).addClass('pro-index-heart2')
    }
    if (color) {
      $(this).removeClass('pro-index-heart2')
    }
  })

  // $('.pro-index-heart1').toggle(
  //   function () {
  //     $(this).css('color', '#81FC4D')
  //   },
  //   function () {
  //     $(this).css('color', 'white')
  //   }
  // )

  // ----------------加入購物車---------------
  /**
   * 更新 event Cookie
   *
   * @param {Object} product 欲改變的目標 event.
   * @param {number} quantityNum 欲更新event.qty到的數字.
   * @param {string} type 根據不同type，event.qty 更新方法不同
   *
   *
   */

  if (!toCart) {
    setTimeout(() => {
      console.log('executing timeout')
      setToCart(true)
    }, 1000)
  }

  const onCookie = (productid, quantityNum, type) => {
    console.log(type)
    if (sqlProductId) {
      let cookieProductId =
        productid.sqlProductId + '-' + type.sizeGary
      let updateCookie = []
      let cookieProduct = cookies.get('product') // 取得 event cookie

      if (cookieProduct) {
        // 如果有已存在的 event cookie
        // 查看cookie裡面的 event id
        const idSet = new Set()
        for (let i in cookieProduct) {
          idSet.add(cookieProduct[i].id)
        }
        // event 在 event cookie 中
        if (idSet.has(cookieProductId)) {
          for (let i in cookieProduct) {
            if (cookieProduct[i].id == cookieProductId) {
              // 如果event是從Input,數量直接到指定數字
              cookieProduct[i].qty += quantityNum.qtyNum
            }
          }
        } else {
          // 如果被改變的event 不在 event cookie 中
          // 初始數量為1
          let productjson = {}
          productjson.id = cookieProductId
          productjson.qty = quantityNum.qtyNum
          cookieProduct.push(productjson)
        }
        // 如果被改變後的event數量>0，加入在cookie 中
        for (let i in cookieProduct) {
          if (cookieProduct[i].qty > 0) {
            updateCookie.push(cookieProduct[i])
          }
        }
      } else {
        // 如果沒有已存在的 event cookie
        // 初始數量為1
        let productjson = {}
        productjson.id = cookieProductId
        productjson.qty = quantityNum.qtyNum
        updateCookie.push(productjson)
      }
      cookies.set('product', updateCookie, { path: '/' }) //更新Cookie
      console.log(updateCookie)
    }
  }
  // --------swal------------
  function checkCheck() {
    setTimeout(() => {
      setSendBox(false)
      swal({
        text: '成功加入購物車！',
        icon: 'success',
        button: false,
        timer: 3000,
      })
    }, 200)
  }

  function checkCheckheart() {
    setTimeout(() => {
      setSendBox(false)
      swal({
        text: '成功加入我的收藏！',
        icon: 'success',
        button: false,
        timer: 3000,
      })
    }, 200)
  }

  // -----------productId callback-----
  useEffect(() => {
    onCookie({ sqlProductId }, { qtyNum }, { sizeGary })
  }, [sqlProductId])

  const productListCard = products.map((pro) => {
    let trydd = JSON.parse(`${pro.proImg}`)
    const updateSpeed = () => {
      setSqlProductId(pro.proId)
    }

    return (
      <>
        <div className="prolist-card ">
          <div className="prolist-cardTop"></div>
          <div className="prolist-imgBorderBox">
            <div className="prolist-imgBox d-flex">
              <Link
                to={`/product/product-list/product-detail/${pro.id}`}
                className="prolist-imgLink"
                key={pro.id}
              >
                <img
                  className="prolist-inImg"
                  src={`http://localhost:6005/productpics/${trydd}`}
                  alt=""
                />
              </Link>
            </div>
            {/* <div className="prolist-blackBar"></div> */}
            <div className="pro-index-card-rect d-flex text-center proAddAndHeart">
              <div className="col-8 pro-border">
                <Link
                  style={{
                    textDecoration: 'none',
                    color: 'white',
                  }}
                  onClick={(e) => {
                    e.preventDefault()
                    console.log('123123123123')
                    updateSpeed()
                    checkCheck()
                  }}
                >
                  Add to cart
                </Link>
              </div>
              <div className="pro-index-heart col-4">
                <Link
                  style={{
                    decoration: 'none',
                    color: 'white',
                  }}
                >
                  <IoIosHeart
                    size={'20'}
                    className="pro-index-heart1"
                    onClick={(e) => {
                      e.preventDefault()
                      checkCheckheart()
                    }}
                  />
                </Link>
              </div>
            </div>
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

  // let showing1 = 1 + 9 * ({ page } - 1)
  // let showing2 = { products } + 9 * ({ page } - 1)

  // ------------------sliderbar--setting--
  const { Range } = Slider
  const style = { width: 700 }

  // const { createSliderWithTooltip } = Slider
  // const Range = createSliderWithTooltip(Slider.Range)
  // const { Handle } = Slider

  // const handle = (props) => {
  //   const { value, dragging, index, ...restProps } = props

  //   return (
  //     <SliderTooltip
  //       prefixCls="rc-slider-tooltip"
  //       overlay={`${value} %`}
  //       visible={dragging}
  //       placement="top"
  //       key={index}
  //       value={priceRange}
  //     >
  //       <Handle value={priceRange} {...restProps} />
  //     </SliderTooltip>
  //   )
  // }

  // useEffect(() => {
  //   console.log(`${value}`)
  // }, [])

  // ------------------sliderbar-setting---

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
          <div>
            {/* <div style={wrapperStyle}>
              <p>PRICE RANGE</p>
              <Range
                min={0}
                max={8000}
                step={2000}
                marks={{
                  0: 0,
                  2000: 2000,
                  4000: 4000,
                  6000: 6000,
                  8000: 8000,
                }}
                value={[priceRange, priceRange2]}
                // defaultValue={[4000, 8000]}
                tipFormatter={(value) => `${value}`}
                onAfterChange={(value) =>
                  setPriceRange(value)
                }
              />
            </div> */}
          </div>
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
                  <Link
                    to="/product"
                    style={{ textDecoration: 'none' }}
                  >
                    <span className="prolist-breadwordA">
                      商品首頁
                    </span>
                  </Link>
                  /
                  <span className="prolist-breadwordB">
                    美術館商品
                  </span>
                </p>
              </div>
            </div>
            <div className="prolist-topofmiddle">
              <div className="prolist-filter d-flex ">
                <div className="prolist-arrangeAndIcon d-flex col-3">
                  <div
                    className="ed-select-box cn-font col-9 p-0 d-flex
              "
                  >
                    <h6 className="col-5 px-0 text-center pro-filterWordA">
                      價格
                    </h6>
                    <select
                      className="ed-select col-7 pro-filterWord"
                      name="name"
                      id="id"
                      onChange={(e) => {
                        setArrangement(e.target.value)
                      }}
                    >
                      <option
                        value=""
                        className="pro-filterWord"
                      >
                        請選擇
                      </option>
                      <option
                        value="highToLow"
                        className="pro-filterWord"
                      >
                        高至低
                      </option>
                      <option
                        value="lowToHigh"
                        className="pro-filterWord"
                      >
                        低至高
                      </option>
                    </select>
                  </div>
                  {/* <div className="prolist-searchIcon">
                    <GoSearch size={30} />
                  </div> */}
                  <form action="">
                    <div className="prolist-searchIcon d-flex">
                      <button
                        className="abc-Search"
                        onClick={(e) => {
                          e.preventDefault()
                        }}
                      >
                        <GoSearch size={30} />
                      </button>
                      <input
                        className="aucd-Searchbox proClickMe"
                        value={search}
                        onChange={(event) => {
                          setSearch(event.target.value)
                        }}
                      ></input>
                    </div>
                  </form>
                </div>

                <div className="priceRangeBox d-flex">
                  {/* 要用Jq做 */}

                  <div className="prolist-sliderbox d-flex pro-filterWord">
                    <div style={style}>
                      <p>PRICE RANGE</p>
                      <Range
                        min={0}
                        max={8000}
                        step={2000}
                        marks={{
                          0: 0,
                          2000: 2000,
                          4000: 4000,
                          6000: 6000,
                          8000: 8000,
                        }}
                        allowCross={false}
                        defaultValue={[0, 8000]}
                        onAfterChange={(e) => {
                          setPriceRange(JSON.stringify(e))
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pro-showing">
              <p className="pro-filterWord">
                showing {showing1}-{showing2} of{' '}
                {totalCount}
              </p>
            </div>
          </div>

          {/* --------------------Category------- */}
          <div className="prolist-productAndCategory d-flex">
            <div className="prolist-leftSide">
              <Link
                style={{ textDecoration: 'none' }}
                onClick={(e) => {
                  e.preventDefault()
                  setCategory('allproduct')
                }}
              >
                <div className="museumProduct2 museumProduct siblings">
                  美術館商品
                </div>
              </Link>
              <Link
                style={{ textDecoration: 'none' }}
                onClick={(e) => {
                  e.preventDefault()
                  setCategory('newarrival')
                }}
              >
                <div className="newArrival siblings">
                  新品上市
                </div>
              </Link>
              <Link
                style={{ textDecoration: 'none' }}
                onClick={(e) => {
                  e.preventDefault()
                  setCategory('hotproduct')
                }}
              >
                <div className="hotProduct siblings">
                  暢銷商品
                </div>
              </Link>
              <Link
                style={{ textDecoration: 'none' }}
                onClick={(e) => {
                  e.preventDefault()
                  setCategory('clothes')
                }}
              >
                <div className="pro-clothes siblings">
                  服飾
                </div>
              </Link>
              <Link
                style={{ textDecoration: 'none' }}
                onClick={(e) => {
                  e.preventDefault()
                  setCategory('furniture')
                }}
              >
                <div className="pro-furniture siblings">
                  家飾
                </div>
              </Link>
              <Link
                style={{ textDecoration: 'none' }}
                onClick={(e) => {
                  e.preventDefault()
                  setCategory('stationery')
                }}
              >
                <div className="pro-stationery siblings">
                  文具
                </div>
              </Link>
              <Link
                style={{ textDecoration: 'none' }}
                onClick={(e) => {
                  e.preventDefault()
                  setCategory('books')
                }}
              >
                <div className="pro-books siblings">
                  書籍
                </div>
              </Link>
              <Link
                style={{ textDecoration: 'none' }}
                onClick={(e) => {
                  e.preventDefault()
                  setCategory('accessories')
                }}
              >
                <div className="pro-accessories siblings">
                  配件
                </div>
              </Link>
              <Link
                style={{ textDecoration: 'none' }}
                onClick={(e) => {
                  e.preventDefault()
                  setCategory('casual')
                }}
              >
                <div className="pro-casual siblings">
                  休閒娛樂
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
                  <ReactPaginate
                    pageCount={totalPages}
                    pageRangeDisplayed={4}
                    marginPagesDisplayed={0}
                    previousLabel={<IoIosArrowBack />}
                    nextLabel={<IoIosArrowForward />}
                    breakLabel={''}
                    containerClassName={
                      'justify-content-center eng-font-regular  py-5 row'
                    }
                    pageLinkClassName={'ed-pagenum mx-3'}
                    previousClassName={'ed-pagenum mx-3'}
                    nextClassName={'ed-pagenum mx-3'}
                    onPageChange={handlePageClick}
                    activeLinkClassName={
                      'ed-pagenum-active'
                    }
                  />
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
