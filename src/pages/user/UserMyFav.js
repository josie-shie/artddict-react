import React from 'react'
import './styles/UserMyFav.scss'
import Logoheader from './components/Logoheader'
import Menu from './components/Menu'
import Breadcrumb from './components/UserBreadcrumb'
import { Container, Row, Card } from 'react-bootstrap'
import { IoIosHeart } from 'react-icons/io'
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import EventPic from './img/EventPic.png'

function UserMyFav() {
  return (
    <>
      <div className="u-body">
        <Logoheader />
        <div className="u-breadcrumb">
          <Breadcrumb />
        </div>
        <div className="u-userMenu d-none d-lg-block d-xl-block">
          <Menu />
        </div>
        <Container fluid>
          <div className="u-row d-flex justify-content-around">
            <div className="u-Myfavtitle1">
              <Link
                to="/user-msgedit"
                style={{ textDecoration: 'none' }}
              >
                商品列
              </Link>
            </div>
            <div className="u-Myfavtitle2">
              <Link
                to="/"
                style={{ textDecoration: 'none' }}
              >
                活動展
              </Link>
            </div>
            <div className="u-Myfavtitle3">
              <Link
                to="/"
                style={{ textDecoration: 'none' }}
              >
                工作坊
              </Link>
            </div>
            <div className="u-Myfavtitle4">
              <Link
                to="/"
                style={{ textDecoration: 'none' }}
              >
                美術館
              </Link>
            </div>
          </div>

          <Row className="ed-list-card justify-content-between flex-wrap mt-5">
            <Card
              style={{
                width: '28rem',
                backgroundColor: '#e8e8e8',
                border: 'none',
              }}
            >
              <Link to="/">
                {' '}
                <Card.Img
                  variant="top"
                  src={EventPic}
                  alt="活動圖"
                />
              </Link>
              <Card.Body>
                <h6 className="col-12 p-0 my-2">
                  我是活動標題
                </h6>
                <div className="d-flex">
                  <div className="col-9 p-0">
                    <p>地點：台北市</p>
                    <p>時間：JUN</p>
                  </div>
                  <div className="col-6 pr-2">
                    <Link to="/">
                      <IoIosHeart className="u-heart" />
                    </Link>
                    <Link to="/cart-product">
                      <FaShoppingCart className="u-shopingcart" />
                    </Link>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card
              style={{
                width: '28rem',
                backgroundColor: '#e8e8e8',
                border: 'none',
              }}
            >
              <Link to="/">
                {' '}
                <Card.Img
                  variant="top"
                  src={EventPic}
                  alt="活動圖"
                />
              </Link>
              <Card.Body>
                <h6 className="col-12 p-0 my-2">
                  我是活動標題
                </h6>
                <div className="d-flex">
                  <div className="col-9 p-0">
                    <p>地點：台北市</p>
                    <p>時間：JUN</p>
                  </div>
                  <div className="col-6 pr-2">
                    <Link to="/">
                      <IoIosHeart className="u-heart" />
                    </Link>
                    <Link to="/cart-product">
                      <FaShoppingCart className="u-shopingcart" />
                    </Link>
                  </div>
                </div>
              </Card.Body>
            </Card>

            <Card
              style={{
                width: '28rem',
                backgroundColor: '#e8e8e8',
                border: 'none',
              }}
            >
              <Link to="/">
                {' '}
                <Card.Img
                  variant="top"
                  src={EventPic}
                  alt="活動圖"
                />
              </Link>
              <Card.Body>
                <h6 className="col-12 p-0 my-2">
                  我是活動標題
                </h6>
                <div className="d-flex">
                  <div className="col-9 p-0">
                    <p>地點：台北市</p>
                    <p>時間：JUN</p>
                  </div>
                  <div className="col-6 pr-2">
                    <Link to="/">
                      <IoIosHeart
                        className="u-heart"
                        id="u-heart"
                      />
                    </Link>
                    <Link to="/cart-product">
                      <FaShoppingCart className="u-shopingcart" />
                    </Link>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default UserMyFav
