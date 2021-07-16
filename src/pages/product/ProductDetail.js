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

import { Link, withRouter } from 'react-router-dom'
import '../../bootstrap/css/bootstrap.css'
import { Button, Collapse } from 'react-bootstrap'
import './style/ProductDetail.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import ReactStars from 'react-rating-stars-component'

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

function ProductDetail(props) {
  const id = props.match.params.id
  // console.log(id)

  const [open, setOpen] = useState(true)
  const [open2, setOpen2] = useState(false)
  const [open3, setOpen3] = useState(false)
  const [open4, setOpen4] = useState(false)
  const [products, setProducts] = useState([])
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
  const [userId, setUserId] = useState('')
  const [commentsBlock, setCommentsBlock] = useState([])
  const [qty, setQty] = useState(1)
  const [rating, setRating] = useState('')
  const [starNum, setStarNum] = useState('')
  const [commentsNum, setCommentsNum] = useState('')
  const [starsAverage, setStarsAverage] = useState('')
  const [tryyy, setTryyy] = useState(false)
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
    setTimeout(() => {
      props.history.push(
        `/product/product-list/product-detail/${id}`
      )
    }, 500)

    setProNum(id)
  }
  // useEffect(() => {
  //   console.log('proIDDDD', { proId })
  // }, [proId])

  // useEffect(() => {
  //   addcommentsSever()
  // }, [])
  useEffect(() => {
    if (qty < 1) {
      setQty(1)
    }
    if (qty > 50) {
      setQty(50)
    }
  }, [qty])

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
            <p className="proDe-userName">暢哥</p>
            <p className="proDe-userDate">05-22-2021</p>
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
    }, 6000)
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

  let trymeme = starNum / commentsNum

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
              <div className="proDe-logoTopBox d-flex">
                <div className="proDe-logoBox">
                  <img src={lightLogo} alt="" />
                  <p>
                    商店 / 服飾 /<span>{proName}</span>
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
                        <button className="proDe-sizeBtn sizeChoose">
                          S
                        </button>
                        <button className="proDe-sizeBtn sizeChoose">
                          M
                        </button>
                        <button className="proDe-sizeBtn sizeChoose">
                          L
                        </button>
                      </div>
                      <div className="proDe-sizeCheck">
                        <Link
                          style={{ textDecoration: 'none' }}
                        >
                          <p>尺寸對照表</p>
                        </Link>
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
                                setQty(qty - 1)
                              }}
                            >
                              <RiSubtractLine size={30} />
                            </button>
                            <input
                              className="proDe-spaceMid"
                              type="button"
                              value={qty}
                            />

                            {/* <div className="proDe-spaceMid">
                              <p> 1</p>
                            </div> */}
                            <button
                              type="button"
                              onClick={(e) => {
                                setQty(qty + 1)
                              }}
                            >
                              <BiPlus size={30} />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="proDe-addToCart">
                        <button>
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
                    {/* <p>
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
                          // onChange={(e) => {
                          //   setRating(trymeme)
                          // }}
                          activeColor="#1D0AFF"
                          size={24}
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
                      <p className="proDe-underStarWord">
                        {commentsNum}則評論
                      </p>
                    </div> */}
                  </div>
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
                    <p className="proDe-underStarWord d-flex">
                      {commentsNum}則評論
                    </p>
                  </div>
                  {/* <div className="proDe-commentsBar1 d-flex">
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
                  </div> */}
                </div>
              </div>
              {commentsCard}
              {/* <div className="proDe-commentsCard d-flex">
                <div className="proDe-commentsCardLeft">
                  <div className="proDe-starsSSSSS">
                    <IoIosStar
                      size={20}
                      color={'#1D0AFF'}
                    />
                    <IoIosStar
                      size={20}
                      color={'#1D0AFF'}
                    />
                    <IoIosStar
                      size={20}
                      color={'#1D0AFF'}
                    />
                    <IoIosStar
                      size={20}
                      color={'#1D0AFF'}
                    />
                    <IoIosStar
                      size={20}
                      color={'#1D0AFF'}
                    />
                  </div>
                  <p className="proDe-userName">暢哥</p>
                  <p className="proDe-userDate">
                    05-22-2021
                  </p>
                </div>
                <div className="proDe-commentsCardRight d-flex">
                  <div className="proDe-commentsContent d-flex">
                    <p>{comments}</p>
                  </div>
                </div>
              </div> */}
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
                        value={5}
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
                        onChange={(e) => {
                          setComments(e.target.value)
                        }}
                      ></textarea>
                      <button
                        className="ed-leave-msg e-btn-m col-l2 mt-3"
                        type="button"
                        onClick={() => {
                          addcommentsSever()
                        }}
                      >
                        <p className="proDe-lastWord2">
                          送出評論
                        </p>
                      </button>
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
