import { Carousel, Container } from 'react-bootstrap'
import React from 'react'
import './styles/Login.scss'
import { Link } from 'react-router-dom'
import Logoheader from './components/Logoheader'

// images
import pic1 from './img/1.png'
import pic2 from './img/2.png'
import pic3 from './img/3.png'
import pic4 from './img/4.png'
import pic5 from './img/5.png'
import pic6 from './img/6.png'

// icons
import { AiFillGoogleCircle } from 'react-icons/ai'
import { RiFacebookCircleFill } from 'react-icons/ri'

function Login() {
  return (
    <>
      <div className="u-body">
        <Logoheader />
        <Container className="d-flex">
          <div className="u-contanier1 col-lg-6 d-none d-lg-block d-xl-block">
            <div className="u-img-carousel">
              <Carousel
                fade
                controls={false}
                indicators={false}
              >
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100 "
                    src={pic1}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100 "
                    src={pic6}
                    alt="Second slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100"
                    src={pic3}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100 "
                    src={pic4}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100"
                    src={pic5}
                    alt="Third slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100"
                    src={pic2}
                    alt="Third slide"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
            <div className="u-title01">
              <span>加入會員</span>
            </div>
            <div className="u-title02">
              <span>精選好物盡在ArtDDICT</span>
            </div>
            <div className="u-title03">
              <span>藝文活動搶先知</span>
            </div>
          </div>

          <div className="u-container2  col-lg-6 col-sm-12">
            <div className="u-member">
              <h1>MEMBERSHIP</h1>
            </div>
            <div className="u-addInput">
              <div className="u-addbutton d-flex justify-content-around">
                <div className="u-loginbtn">
                  <Link to="/user-login">登入</Link>
                </div>
                <div className="u-addbtn">
                  <Link to="/user-add">註冊</Link>
                </div>
              </div>
              <div className="u-gf d-flex justify-content-center">
                <div className="u-g">
                  <AiFillGoogleCircle />
                </div>
                <div className="u-f">
                  <RiFacebookCircleFill />
                </div>
              </div>
              <form action="">
                <div class="form-group u-form">
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="請輸入信箱"
                  />
                </div>

                <div class="form-group u-form">
                  <input
                    type="password"
                    class="form-control"
                    id="password1"
                    placeholder="請輸入密碼"
                  />
                </div>
                <div>
                  <small>
                    <div className="u-forgetPwd">
                      <a href="#/">忘記密碼？</a>
                    </div>
                  </small>
                </div>
                <div className="u-editBtn">
                  <button
                    type="submit"
                    class="u-btn btn-outline-dark"
                  >
                    <Link
                      to="/user-msgedit"
                      className="u-link1"
                      style={{ textDecoration: 'none' }}
                    >
                      登入
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Login
