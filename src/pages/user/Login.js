import { Carousel, Container } from 'react-bootstrap'
import React, { useState } from 'react'
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
import { FaFacebook } from 'react-icons/fa'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // // instance 物件實體，預設為空物件
  // async function userLogin(sql, req, res, instance) {
  //   try {
  //     const [rows, fields] =
  //       await dbMysql2.promisePool.query(sql)

  //     // 仿照json-server的回傳，有找到會回傳單一值，沒找到會回到空的物件字串
  //     let result = {}
  //     if (rows.length) {
  //       result = rows[0]

  //       req.session.regenerate(function (err) {
  //         if (err) {
  //           res
  //             .status(200)
  //             .json({ status: 2, message: '登入失敗' })
  //         }

  //         req.session.loginId = result.id
  //         req.session.loginName = result.name
  //         req.session.loginUsername = result.username
  //         req.session.loginCreatedDate = result.createDate

  //         // 如果要用全訊息可以用以下的回傳
  //         // res.json({ status: 0, message: '登入成功' })
  //         res.status(200).json(result)
  //       })
  //     } else {
  //       res
  //         .status(200)
  //         .json({ status: 1, message: '帳號或密碼錯誤' })

  //       //res.status(200).json(result)
  //     }
  //   } catch (error) {
  //     // 錯誤處理
  //     console.log(error)

  //     // 顯示錯誤於json字串
  //     res.status(200).json({
  //       message: error,
  //     })
  //   }
  // }

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
            <div className="u-membertile">
              <p>MEMBERSHIP</p>
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
              <div className="u-FB d-flex justify-content-around">
                <FaFacebook />
              </div>
              <form action="">
                <div class="form-group u-form">
                  <input
                    value={username}
                    type="email"
                    class="form-control"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="請輸入信箱"
                    onChange={(event) => {
                      setUsername(event.target.value)
                    }}
                  />
                </div>

                <div class="form-group u-form">
                  <input
                    value={password}
                    type="password"
                    class="form-control"
                    id="password1"
                    placeholder="請輸入密碼"
                    onChange={(event) => {
                      setPassword(event.target.value)
                    }}
                  />
                </div>
                <div>
                  <small>
                    <div className="u-forgetPwd">
                      <a href="#/">忘記密碼？</a>
                    </div>
                  </small>
                </div>
                <div className="u-AddBtn">
                  <Link
                    to="/"
                    className="u-link1"
                    style={{ textDecoration: 'none' }}
                  >
                    登入
                  </Link>
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
