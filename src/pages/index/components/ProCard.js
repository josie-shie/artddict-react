//TODO:link to product

import { React, useState } from 'react'
import { Row, Carousel } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

// icon
import { IoIosHeartEmpty } from 'react-icons/io'

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
  const [hover, setHover] = useState(false)

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
            <Link to="/event/event-list/detail">
              <img
                className=" w-100"
                src={product1}
                alt="First slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                Add to cart
              </div>
              <div className="col-4">
                <IoIosHeartEmpty
                  size={'25'}
                  color={'#81FC4D'}
                />
              </div>
            </div>
            <Link>
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  達利的畫布
                </h5>
                <h5 className="notoSansTC-md font-weight-bold">
                  490元
                </h5>
              </div>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/event/event-list/detail">
              <img
                className=" w-100"
                src={product2}
                alt="Second slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                Add to cart
              </div>
              <div className="col-4">
                <IoIosHeartEmpty
                  size={'25'}
                  color={'#81FC4D'}
                />
              </div>
            </div>
            <Link>
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  馬蒂斯的花園
                </h5>
                <h5 className="font-weight-bold">1180元</h5>
              </div>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/event/event-list/detail">
              <img
                className=" w-100"
                src={product2}
                alt="Third slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                Add to cart
              </div>
              <div className="col-4">
                <IoIosHeartEmpty
                  size={'25'}
                  color={'#81FC4D'}
                />
              </div>
            </div>
            <Link>
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  馬蒂斯的花園
                </h5>
                <h5 className="font-weight-bold">1180元</h5>
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
            <Link to="/event/event-list/detail">
              <img
                className=" w-100"
                src={product2}
                alt="First slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                Add to cart
              </div>
              <div className="col-4">
                <IoIosHeartEmpty
                  size={'25'}
                  color={'#81FC4D'}
                />
              </div>
            </div>
            <Link>
            <div className="d-flex justify-content-between mt-2">
              <h5 className="notoSansTC-md font-weight-bold">
                馬蒂斯的花園
              </h5>
              <h5 className="font-weight-bold">1180元</h5>
            </div>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/event/event-list/detail">
              <img
                className=" w-100"
                src={product3}
                alt="Second slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                Add to cart
              </div>
              <div className="col-4">
                <IoIosHeartEmpty
                  size={'25'}
                  color={'#81FC4D'}
                />
              </div>
            </div>
            <div className="d-flex justify-content-between mt-2">
              <h5 className="notoSansTC-md font-weight-bold">
                慕夏的後院
              </h5>
              <h5 className="notoSansTC-md font-weight-bold">
                980元
              </h5>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/event/event-list/detail">
              <img
                className=" w-100"
                src={product1}
                alt="Third slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                Add to cart
              </div>
              <div className="col-4">
                <IoIosHeartEmpty
                  size={'25'}
                  color={'#81FC4D'}
                />
              </div>
            </div>
            <Link>
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  達利的畫布
                </h5>
                <h5 className="notoSansTC-md font-weight-bold">
                  490元
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
            <Link to="/">
              <img
                className=" w-100"
                src={product3}
                alt="First slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                Add to cart
              </div>
              <div className="col-4">
                <IoIosHeartEmpty
                  size={'25'}
                  color={'#81FC4D'}
                />
              </div>
            </div>
            <Link>
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  慕夏的後院
                </h5>
                <h5 className="notoSansTC-md font-weight-bold">
                  980元
                </h5>
              </div>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/event/event-list/detail">
              <img
                className=" w-100"
                src={product1}
                alt="Second slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                Add to cart
              </div>
              <div className="col-4">
                <IoIosHeartEmpty
                  size={'25'}
                  color={'#81FC4D'}
                />
              </div>
            </div>
            <Link>
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  達利的畫布
                </h5>
                <h5 className="notoSansTC-md font-weight-bold">
                  490元
                </h5>
              </div>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/event/event-list/detail">
              <img
                className=" w-100"
                src={product2}
                alt="Third slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                Add to cart
              </div>
              <div className="col-4">
                <IoIosHeartEmpty
                  size={'25'}
                  color={'#81FC4D'}
                />
              </div>
            </div>
            <Link>
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  馬蒂斯的花園
                </h5>
                <h5 className="font-weight-bold">1180元</h5>
              </div>
            </Link>
          </Carousel.Item>
        </Carousel>
      </Row>
    </>
  )
}

export default withRouter(ProCard)
