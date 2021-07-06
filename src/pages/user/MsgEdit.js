import React, { useState } from 'react'
import { countries, townships } from './data/address'
import './styles/MsgEdit.scss'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Menu from './components/Menu'
import Logoheader from './components/Logoheader'
import Breadcrumb from './components/UserBreadcrumb'

// @material-ui
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import StyledRadio from './StyledRadio'

function MsgEdits(props) {
  // 縣市
  const [country, setCountry] = useState(-1)
  const [township, setTownship] = useState(-1)

  // const userid = props.match.params.userid
  // const [dataLoading, setDataLoading] = useState(false)

  // const [username, name] = useState('')
  // const [name, setName] = useState('')
  // const [mobile, setMobile = useState('')
  // const [gender, setGender = useState('')
  // const [birthday, setBirthday] = useState('')
  // const [address, setAddress] = useState('')

  // const [userDataIsExist, setUserDataIsExist] =
  //   useState(true)
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
                  // value={username}
                  type="email"
                  className="form-control"
                  // onChange={(event) => {
                  //   setUsername(event.target.value)
                  // }}
                />
              </div>
              <div className="form-group u-form1 cn-font">
                <label for="name">姓名</label>
                <input
                  // value={name}
                  type="text"
                  className="form-control"
                  // onChange={(event) => {
                  //   setName(event.target.value)
                  // }}
                />
              </div>
              <div className="form-group u-form1 cn-font">
                <label for="tel">手機</label>
                <input
                  type="tel"
                  className="form-control"
                  id="tel"
                />
              </div>

              <div className="form-group  u-gender-ckb cn-font">
                <label for="gender">性別</label>
                <br />
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    defaultValue="female"
                    aria-label="gender"
                    name="customized-radios"
                  >
                    <FormControlLabel
                      value="female"
                      control={<StyledRadio />}
                      label="男"
                    />
                    <FormControlLabel
                      value="male"
                      control={<StyledRadio />}
                      label="女"
                    />
                    <FormControlLabel
                      value="other"
                      control={<StyledRadio />}
                      label="其他"
                    />
                  </RadioGroup>
                </FormControl>
              </div>

              <div className="form-group u-form1 cn-font">
                <label for="birthday">生日</label>
                <input
                  type="date"
                  className="form-control"
                  id="birthday"
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
                  type="text"
                  className="form-control mt-5"
                  id="address"
                />
              </div>

              <div className="u-editBtn">
                <button
                  type="submit"
                  className="btn btn-outline-dark editBtn"
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
}

export default MsgEdits
