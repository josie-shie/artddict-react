import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { countries, townships } from './data/address'
// styles
import './styles/MsgEdit.scss'
import Menu from './components/Menu'
import Logoheader from './components/Logoheader'
import Breadcrumb from './components/UserBreadcrumb'
// @material-ui
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import StyledRadio from './StyledRadio'
// SweetAlert
import swal from 'sweetalert'

function UserEdit(props) {
  // 縣市
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)

  const userid = props.match.params.userid
  // console.log(userid)

  //const [user, setUser] = useState({})
  const [dataLoading, setDataLoading] = useState(false)

  const [username, setUsername] = useState('')
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [mobile, setMobile] = useState('')
  const [birthday, setBirthday] = useState('')
  const [address, setAddress] = useState('')
  const [id, setId] = useState('')

  async function getUserFromServer(userid) {
    // 開啟載入指示
    setDataLoading(true)

    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/users/' + userid

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
    console.log(`[GET] response = ${data}`)

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
    const url = 'http://localhost:6005/users/' + userid

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

  // const userDataNo = <h2>此會員不存在</h2>
  // const useridNo = <h2>需要會員id</h2>

  const display = (
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
            <div className="u-usertitleLeft1">
              <Link to={`/user-msgedit/${id}`}>
                會員資料
              </Link>
            </div>
            <div className="u-usertitleRight1">
              <Link to={`/user-pwdedit/${id}`}>
                修改密碼
              </Link>
            </div>
          </div>
          <Container className="u-userData">
            <form>
              <div className="form-group u-form1 cn-font">
                <label for="username">帳號</label>
                <input
                  value={username}
                  type="email"
                  className="form-control"
                  onChange={(event) => {
                    setUsername(event.target.value)
                  }}
                />
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

  return (
    <>
      {/* {!userDataIsExist ? userDataNo : ''}
      {!userid ? useridNo : ''} */}
      {dataLoading ? loading : display}
    </>
  )
}

export default withRouter(UserEdit)
