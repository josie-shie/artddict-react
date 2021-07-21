import React, { useState, useEffect } from 'react'
import { withRouter, Link, NavLink } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { countries, townships } from './data/address'
// styles
import './styles/MsgEdit.scss'
import './styles/classes.css'
// import Menu from './components/Menu'
import Logoheader from './components/Logoheader'
import Breadcrumb from './components/UserBreadcrumb'
// @material-ui
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import StyledRadio from './StyledRadio'
// SweetAlert
import swal from 'sweetalert'
import axios from 'axios'

function UserEdit(props) {
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)
  const [dataLoading, setDataLoading] = useState(false)
  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [mobile, setMobile] = useState('')
  const [birthday, setBirthday] = useState('')
  const [address, setAddress] = useState('')
  const [id, setId] = useState('')

  //
  const userid = props.match.params.userid

  async function getUserFromServer(userid) {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址
    const url = `http://localhost:6005/users/${userid}`

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(`[GET] response = ${data.gender}`)

    setUsername(data.username)
    setName(data.name)
    setGender(data.gender)
    setMobile(data.mobile)
    setId(data.id)

    // setBirthday(data.birthday)
    if (data.birthday != null) {
      const myDate = new Date(data.birthday)
      // 顯示時會扣一天所以硬加回來（後面寫入資料庫時則不會被影響）
      const nextDay = new Date(myDate)
      nextDay.setDate(myDate.getDate() + 1)
      const js_date = nextDay.toISOString().substring(0, 10)
      console.log(`js_date=${js_date}`)
      setBirthday(js_date)
    }
    // setBirthday(data.birthday)

    // 拆解得到的addres => country, township, addresses
    const raw_address = data.address
    // const split_address = raw_address.split('_')
    console.log(`raw_address = ${raw_address}`)
    if (data.address != null) {
      const split_address = raw_address.split('_')

      console.log(
        `country = ${split_address[0]}, township = ${split_address[1]}`
      )

      setCountry(split_address[0])
      setTownship(split_address[1])
      setAddress(split_address[2])
    }
  }

  async function updateUserToSever() {
    // 開啟載入指示
    setDataLoading(true)
    // 印出市: countries[country]
    // 印出區: townships[country][township]
    const whole_address = `${country}_${township}_${address}`
    // 準備好送給node的json資料
    const newData = {
      username,
      name,
      gender,
      mobile,
      birthday,
      country,
      township,
      address: whole_address,
      // address : _ + _ + _
    }

    // 連接的伺服器資料網址
    const url = `http://localhost:6005/users/${userid}`

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'PUT',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(
      `data from react = ${JSON.stringify(newData)}`
    )

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)
    // 要等驗証過，再設定資料(簡單的直接設定)

    //直接在一段x秒關掉指示器
    setTimeout(() => {
      setDataLoading(false)
      swal({
        text: '修改成功！！！',
        icon: 'success',
        button: false,
        timer: 3000,
      })
    }, 1000)
  }

  // 一開始就會開始載入資料
  useEffect(() => {
    getUserFromServer(userid)
  }, [])

  // 每次users資料有變動就會X秒後關掉載入指示
  useEffect(() => {
    setTimeout(() => {
      setDataLoading(false)
    }, 1000)
  }, [userid])

  async function logoutToSever() {
    // 連接的伺服器資料網址
    localStorage.removeItem('token')
    const url = 'http://localhost:6005/users/logout'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    // 要等驗証過，再設定資料(簡單的直接設定)

    swal({
      text: '登出成功！',
      icon: 'success',
      button: false,
      timer: 3000,
    })

    const response = await fetch(request)
    const data = await response.json()
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
        <div className="">
          <div>
            <Logoheader
              user_id={userid}
              show_user_name={true}
            />
          </div>
        </div>

        <div className="u-breadcrumb">
          <Breadcrumb />
        </div>
        <div className="tab-bar">
          <NavLink
            activeClassName="activenav"
            className={'tab'}
            to={`/user-msgedit/${userid}`}
            style={{ textDecoration: 'none' }}
          >
            修改資料
          </NavLink>

          <NavLink
            activeClassName="activenav"
            className={'tab'}
            to={`/user-orderpro/${userid}`}
            style={{ textDecoration: 'none' }}
          >
            訂單查詢
          </NavLink>
          <NavLink
            activeClassName="activenav"
            className={'tab'}
            to={`/user-coupon/${userid}`}
            style={{ textDecoration: 'none' }}
          >
            我的優惠券
          </NavLink>
          <NavLink
            activeClassName="activenav"
            className={'tab'}
            to={`/user-ticket/${userid}`}
            style={{ textDecoration: 'none' }}
          >
            我的票券
          </NavLink>
          <NavLink
            activeClassName="activenav"
            className={'tab'}
            to={`/user-myfav/${userid}`}
            style={{ textDecoration: 'none' }}
          >
            我的收藏
          </NavLink>
          <NavLink
            activeClassName="activenav"
            className={'tab'}
            to={`/user-auction/${userid}`}
            style={{ textDecoration: 'none' }}
          >
            競標查詢
          </NavLink>
          <NavLink
            activeClassName="activenav"
            className={'tab'}
            to="/user-login"
            onClick={() => {
              logoutToSever()
            }}
            style={{ textDecoration: 'none' }}
          >
            登出
          </NavLink>
        </div>
        <Container fluid>
          <div className="u-row d-flex justify-content-around">
            <div className="u-usertitleLeft1">
              <Link to={`/user-msgedit/${userid}`}>
                會員資料
              </Link>
            </div>
            <div className="u-usertitleRight1">
              <Link to={`/user-pwdedit/${userid}`}>
                修改密碼
              </Link>
            </div>
          </div>
          <Container className="u-userData">
            <form>
              <div className="form-group u-form1 cn-font">
                <label for="username">帳號 </label>

                <input
                  style={{ border: '2px solid red' }}
                  readOnly
                  value={username}
                  type="email"
                  className="form-control"
                  onChange={(event) => {
                    setUsername(event.target.value)
                  }}
                />
                <span
                  style={{
                    fontSize: '12px',
                    color: 'red',
                  }}
                >
                  *無法修改
                </span>
              </div>
              <div className="form-group u-form1 cn-font">
                <label for="name">姓名</label>
                <input
                  value={name}
                  type="text"
                  className="form-control"
                  onChange={(event) => {
                    setName(event.target.value)
                  }}
                />
              </div>

              <div className="form-group  u-gender-ckb cn-font">
                <label for="gender">性別</label>
                <br />
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    defaultValue={gender}
                    aria-label="gender"
                    name="customized-radios"
                    onChange={(event) => {
                      setGender(event.target.value)
                    }}
                  >
                    <FormControlLabel
                      value="male"
                      control={<StyledRadio />}
                      label="男"
                      onChange={(event) => {
                        setGender(event.target.value)
                      }}
                    />
                    <FormControlLabel
                      value="female"
                      control={<StyledRadio />}
                      label="女"
                      onChange={(event) => {
                        setGender(event.target.value)
                      }}
                    />
                    <FormControlLabel
                      value="other"
                      control={<StyledRadio />}
                      label="其他"
                      onChange={(event) => {
                        setGender(event.target.value)
                      }}
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="form-group u-form1 cn-font">
                <label for="tel">手機</label>
                <input
                  value={mobile}
                  type="tel"
                  className="form-control"
                  id="tel"
                  onChange={(event) => {
                    setMobile(event.target.value)
                  }}
                />
              </div>

              <div className="form-group u-form1 cn-font">
                <label for="birthday">生日</label>
                <input
                  value={birthday}
                  type="date"
                  className="form-control"
                  id="birthday"
                  onChange={(event) => {
                    setBirthday(event.target.value)
                  }}
                />
              </div>

              <div className="form-group u-form1 cn-font">
                <label for="address">住址</label>
                <br />
                <div className="u-Select">
                  <select
                    name=""
                    id=""
                    className="u-sel1"
                    value={country}
                    onChange={(e) => {
                      setCountry(+e.target.value)
                      setTownship(-1)
                    }}
                  >
                    <option>請選擇縣市</option>
                    {countries.map((value, index) => (
                      <option key={index} value={index}>
                        {value}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="u-Select">
                  <select
                    name=""
                    id=""
                    className="u-sel2 mt-5"
                    value={township}
                    onChange={(e) => {
                      setTownship(+e.target.value)
                    }}
                  >
                    <options>請選擇區域</options>
                    {country > -1 &&
                      townships[country].map(
                        (value, index) => (
                          <option key={index} value={index}>
                            {value}
                          </option>
                        )
                      )}
                  </select>
                </div>
                <input
                  value={address}
                  type="text"
                  className="form-control mt-5"
                  id="address"
                  onChange={(event) => {
                    setAddress(event.target.value)
                  }}
                />
              </div>

              <div className="u-editBtn">
                <button
                  className="btn btn-outline-dark editBtn"
                  onClick={() => {
                    updateUserToSever()
                  }}
                >
                  修改
                </button>
              </div>
            </form>
          </Container>
        </Container>
      </div>
    </>
  )

  /*
  檢查登入狀態以確認router不回傳頁面內容
   - getjwtvertifyFromServer 呼叫JWT檢查登入狀態之API
   - 若檢查登入
      成功, 顯示頁面內容
      失敗, 重新導向登入頁面
   - 使用waitAsync包覆檢查函式
   - 判斷waitAsync決定render
  */
  async function getjwtvertifyFromServer() {
    const token = localStorage.getItem('token')

    const response = await fetch(
      'http://localhost:6005/users/checklogin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
        }),
      }
    )

    const data = await response.json()
    console.log('check login response = ', data)
    console.log('data.id = ', data.id)
    console.log('userid = ', userid)
    if (data.id == userid) {
      var stat = true
    } else {
      var stat = false
    }
    console.log('stat = ', stat)
    return stat
  }

  // async needs to be waited in another funciton
  const waitAsync = async () => {
    const isLoggedin = await getjwtvertifyFromServer()

    if (!isLoggedin) {
      console.log('no display!')
      swal({
        title: '登入驗證失敗',
        text: '您的登入驗證已過期或者尚未登入, 請重新登入\n正在將您導向登入頁面 ...',
        button: false,
        timer: 2000,
      })
      setTimeout(() => {
        window.location.replace(`../user-login/`)
      }, 500)
      // throw new Error('Oopsie woopsie')
    }
  }

  if (waitAsync()) {
    // setDataLoading(true)
    console.log('display!')
    return <>{dataLoading ? loading : display}</>
  }
}
export default withRouter(UserEdit)
