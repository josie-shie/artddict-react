import { Carousel } from 'react-bootstrap'
import React from 'react'
import '../styles/Login.scss'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

// images
import logo from './img/logo.png'
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
      <header>
        <div className="container-fluid">
          <div className="logo-header">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </header>
      <div className="d-flex">
        <div className="contanier1 col-lg-6 d-none d-lg-block d-xl-block">
          <div className="img-carousel">
            <Carousel fade controls={false} indicators={false}>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100 " src={pic1} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100 " src={pic6} alt="Second slide" />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100" src={pic3} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100 " src={pic4} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100" src={pic5} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img className="d-block w-100" src={pic2} alt="Third slide" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="title01">
            <span>加入會員</span>
          </div>
          <div className="title02">
            <span>精選好物盡在ArtDDICT</span>
          </div>
          <div className="title03">
            <span>藝文活動搶先知</span>
          </div>
        </div>

        <div className="container2">
          <div className="member">
            <h1>MEMBERSHIP</h1>
          </div>
          <div className="addInput">
            <div className="addbutton d-flex justify-content-around">
              <div className="loginbtn">
                <Nav.Link as={Link} to="/user-login">
                  登入
                </Nav.Link>
              </div>
              <div className="addbtn">
                <Nav.Link as={Link} to="/user-add">
                  註冊
                </Nav.Link>
              </div>
            </div>
            <div className="gf d-flex justify-content-center">
              <div className="g">
                <AiFillGoogleCircle />
              </div>
              <div className="f">
                <RiFacebookCircleFill />
              </div>
            </div>
            <form action="">
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="請輸入信箱"
                />
              </div>

              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="password1"
                  placeholder="請輸入密碼"
                />
              </div>
              <div>
                <small>
                  <a href="#/">忘記密碼？</a>
                </small>
              </div>
              <button type="submit" class="btn btn-outline-dark">
                <Nav.Link className="u-link1" as={Link} to="/user-msgedit">
                  登入
                </Nav.Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
