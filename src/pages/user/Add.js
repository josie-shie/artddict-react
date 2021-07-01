import { Carousel } from 'react-bootstrap'
import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import './styles/Add.scss'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

// images
import logo from './img/logo-bk.svg'
import pic1 from './img/1.png'
import pic2 from './img/2.png'
import pic3 from './img/3.png'
import pic4 from './img/4.png'
import pic5 from './img/5.png'
import pic6 from './img/6.png'

// icons
import { AiFillGoogleCircle } from 'react-icons/ai'
import { RiFacebookCircleFill } from 'react-icons/ri'

function User(props) {
  const [dataLoading, setDataLoading] = useState(false)
  const [username, setUsername] = useState()
  const [name, setName] = useState()
  const [password, setPassword] = useState()

  async function addUserToSever() {
    // 開啟載入指示
    setDataLoading(true)

    const newData = { name, username, password }

    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/users/'

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

    //直接在一段x秒關掉指示器
    setTimeout(() => {
      setDataLoading(false)
      alert('儲存完成')
      props.history.push('/')
    }, 500)
  }

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <div className="u-body">
        <header>
          <div className="u-container-fluid">
            <div className="u-logo-header">
              <img src={logo} alt="logo" />
            </div>
          </div>
        </header>
        <Nav />
        <div className="d-flex">
          <div className="u-contanier1 col-lg-5 d-none d-lg-block d-xl-block">
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
                    className="d-block w-100 "
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

          <div className="u-container2 col-5">
            <div className="u-member">
              <h1>MEMBERSHIP</h1>
            </div>
            <div className="u-addInput">
              <div className="u-addbutton d-flex justify-content-around">
                <div className="u-loginbtn1">
                  <Nav.Link as={Link} to="/user-login">
                    登入
                  </Nav.Link>
                </div>
                <div className="u-addbtn1">
                  <Nav.Link as={Link} to="/user-add">
                    註冊
                  </Nav.Link>
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
                <div className="form-group u-form">
                  <input
                    type="email"
                    value={username}
                    onChange={(event) => {
                      setUsername(event.target.value)
                    }}
                    className="form-control "
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="請輸入信箱"
                  />
                </div>
                <div className="form-group u-form">
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => {
                      setName(event.target.value)
                    }}
                    className="form-control "
                    id="name"
                    placeholder="請輸入姓名"
                  />
                </div>
                <div className="form-group u-form">
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value)
                    }}
                    className="form-control"
                    id="password1"
                    placeholder="請輸入欲設定的密碼"
                  />
                </div>
                <div className="form-group u-form">
                  <input
                    type="password"
                    value={password}
                    className="form-control"
                    id="password2"
                    placeholder="請再次輸入密碼"
                  />
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check1"
                  />
                  <label
                    className="form-check-label"
                    for="check1"
                  >
                    我同意使用者條款與隱私權聲明政策
                  </label>
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="check2"
                  />
                  <label
                    className="form-check-label"
                    for="check2"
                  >
                    我願意收到ArtDDICT電子報與活動訊息
                  </label>
                </div>
                <button
                  type="submit"
                  onClick={() => {
                    addUserToSever()
                  }}
                  className="u-btn btn-outline-dark"
                >
                  <Nav.Link
                    className="u-link1"
                    as={Link}
                    to="/user-msgedit"
                  >
                    註冊
                  </Nav.Link>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )

  return <>{dataLoading ? loading : display}</>
}

export default withRouter(User)
