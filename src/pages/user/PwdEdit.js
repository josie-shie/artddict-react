import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
// style
import './styles/PwdEdit.scss'
import Menu2 from './components/Menu2'
import Logoheader from './components/Logoheader'
import Breadcrumb from './components/UserBreadcrumb'
// SweetAlert
import swal from 'sweetalert'

function PwdEdit(props) {
  const userid = props.match.params.userid
  const [dataLoading, setDataLoading] = useState(false)
  const [password, setPassword] = useState('')

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

    setPassword(data.password)
  }

  async function updatePwdToSever() {
    // 開啟載入指示
    setDataLoading(true)

    const newData = {
      password,
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
      swal({
        text: '密碼修改成功！！！',
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

  const display = (
    <>
      <div className="u-body">
        <Logoheader />
        <div className="u-breadcrumb">
          <Breadcrumb />
        </div>
        <div className="u-userMenu d-none d-lg-block d-xl-block">
          <Menu2 />
        </div>
        <Container fluid>
          <div className="d-flex u-row justify-content-around">
            <div className="u-usertitleLeft">
              <Link to="/user-msgedit">會員資料</Link>
            </div>
            <div className="u-usertitleRight">
              <Link to="/user-pwdEdit">修改密碼</Link>
            </div>
          </div>
        </Container>
        <div className="u-userData col-6 mt-5">
          <form>
            <div className="form-group u-form1">
              <input
                type="password"
                className="form-control"
                id="password"
              />
            </div>
            <div className="form-group u-form1 mt-5">
              <input
                value={password}
                type="password"
                className="form-control"
                id="password"
                placeholder="請輸入新密碼"
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </div>
            <div className="form-group u-form1 mt-5">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="再次輸入新密碼"
              />
            </div>
            <div className="u-editBtn">
              <button
                type="submit"
                className="btn btn-outline-dark "
                onClick={() => {
                  updatePwdToSever()
                }}
              >
                修改
              </button>
            </div>
          </form>
        </div>
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

export default PwdEdit
