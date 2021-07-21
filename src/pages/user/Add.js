import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Carousel, Container } from 'react-bootstrap'
// style
import Logoheader from './components/Logoheader'
import './styles/Add.scss'
// @material-ui
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
// SweetAlert
import swal from 'sweetalert'
// images
import pic1 from './img/1.png'
import pic2 from './img/2.png'
import pic3 from './img/3.png'
import pic4 from './img/4.png'
import pic5 from './img/5.png'
import pic6 from './img/6.png'
// icons
// import { FaFacebook } from 'react-icons/fa'

function Add(props) {
  const [dataLoading, setDataLoading] = useState(false)
  // const [username, setUsername] = useState()
  // const [name, setName] = useState()
  // const [password, setPassword] = useState()
  const [fields, setFields] = useState({
    username: '',
    email: '',
    password: '',
  })

  const [checkText, setCheckTest] = useState(false)

  // checkbox
  const [state, setState] = useState({
    checkedA: true,
    checkedB: true,
  })
  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    })
  }
  const handleFieldChange = (e) => {
    const updatedFields = {
      ...fields,
      [e.target.name]: e.target.value,
    }

    setFields(updatedFields)
  }

  async function addUserToSever(e) {
    // 開啟載入指示
    e.preventDefault()
    setDataLoading(true)

    const newData = { ...fields }

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

      swal({
        text: '註冊成功，請重新登入!',
        icon: 'success',
        button: false,
        timer: 3000,
      }).then(() => {
        window.location.replace('/user-login')
      })
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
        <Container className="d-flex justify-content-center">
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

          <div className="u-container2 col-lg-6 col-sm-12">
            <div className="u-membertile">
              <p>MEMBERSHIP</p>
            </div>
            <div className="u-addInput">
              <div className="u-addbutton d-flex justify-content-around">
                <div className="u-loginbtn1">
                  <Link to="/user-login">登入</Link>
                </div>
                <div className="u-addbtn1">
                  <Link to="/user-add">註冊</Link>
                </div>
              </div>
              {/* <div className="u-FB d-flex justify-content-around">
                <FaFacebook />
              </div> */}
              <form onSubmit={addUserToSever}>
                <div className="form-group u-form">
                  <input
                    type="email"
                    name="username"
                    value={fields.username}
                    onChange={handleFieldChange}
                    className="form-control "
                    //id="username"
                    required
                    placeholder="請輸入信箱"
                  />
                </div>
                <div className="form-group u-form">
                  <input
                    type="text"
                    name="name"
                    value={fields.name}
                    onChange={handleFieldChange}
                    className="form-control "
                    // id="name"
                    placeholder="請輸入姓名"
                    required
                  />
                </div>

                <div className="form-group u-form">
                  <input
                    type="password"
                    name="password"
                    value={fields.password}
                    onChange={handleFieldChange}
                    className="form-control"
                    id="password1"
                    placeholder="請輸入欲設定的密碼"
                    minLength="8"
                    required
                  />
                </div>
                {/* <div className="form-group u-form">
                  <input
                    type="password"
                    value={password}
                    className="form-control"
                    id="password2"
                    placeholder="請再次輸入密碼"
                  />
                </div> */}
                <div className="form-group u-ckb">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedA}
                          onChange={handleChange}
                          name="checkedA"
                          style={{ color: 'black' }}
                        />
                      }
                      label="我同意使用者條款與隱私權聲明政策"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={state.checkedB}
                          onChange={handleChange}
                          name="checkedB"
                          style={{ color: 'black' }}
                        />
                      }
                      label="我願意收到ArtDDICT電子報與活動訊息"
                    />
                  </FormGroup>
                  <div className="u-check"></div>
                </div>
                {/* <div className="u-AddBtn"> */}
                {/* <Link
                    to="/user-login"
                    className="u-link1"
                    style={{ textDecoration: 'none' }}
                    
                  >
                    <button type="submit" onClick={addUserToSever}>
                      註冊
                    </button>
                    
                  </Link> */}

                <button
                  className="u-userAddBtn"
                  type="submit"
                >
                  註冊
                </button>

                {/* </div> */}
              </form>
            </div>
          </div>
        </Container>
      </div>
    </>
  )

  return <>{dataLoading ? loading : display}</>
}

export default withRouter(Add)
