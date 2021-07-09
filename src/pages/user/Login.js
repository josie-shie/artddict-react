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
  const [dataLoading, setDataLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  async function loginToSever() {
    // 開啟載入指示
    setDataLoading(true)

    const newData = { username, password }

    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/users/login'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'POST',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newData))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)
    // 要等驗証過，再設定資料(簡單的直接設定)
    if (data.id) alert('登入成功')
    else alert('登入失敗')

    //直接在一段x秒關掉指示器
    setTimeout(() => {
      setDataLoading(false)
    }, 500)
  }

  const loading = (
    <>
      <div className="u-body">
        <Logoheader />
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </>
  )

  const display = (
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
                    to="/user-msgedit"
                    onClick={() => {
                      loginToSever()
                    }}
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

  return <>{dataLoading ? loading : display}</>
}

export default Login
