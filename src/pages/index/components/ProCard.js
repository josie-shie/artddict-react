//TODO:link to product

import { React, useState, useEffect } from 'react'
import { Row, Carousel } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import Cookies from 'universal-cookie'
import swal from 'sweetalert'

// icon
import { IoIosHeart } from 'react-icons/io'

// Pictures
import product1 from '../image/product/24.植物園 獨角獸 圍巾03.jpeg'
import product2 from '../image/product/33.司宗譜紋章 圍巾03.jpeg'
import product3 from '../image/product/19.威廉 綠啄花 披肩03.jpeg'
import {
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
} from 'react-icons/io'

const ProCard = () => {
  const [index, setIndex] = useState(0)

  //Addcart
  const cookies = new Cookies()
  const qtyNum = 1 //一鍵加入數量只能是一
  const sizeGary = 'F' //一鍵加入數量只能是一
  const [sqlProductId, setSqlProductId] = useState('')
  const [toCart, setToCart] = useState('false')

  const onCookie = (productid, quantityNum, type) => {
    if (sqlProductId !== '') {
      console.log(type)
      console.log('productid', productid)
      let cookieProductId =
        productid.sqlProductId + '-' + type.sizeGary
      let updateCookie = []
      let cookieProduct = cookies.get('product') // 取得 event cookie
      console.log('cookieProduct',cookieProduct);

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

  useEffect(() => {
    onCookie({ sqlProductId }, { qtyNum }, { sizeGary })
    console.log('sqlProductId', sqlProductId)
  }, [sqlProductId])

  const callSwal = () => {
    swal({
      text: '新增成功',
      icon: 'success',
      button: false,
      timer: 1000,
    })
  }

  return (
    <>
      <Row
        className="d-flex product-card-wrap px-4
          "
      >
        <Carousel
          className="col-3 product-card "
          controls={false}
          indicators={false}
          activeIndex={index}
          slide={true}
        >
          <Carousel.Item
            onMouseIn={(e) => {
              console.log(e.target)
            }}
            onMouseOut={(e) => {}}
          >
            <Link to="/product/product-list/product-detail/106">
              <img
                className=" w-100"
                src={product1}
                alt="First slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                <Link
                  onClick={(e) => {
                    e.preventDefault()
                    setSqlProductId('65106')
                    callSwal()
                  }}
                >
                  Add to cart
                </Link>
              </div>
              <div className="index-heart col-4">
                <IoIosHeart size={'20'} />
              </div>
            </div>
            <Link to="/product/product-list/product-detail/106">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  獨角獸 披肩
                </h5>
                <h5 className="notoSansTC-md font-weight-bold">
                  1100元
                </h5>
              </div>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/product/product-list/product-detail/115">
              <img
                className=" w-100"
                src={product2}
                alt="Second slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                <Link
                  onClick={(e) => {
                    e.preventDefault()
                    setSqlProductId('65115')
                    callSwal()
                  }}
                >
                  Add to cart
                </Link>
              </div>
              <div className="index-heart col-4">
                <IoIosHeart size={'20'} />
              </div>
            </div>
            <Link to="/product/product-list/product-detail/115">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  司宗譜紋章 圍巾
                </h5>
                <h5 className="font-weight-bold">1100元</h5>
              </div>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/product/product-list/product-detail/101">
              <img
                className=" w-100"
                src={product3}
                alt="Third slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                <Link
                  onClick={(e) => {
                    e.preventDefault()
                    setSqlProductId('65101')
                    callSwal()
                  }}
                >
                  Add to cart
                </Link>
              </div>
              <div className="index-heart col-4">
                <IoIosHeart size={'20'} />
              </div>
            </div>
            <Link to="/product/product-list/product-detail/101">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                綠啄花 披肩
                </h5>
                <h5 className="font-weight-bold">1200元</h5>
              </div>
            </Link>
          </Carousel.Item>
        </Carousel>
        <div className="col-3">
          <h1 className="indexACC">ACC</h1>
          <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <Link to="/product/Acc" className="w-100">
              <div className="index-card-btn notoSansTC-md w-100 mt-auto">
                MORE
              </div>
            </Link>
            <div className="d-flex w-100">
              <div
                className="index-card-btn col-6"
                onClick={() =>
                  index <= 0 ? 0 : setIndex(index - 1)
                }
              >
                <IoIosArrowRoundBack size={30} />
              </div>
              <div
                className="index-card-btn col-6"
                size={30}
                onClick={() =>
                  index >= 2 ? 2 : setIndex(index + 1)
                }
              >
                <IoIosArrowRoundForward size={30} />
              </div>
            </div>
          </div>
        </div>
        <Carousel
          className="col-3 product-card "
          controls={false}
          indicators={false}
          activeIndex={index}
          slide={true}
        >
          <Carousel.Item>
            <Link to="/product/product-list/product-detail/115">
              <img
                className=" w-100"
                src={product2}
                alt="First slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                <Link
                  onClick={(e) => {
                    e.preventDefault()
                    setSqlProductId('65115')
                    callSwal()
                  }}
                >
                  Add to cart
                </Link>
              </div>
              <div className="index-heart col-4">
                <IoIosHeart size={'20'} />
              </div>
            </div>
            <Link to="/product/product-list/product-detail/115">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  司宗譜紋章 圍巾
                </h5>
                <h5 className="font-weight-bold">1100元</h5>
              </div>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/product/product-list/product-detail/101">
              <img
                className=" w-100"
                src={product3}
                alt="Second slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                <Link
                  onClick={(e) => {
                    e.preventDefault()
                    setSqlProductId('65101')
                    callSwal()
                  }}
                >
                  Add to cart
                </Link>
              </div>
              <div className="index-heart col-4">
                <IoIosHeart size={'20'} />
              </div>
            </div>
            <Link to="/product/product-list/product-detail/101">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                綠啄花 披肩
                </h5>
                <h5 className="notoSansTC-md font-weight-bold">
                1200元
                </h5>
              </div>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/product/product-list/product-detail/106">
              <img
                className=" w-100"
                src={product1}
                alt="Third slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                <Link
                  onClick={(e) => {
                    e.preventDefault()
                    setSqlProductId('65106')
                    callSwal()
                  }}
                >
                  Add to cart
                </Link>
              </div>
              <div className="index-heart col-4">
                <IoIosHeart size={'20'} />
              </div>
            </div>
            <Link to="/product/product-list/product-detail/106">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  獨角獸 披肩
                </h5>
                <h5 className="notoSansTC-md font-weight-bold">
                  1100元
                </h5>
              </div>
            </Link>
          </Carousel.Item>
        </Carousel>
        <Carousel
          className="col-3 product-card "
          controls={false}
          indicators={false}
          activeIndex={index}
          slide={true}
        >
          <Carousel.Item>
            <Link to="/product/product-list/product-detail/101">
              <img
                className=" w-100"
                src={product3}
                alt="First slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                <Link
                  onClick={(e) => {
                    e.preventDefault()
                    setSqlProductId('65101')
                    callSwal()
                  }}
                >
                  Add to cart
                </Link>
              </div>
              <div className="index-heart col-4">
                <IoIosHeart size={'20'} />
              </div>
            </div>
            <Link to="/product/product-list/product-detail/101">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                綠啄花 披肩
                </h5>
                <h5 className="notoSansTC-md font-weight-bold">
                1200元
                </h5>
              </div>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/product/product-list/product-detail/106">
              <img
                className=" w-100"
                src={product1}
                alt="Second slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                <Link
                  onClick={(e) => {
                    e.preventDefault()
                    setSqlProductId('65106')
                    callSwal()
                  }}
                >
                  Add to cart
                </Link>
              </div>
              <div className="index-heart col-4">
                <IoIosHeart size={'20'} />
              </div>
            </div>
            <Link to="/product/product-list/product-detail/106">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  獨角獸 披肩
                </h5>
                <h5 className="notoSansTC-md font-weight-bold">
                  1100元
                </h5>
              </div>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/product/product-list/product-detail/115">
              <img
                className=" w-100"
                src={product2}
                alt="Third slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                <Link
                  onClick={(e) => {
                    e.preventDefault()
                    setSqlProductId('65115')
                    callSwal()
                  }}
                >
                  Add to cart
                </Link>
              </div>
              <div className="index-heart col-4">
                <IoIosHeart size={'20'} />
              </div>
            </div>
            <Link to="/product/product-list/product-detail/115">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  司宗譜紋章 圍巾
                </h5>
                <h5 className="font-weight-bold">1100元</h5>
              </div>
            </Link>
          </Carousel.Item>
        </Carousel>
      </Row>
    </>
  )
}

export default withRouter(ProCard)
