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
  const [mobile, setMobile] = useState('')
  const [gender, setGender] = useState('')
  const [birthday, setBirthday] = useState('')
  const [address, setAddress] = useState('')

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

    setUsername(data.username)
    setName(data.name)
    setMobile(data.mobile)
    setGender(data.gender)
    setBirthday(data.birthday)
    setAddress(data.address)
  }

  async function updateUserToSever() {
    // 開啟載入指示
    setDataLoading(true)

    const newData = {
      username,
      name,
      mobile,
      gender,
      birthday,
      address,
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

    console.log(JSON.stringify(newData))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)
    // 要等驗証過，再設定資料(簡單的直接設定)

    //直接在一段x秒關掉指示器
    setTimeout(() => {
      setDataLoading(false)
      alert('修改完成')
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
              <Link to="/user-msgedit">會員資料</Link>
            </div>
            <div className="u-usertitleRight1">
              <Link to="/user-pwdEdit">修改密碼</Link>
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
                      value="female"
                      control={<StyledRadio />}
                      label="男"
                      onChange={(event) => {
                        setGender(event.target.value)
                      }}
                    />
                    <FormControlLabel
                      value="male"
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
                    <option>請選擇區域</option>
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
