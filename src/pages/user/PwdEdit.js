import React from 'react'
// import './styles/PwdEdit.scss'
import logo from './img/logo-bk.svg'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import Menu from './Menu'

function PwdEdit() {
  return (
    <>
      <header>
        <div className="u-container-fluid">
          <div className="u-logo-header">
            <img src={logo} alt="logo" />
          </div>
        </div>
      </header>
      <div className="u-userMenu">
        <Menu />
      </div>
      <div class="u-container-fluid">
        <div class="u-row justify-content-around">
          <div class="u-userMsg">
            <Nav.Link as={Link} to="/user-msgedit">
              會員資料
            </Nav.Link>
          </div>
          <div class="u-userPwd">
            <Nav.Link as={Link} to="/user-pwdEdit">
              修改密碼
            </Nav.Link>
          </div>
        </div>
        <div class="u-pwdData">
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

            <button
              type="submit"
              class="u-btn btn-outline-dark u-editBtn"
            >
              修改
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default PwdEdit
