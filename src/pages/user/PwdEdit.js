import React from 'react'
import '../styles/PwdEdit.scss'
import logo from './img/logo-bk.svg'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import Menu from './Menu'

function PwdEdit() {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="logo-header">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </header>
      <div className="userMenu">
        <Menu />
      </div>
      <div class="container-fluid">
        <div class="row justify-content-around">
          <div class="userMsg">
            <Nav.Link as={Link} to="/user-msgedit">
              會員資料
            </Nav.Link>
          </div>
          <div class="userPwd">
            <Nav.Link as={Link} to="/user-pwdEdit">
              修改密碼
            </Nav.Link>
          </div>
        </div>
        <div class="pwdData">
          <form>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="password"
                value=""
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="password"
                value=""
                placeholder="請輸入新密碼"
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="password"
                value=""
                placeholder="請再次輸入新密碼"
              />
            </div>

            <button type="submit" class="btn btn-outline-dark editBtn">
              修改
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default PwdEdit
