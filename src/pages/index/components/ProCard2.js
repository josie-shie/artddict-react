import { React, useState } from 'react'
import { Row, Carousel } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

// Pictures
import product4 from '../image/product/BU.jpg'
import product5 from '../image/product/TEP.jpg'
import product6 from '../image/product/GN.jpg'
import {
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
  IoIosHeart,
} from 'react-icons/io'

const ProCard2 = () => {
  const [index, setIndex] = useState(0)

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
          <Carousel.Item>
            <Link to="/product/product-list/product-detail/5">
              <img
                className=" w-100"
                src={product4}
                alt="First slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                <Link>Add to cart</Link>
              </div>
              <div className="index-heart col-4">
                <IoIosHeart size={'20'} />
              </div>
            </div>
            <Link to="/product/product-list/product-detail/5">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  五百棵檸檬樹
                </h5>
                <h5 className="notoSansTC-md font-weight-bold">
                  300元
                </h5>
              </div>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/product/product-list/product-detail/2">
              <img
                className=" w-100"
                src={product5}
                alt="Second slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                <Link>Add to cart</Link>
              </div>
              <div className="index-heart col-4">
                <IoIosHeart size={'20'} />
              </div>
            </div>
            <Link to="/product/product-list/product-detail/2">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  一分鐘台北 專刊
                </h5>
                <h5 className="notoSansTC-md font-weight-bold">
                  450元
                </h5>
              </div>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/product/product-list/product-detail/14">
              <img
                className=" w-100"
                src={product6}
                alt="Third slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                <Link>Add to cart</Link>
              </div>
              <div className="index-heart col-4">
                <IoIosHeart size={'20'} />
              </div>
            </div>
            <Link to="/product/product-list/product-detail/14">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  黨若洪個展
                </h5>
                <h5 className="font-weight-bold">600元</h5>
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
            <Link to="/product/product-list/product-detail/2">
              <img
                className=" w-100"
                src={product5}
                alt="First slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                <Link>Add to cart</Link>
              </div>
              <div className="index-heart col-4">
                <IoIosHeart size={'20'} />
              </div>
            </div>
            <Link to="/product/product-list/product-detail/2">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md  font-weight-bold">
                  一分鐘台北 專刊
                </h5>
                <h5 className="notoSansTC-md font-weight-bold">
                  450元
                </h5>
              </div>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/product/product-list/product-detail/14">
              <img
                className=" w-100"
                src={product6}
                alt="Second slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                <Link>Add to cart</Link>
              </div>
              <div className="index-heart col-4">
                <IoIosHeart size={'20'} />
              </div>
            </div>
            <Link to="/product/product-list/product-detail/14">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  黨若洪個展
                </h5>
                <h5 className="notoSansTC-md font-weight-bold">
                  600元
                </h5>
              </div>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/product/product-list/product-detail/5">
              <img
                className=" w-100"
                src={product4}
                alt="Third slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                <Link>Add to cart</Link>
              </div>
              <div className="index-heart col-4">
                <IoIosHeart size={'20'} />
              </div>
            </div>
            <Link to="/product/product-list/product-detail/5">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  五百棵檸檬樹
                </h5>
                <h5 className="notoSansTC-md font-weight-bold">
                  300元
                </h5>
              </div>
            </Link>
          </Carousel.Item>
        </Carousel>
        <div className="col-3">
          <h1 className="indexACC">BOOK</h1>
          <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <Link to="/product/book" className="w-100">
              <div className="index-card-btn notoSansTC-md w-100 mt-auto">
                MORE
              </div>
            </Link>
            <div className="d-flex w-100">
              <div
                className="index-card-btn col-6"
                onClick={() =>
                  index >= 2 ? 2 : setIndex(index + 1)
                }
              >
                <IoIosArrowRoundBack size={30} />
              </div>
              <div
                className="index-card-btn col-6"
                size={30}
                onClick={() =>
                  index <= 0 ? 0 : setIndex(index - 1)
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
            <Link to="/product/product-list/product-detail/14">
              <img
                className=" w-100"
                src={product6}
                alt="First slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                <Link>Add to cart</Link>
              </div>
              <div className="index-heart col-4">
                <IoIosHeart size={'20'} />
              </div>
            </div>
            <Link to="/product/product-list/product-detail/14">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  黨若洪個展
                </h5>
                <h5 className="notoSansTC-md font-weight-bold">
                  600元
                </h5>
              </div>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/product/product-list/product-detail/5">
              <img
                className=" w-100"
                src={product4}
                alt="Second slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                <Link>Add to cart</Link>
              </div>
              <div className="index-heart col-4">
                <IoIosHeart size={'20'} />
              </div>
            </div>
            <Link to="/product/product-list/product-detail/5">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  五百棵檸檬樹
                </h5>
                <h5 className="notoSansTC-md font-weight-bold">
                  300元
                </h5>
              </div>
            </Link>
          </Carousel.Item>
          <Carousel.Item>
            <Link to="/product/product-detail">
              <img
                className=" w-100"
                src={product5}
                alt="Third slide"
              />
            </Link>
            <div className="index-card-rect d-flex text-center">
              <div className="col-8 border-right">
                <Link>Add to cart</Link>
              </div>
              <div className="index-heart col-4">
                <IoIosHeart size={'20'} />
              </div>
            </div>
            <Link to="/product/product-list/product-detail/2">
              <div className="d-flex justify-content-between mt-2">
                <h5 className="notoSansTC-md font-weight-bold">
                  一分鐘台北 專刊
                </h5>
                <h5 className="notoSansTC-md font-weight-bold">
                  450元
                </h5>
              </div>
            </Link>
          </Carousel.Item>
        </Carousel>
      </Row>
    </>
  )
}

export default withRouter(ProCard2)
