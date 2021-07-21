import {
  React,
  useState,
  useEffect,
  Component,
} from 'react'
import ReactDOM, { render } from 'react-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import $ from 'jquery'
import Cookies from 'universal-cookie'

import { Link, withRouter } from 'react-router-dom'
import '../../bootstrap/css/bootstrap.css'
import { Button, Collapse, Modal } from 'react-bootstrap'
import './style/ProductDetail.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import ReactStars from 'react-rating-stars-component'
import swal from 'sweetalert'
import DelayLink from 'react-delay-link'

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
import try1 from './img/productDetail/try1.jpeg'
import try2 from './img/productDetail/try2.jpeg'
import SizePic from './img/productDetail/SizePic.png'
import picsize from './img/productDetail/picsize.png'

function ProductDetail(props) {
  const id = props.match.params.id
  // console.log(id)

  const [open, setOpen] = useState(true)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)
  const [proId, setProId] = useState('1')
  const [proName, setProName] = useState('')
  const [proPrice, setProPrice] = useState('')
  const [proClass, setProClass] = useState('')
  const [proDes, setProDes] = useState('')
  const [proMutImgTry, setProMutImgTry] = useState([])
  const [comments, setComments] = useState('')
  const [product, setProduct] = useState([])
  const [proNum, setProNum] = useState('')
  const [starValue, setStarValue] = useState('')
  const [userId, setUserId] = useState('tascup1')
  const [commentsBlock, setCommentsBlock] = useState([])
  const [starNum, setStarNum] = useState('')
  const [commentsNum, setCommentsNum] = useState('')
  const [starsAverage, setStarsAverage] = useState('')
  const [tryyy, setTryyy] = useState(false)
  const [sendBox, setSendBox] = useState(false)
  const [sendBox2, setSendBox2] = useState(false)
  const [recomments, setRecomments] = useState(false)
  const [sizeSelect, setSizeSelect] = useState('')
  const [newCom, setNemCom] = useState('')
  //---------尺寸對照表
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // ------------- for Gary---------
  const cookies = new Cookies()
  const [sizeGary, setSizeGary] = useState('')
  const [qtyNum, setQtyNum] = useState(1)
  const [sqlProductId, setSqlProductId] = useState('')

  const fadeAnimationHandler: AnimationHandler = (
    props,
    state
  ): AnimationHandlerResponse => {
    const transitionTime = props.transitionTime + 'ms'
    const transitionTimingFunction = 'ease-in-out'

    let slideStyle: React.CSSProperties = {
      position: 'absolute',
      display: 'block',
      zIndex: -2,
      minHeight: '100%',
      opacity: 0,
      top: 0,
      right: 0,
      left: 1000,
      bottom: 0,
      transitionTimingFunction: transitionTimingFunction,
    }

    if (!state.swiping) {
      slideStyle = {
        ...slideStyle,
        WebkitTransitionDuration: transitionTime,
      }
    }

    return {
      slideStyle,
      selectedStyle: {
        ...slideStyle,
        opacity: 1,
        position: 'relative',
      },
      prevStyle: { ...slideStyle },
    }
  }

  async function getProductIdServer() {
    const url = `http://localhost:6005/product/product-list/${id}`

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    const imgData = data.proMutImg
    const imgArr = JSON.parse(imgData)
    // console.log(data)
    // console.log(imgData)
    // console.log(imgArr)

    setProMutImgTry(imgArr)

    // 設定資料
    console.log('data', data)
    setProduct(data)
    setProId(data.proId)
    setProName(data.proName)
    setProPrice(data.proPrice)
    setProDes(data.proDes)
    setProClass(data.proClass)
    setProNum(id)
    setSqlProductId(data.proId)

    // setStarValue(data.starValue)
    // setUserId(data.userId)
    // setComments(data.comments)
    console.log('proNum', proNum)
  }
  useEffect(() => {
    getProductIdServer()
  }, [])
  // console.log(proMutImgTry)

  async function getCommentsServer() {
    const url = `http://localhost:6005/product/commentsTry?id=${id}`

    // 注意header資料格式要設定，伺服器才知道是json格式
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
    console.log('comments data', data)
    const commentsLength = data.length
    console.log('commentsLength', commentsLength)
    setCommentsNum(data.length)
    console.log('commentsNum', commentsNum)
    setStarValue(data.starValue)
    setUserId(data.userId)
    setComments(data.comments)
    console.log('proNum', proNum)
    setCommentsBlock(data)
  }
  useEffect(() => {
    getCommentsServer()
  }, [])

  let takePicOut = proMutImgTry.map((e) => {
    return (
      <img
        src={`http://localhost:6005/productpics/${e}`}
        alt=""
      />
    )
  })

  async function addcommentsSever() {
    const newData = {
      proNum,
      userId,
      comments,
      starValue,
    }
    const url = 'http://localhost:6005/product/upload'
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const response = await fetch(request)
    const data = await response.json()
    const id = props.match.params.id
    console.log('伺服器回傳的json資料', data)
    setUserId('tascup1')

    setTimeout(() => {
      setSendBox(false)
      swal({
        text: '留言成功',
        icon: 'success',
        button: false,
        timer: 3000,
      })
    }, 500)
    setTimeout(() => {
      props.history.push(
        `/product/product-list/product-detail/${id}`
      )
    }, 500)

    setProNum(id)
    setUserId('tascup1')
  }

  // --------swal------------確認加入購物車
  function checkCheck() {
    setTimeout(() => {
      setSendBox2(false)
      swal({
        text: '成功加入購物車！',
        icon: 'success',
        button: false,
        timer: 3000,
      })
    }, 200)
  }

  //----------送出留言重新撈資料
  useEffect(() => {
    setRecomments(false)
    getCommentsServer()
  }, [recomments])

  //--------------數量限制
  useEffect(() => {
    if (qtyNum < 1) {
      setQtyNum(1)
    }
    if (qtyNum > 50) {
      setQtyNum(50)
    }
  }, [qtyNum])

  const commentsCard = commentsBlock.map((pro) => {
    return (
      <>
        <div className="proDe-commentsCard d-flex">
          <div className="proDe-commentsCardLeft">
            <div className="proDe-starsSSSSS">
              <ReactStars
                count={5}
                edit={false}
                value={pro.starValue}
                activeColor="#1D0AFF"
                size={30}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={
                  <i className="fa fa-star-half-alt"></i>
                }
                fullIcon={<i className="fa fa-star"></i>}
              />
            </div>
            <p className="proDe-userName">{pro.userId}</p>
            <p className="proDe-userDate">
              {pro.created_at.split('T')[0]}
            </p>
          </div>
          <div className="proDe-commentsCardRight d-flex">
            <div className="proDe-commentsContent d-flex">
              <p>{pro.comments}</p>
            </div>
          </div>
        </div>
      </>
    )
  })
  async function getstarSumServer() {
    const url = `http://localhost:6005/product/commentsValue?id=${id}`

    // 注意header資料格式要設定，伺服器才知道是json格式
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
    console.log('setStarNum', data)
    const starValueSum = data[0].starTotal
    setStarNum(starValueSum)
    console.log('starValueSum', starValueSum)
    console.log('starNum', starNum)
    console.log(
      'starNum / commentsNum',
      starNum / commentsNum
    )
    setStarsAverage(starNum / commentsNum)
    console.log('StarsAverage', starsAverage)
  }

  useEffect(() => {
    getstarSumServer()
  }, [starsAverage])

  // useEffect(() => {
  //   getstarSumServer()
  // }, [recomments])

  function reactStars() {
    return (
      <>
        <ReactStars
          count={5}
          edit={false}
          value={starsAverage}
          // onChange={(e) => {
          //   setRating(trymeme)
          // }}
          activeColor="#1D0AFF"
          size={40}
          isHalf={true}
          emptyIcon={<i className="far fa-star"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
        />
      </>
    )
  }

  useEffect(() => {
    reactStars()
  }, [])

  if (!tryyy) {
    setTimeout(() => {
      console.log('executing timeout')
      setTryyy(true)
    }, 1500)
  }

  function refreshPage() {
    window.setTimeout(function () {
      window.location.reload()
    }, 3000)
  }

  // let starsStars = setTimeout(() => {
  //   console.log('Hello, World!')
  // }, 3000)
  // useEffect(() => {
  //   reactStars()
  //   console.log('didmount', starsAverage)
  // }, [starsAverage])

  $('.sizeChoose').click(function () {
    $(this)
      .addClass('sizeSelect')
      .siblings()
      .removeClass('sizeSelect')
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

  const onCookie = (productid, quantityNum, type) => {
    console.log(type)
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

  return (
    <>
      <div className="proDe-full">
        <div className="d-flex proDe-move">
          <div className="proDe-leftSide">
            <Carousel className="proDe-wall">
              {takePicOut}
            </Carousel>
          </div>
          <div className="proDe-rightSide">
            <div className="proDe-rightSideBox">
              <div className="proDe-logoTopBox ">
                <div className="proDe-logoBox">
                  <img src={lightLogo} alt="" />
                </div>
                <div>
                  <p className="proBread">
                    <Link
                      to="/product/"
                      style={{ textDecoration: 'none' }}
                    >
                      <span className="proBread1">
                        商品首頁
                      </span>{' '}
                    </Link>{' '}
                    /{' '}
                    <Link
                      to="/product/product-list"
                      style={{ textDecoration: 'none' }}
                    >
                      <span className="proBread1">
                        商店
                      </span>{' '}
                    </Link>{' '}
                    /{' '}
                    <span className="proBread2">
                      {proName}
                    </span>
                  </p>
                </div>
              </div>
              {/* --------------商品名稱SIZE zone------ */}

              <div className="proDe-chooseBox">
                <div className="proDe-nameAndHeart d-flex">
                  <div className="proDe-name">
                    <p>{proName}</p>
                  </div>
                  <div className="proDe-heartlogo">
                    <Link
                      style={{
                        decoration: 'none',
                        color: 'white',
                      }}
                    >
                      <IoMdHeart
                        className="pro-index-heart1"
                        size={40}
                        onClick={(e) => {
                          e.preventDefault()
                          checkCheckheart()
                        }}
                      />
                    </Link>
                  </div>
                </div>
                <div className="proDe-starsComment d-flex">
                  <div className="proDe-stars">
                    {tryyy === true ? (
                      <ReactStars
                        count={5}
                        edit={false}
                        value={starsAverage}
                        // onChange={(e) => {
                        //   setRating(trymeme)
                        // }}
                        activeColor="#1D0AFF"
                        size={40}
                        isHalf={true}
                        emptyIcon={
                          <i className="far fa-star"></i>
                        }
                        halfIcon={
                          <i className="fa fa-star-half-alt"></i>
                        }
                        fullIcon={
                          <i className="fa fa-star"></i>
                        }
                      />
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="proDe-scoresAndWrite">
                    <p>
                      {isNaN(starsAverage) === true
                        ? '0'
                        : tryyy === true
                        ? starsAverage.toFixed(1)
                        : ''}
                      ({commentsNum})
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
                    <p>售價：NT${proPrice}</p>
                  </div>
                </div>

                <div className="proDe-sizeBtnBox">
                  {/* ----------SIZE---- */}
                  {proClass === 'C03' ? (
                    <div className="proDe-sizeBtnBox2 d-flex">
                      <div className="proDe-sizeBtnA d-flex">
                        <form
                          className="proDe-sizeBtnA d-flex"
                          action=""
                        >
                          <button
                            className="proDe-sizeBtn sizeChoose"
                            onClick={(e) => {
                              e.preventDefault()
                              setSizeGary('S')
                            }}
                          >
                            S
                          </button>
                          <button
                            className="proDe-sizeBtn sizeChoose"
                            onClick={(e) => {
                              e.preventDefault()
                              setSizeGary('M')
                            }}
                          >
                            M
                          </button>
                          <button
                            className="proDe-sizeBtn sizeChoose"
                            onClick={(e) => {
                              e.preventDefault()
                              setSizeGary('L')
                            }}
                          >
                            L
                          </button>
                        </form>
                      </div>
                      <div className="proDe-sizeCheck">
                        <Link
                          style={{ textDecoration: 'none' }}
                          onClick={handleShow}
                        >
                          <p>尺寸對照表</p>
                        </Link>

                        <Modal
                          show={show}
                          onHide={handleClose}
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>
                              尺寸對照表
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            {' '}
                            <div className="proDe-sizepic">
                              <img src={picsize} alt="" />
                            </div>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button
                              variant="secondary"
                              onClick={handleClose}
                            >
                              Close
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </div>
                    </div>
                  ) : (
                    ''
                  )}

                  {/* ----------SIZE---- */}

                  <div className="proDe-proId">
                    <p> 產品編號#{proId}</p>
                  </div>
                  <form action="">
                    <div className="proDe-countAndAdd d-flex">
                      <div className="proDe-numberAndBox d-flex">
                        <div className="proDe-numberName">
                          <p>數量</p>
                        </div>
                        <div className="proDe-numberCount ">
                          <div className="d-flex proDe-CountBtn">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.preventDefault()
                                setQtyNum(qtyNum - 1)
                              }}
                            >
                              <RiSubtractLine size={30} />
                            </button>
                            <input
                              className="proDe-spaceMid"
                              type="button"
                              value={qtyNum}
                            />

                            {/* <div className="proDe-spaceMid">
                              <p> 1</p>
                            </div> */}
                            <button
                              type="button"
                              onClick={(e) => {
                                setQtyNum(qtyNum + 1)
                              }}
                            >
                              <BiPlus size={30} />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="proDe-addToCart">
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            onCookie(
                              { sqlProductId },
                              { qtyNum },
                              { sizeGary }
                            )
                            checkCheck()
                          }}
                        >
                          <p>加入購物車</p>
                        </button>
                      </div>
                    </div>
                  </form>
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
                    {proDes}
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
                    142.5 x 142.5 厘米<br></br> (長度 x
                    高度) L56 x H56英寸<br></br> 淺藍色
                    60%絲 40%羊毛
                    <br></br>
                    全面裝飾Monogram印花 <br></br>流蘇邊
                    Louis Vuitton字樣 只可乾洗
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
                    我們提供到貨後 7
                    天商品鑑賞期（含例假日）內免費退換貨服務及
                    30
                    天商品換貨期（含例假日）內免費兌換服務，詳情請致電
                    0080 149 1188
                    客戶服務中心聯絡，由專員為您協助安排。
                    <br></br>
                    請於收到訂購商品時依表核對包裝箱內的商品內容，若有不符或短少，為確保您的權益請於
                    24
                    小時內致電客戶服務中心由專員協助處理。
                  </p>
                </Collapse>
              </div>

              {/* ------------商品評價zone------- */}
              <div className="proDe-commentsAndBar d-flex">
                <div className="proDe-commentsLeft">
                  <div className="proDe-commentsWord1">
                    <p>商品評價</p>
                  </div>
                  <div className="proDe-commentsNumAndStar d-flex "></div>
                </div>

                <div className="proDe-commentsRight d-flex">
                  <p className="proDe-commentsNumAndStar">
                    {isNaN(starsAverage) === true
                      ? '0'
                      : tryyy === true
                      ? starsAverage.toFixed(1)
                      : ''}
                  </p>
                  <div className="proDe-pushLeft">
                    {tryyy === true ? (
                      <ReactStars
                        count={5}
                        edit={false}
                        value={starsAverage}
                        activeColor="#1D0AFF"
                        size={40}
                        isHalf={true}
                        emptyIcon={
                          <i className="far fa-star"></i>
                        }
                        halfIcon={
                          <i className="fa fa-star-half-alt"></i>
                        }
                        fullIcon={
                          <i className="fa fa-star"></i>
                        }
                      />
                    ) : (
                      ''
                    )}
                    <p className="proDe-underStarWord d-flex">
                      {commentsNum}則評論
                    </p>
                  </div>
                </div>
              </div>
              {commentsCard}

              {/* ------------寫評論---------- */}
              <div className="col-12 p-0 d-flex justify-content-center flex-wrap">
                <button
                  onClick={() => setOpen4(!open4)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open4}
                  className="ed-comment e-btn-m mb-5 mt-5 proDe-commentsName"
                >
                  <p className="proDe-lastWord">撰寫評論</p>
                </button>
                <Collapse
                  in={open4}
                  className="col-12 p-0 mt-3 mb-5 "
                >
                  <div className="col-12 p-0">
                    <form
                      className="border-0 d-flex flex-wrap justify-content-center"
                      action=""
                    >
                      <ReactStars
                        count={5}
                        onChange={(e) => {
                          setStarValue(e)
                          console.log(e)
                        }}
                        value={0.5}
                        activeColor="#1D0AFF"
                        size={40}
                        isHalf={true}
                        emptyIcon={
                          <i className="far fa-star"></i>
                        }
                        halfIcon={
                          <i className="fa fa-star-half-alt"></i>
                        }
                        fullIcon={
                          <i className="fa fa-star"></i>
                        }
                      />

                      <textarea
                        className="ed-textarea col-12 p-0"
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        value={comments}
                        onChange={(e) => {
                          setComments(e.target.value)
                        }}
                      ></textarea>
                      <div className="flex-wrap5">
                        <button
                          className="ed-leave-msg e-btn-m col-l2 mt-3"
                          type="button"
                          onClick={(e) => {
                            e.preventDefault()
                            addcommentsSever()
                            setRecomments(true)
                            refreshPage()
                          }}
                        >
                          <p className="proDe-lastWord2">
                            送出評論
                          </p>
                        </button>
                        <button
                          className="pro-quickbtn"
                          style={{
                            backgroundColor: '#000',
                            color: '#000',
                          }}
                          type="submit"
                          onClick={(e) => {
                            e.preventDefault()
                            setComments(
                              '我們不得不相信，德謨克利特講過一句值得人反覆尋思的話，凡事都有規矩。這句話令我不禁感慨問題的迫切性。無對我來說有著舉足輕重的地位，必須要嚴肅認真的看待。陀思妥耶夫斯基曾經認為，無論是人類還是民族，如果沒有崇高的理想，就不能生存。他會這麼說是有理由的。'
                            )
                          }}
                        >
                          自動填寫
                        </button>
                        <button
                          className="pro-quickbtn2"
                          style={{
                            backgroundColor: '#000',
                            color: '#000',
                          }}
                          type="submit"
                          onClick={(e) => {
                            e.preventDefault()
                            setComments(
                              '所謂無，關鍵是無需要如何解讀。米南德曾說過，俗知憂能老，為視鏡中絲。這句話反映了問題的急切性。若到今天結束時我們都還無法釐清無的意義，那想必我們昨天也無法釐清。若能夠欣賞到無的美，相信我們一定會對無改觀。動機，可以說是最單純的力量。'
                            )
                          }}
                        >
                          自動填寫
                        </button>
                        <input
                          className="pro-nametext"
                          type="text"
                          onChange={(e) => {
                            setUserId(e.target.value)
                          }}
                        />
                        <button
                          className="pro-quickname2"
                          style={{
                            backgroundColor: '#000',
                            color: '#000',
                          }}
                          type="submit"
                          onClick={(e) => {
                            e.preventDefault()
                            setUserId('tascup1')
                          }}
                        >
                          自動填寫
                        </button>
                      </div>
                    </form>
                  </div>
                </Collapse>
              </div>
              {/* ----------------留言結束--------- */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(ProductDetail)
