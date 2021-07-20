import React, { useState, useEffect } from 'react'
import { withRouter, Link, NavLink } from 'react-router-dom'
import { Container } from 'react-bootstrap'
// style
import './styles/PwdEdit.scss'
// import Menu2 from './components/Menu2'
import Logoheader from './components/Logoheader'
import Breadcrumb from './components/UserBreadcrumb'
// SweetAlert
import swal from 'sweetalert'

function PwdEdit(props) {
  const userid = props.match.params.userid

  const [dataLoading, setDataLoading] = useState(false)
  const [password, setPassword] = useState('')
  const [newPwd1, setNewPwd1] = useState('')
  const [newPwd2, setNewPwd2] = useState('')
  const [id, setId] = useState('')
  console.log('before get request')
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

    setPassword(data.password)
    setId(data.id)
  }

  async function checkedPassword(pwd1, pwd2) {
    if (pwd1 === pwd2 && pwd2 != '') {
      return true
    } else {
      return false
    }
  }

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
    // const data = await response.json()
  }

  async function updatePwdToSever() {
    // 開啟載入指示
    setDataLoading(true)
    // 檢查新密碼==再次輸入密碼

    // 檢查成功, 才送request
    if (await checkedPassword(newPwd1, newPwd2)) {
      // var new_password = newPwd1
      const newData = {
        password: newPwd1,
      }

      // 連接的伺服器資料網址 (node端的門牌號碼)
      // node = http://localhost:6005/users/ + route.get(門牌)
      // node = http://localhost:6005/users/ + route.put(門牌)
      // node = http://localhost:6005/users/ + route.post(門牌)
      const url =
        'http://localhost:6005/users/pwd/' + userid

      // 以下實際發出request
      // 注意資料格式要設定，伺服器才知道是json格式
      const request = new Request(url, {
        method: 'PUT',
        body: JSON.stringify(newData),
        // request:
        //    header
        //    body
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      console.log(`request header = ${request.headers}`)
      console.log(`request body = ${request.body}`)

      // if (newData.password != null) {
      const response = await fetch(request)
      const data = await response.json()
      // } else {
      //   alert(password)
      // }
      // end if

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
    } else {
      // 抓出了空字串或者兩行不同 警訊以下內容
      setDataLoading(false)
      swal({
        text: '密碼有誤, 請重新檢查',
        icon: 'error',
        button: false,
        timer: 3000,
      })
    }
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
        <Logoheader
          user_id={userid}
          show_user_name={true}
        />
        <div className="u-breadcrumb">
          <Breadcrumb />
        </div>
        {/* <div className="u-userMenu d-none d-lg-block d-xl-block">
          <Menu2 />
        </div> */}

        <div className="tab-bar">
          <NavLink
            activeClassName="activenav"
            className={'tab'}
            to={`/user-msgedit/${id}`}
            style={{
              textDecoration: 'none',
              background: 'black',
              color: 'white',
            }}
          >
            修改資料
          </NavLink>

          <NavLink
            activeClassName="activenav"
            className={'tab'}
            to={`/user-orderpro/${id}`}
            style={{ textDecoration: 'none' }}
          >
            訂單查詢
          </NavLink>
          <NavLink
            activeClassName="activenav"
            className={'tab'}
            to={`/user-coupon/${id}`}
            style={{ textDecoration: 'none' }}
          >
            我的優惠券
          </NavLink>
          <NavLink
            activeClassName="activenav"
            className={'tab'}
            to={`/user-ticket/${id}`}
            style={{ textDecoration: 'none' }}
          >
            我的票券
          </NavLink>
          <NavLink
            activeClassName="activenav"
            className={'tab'}
            to={`/user-myfav/${id}`}
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
          <div className="d-flex u-row justify-content-around">
            <div className="u-usertitleLeft">
              <Link to={`/user-msgedit/${id}`}>
                會員資料
              </Link>
            </div>
            <div className="u-usertitleRight">
              <Link to={`/user-pwdedit/${id}`}>
                修改密碼
              </Link>
            </div>
          </div>
        </Container>
        <div className="u-userData col-6 mt-5">
          <form>
            {/* <div className="form-group u-form1">
              <input
                value={password}
                type="text"
                className="form-control"
                onChange={(event) => {
                  setPassword(event.target.value)
                }}
              />
            </div> */}
            <div className="form-group u-form1 mt-5">
              <input
                value={newPwd1}
                type="password"
                className="form-control"
                placeholder="請輸入新密碼"
                onChange={(event) => {
                  setNewPwd1(event.target.value)
                }}
              />
            </div>
            <div className="form-group u-form1 mt-5">
              <input
                value={newPwd2}
                type="password"
                className="form-control"
                placeholder="再次輸入新密碼"
                onChange={(event) => {
                  setNewPwd2(event.target.value)
                }}
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
export default withRouter(PwdEdit)
