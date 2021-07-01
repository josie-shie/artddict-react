import React from 'react'
import './styles/PwdEdit.scss'
import logo from './img/logo-bk.svg'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import Menu from './Menu'

function PwdEdit() {
  return (
    <>
      <div className="u-body">
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
        <div className="u-container-fluid">
          <div className="d-flex u-row justify-content-around">
            <div className="u-userMsg">
              <Nav.Link as={Link} to="/user-msgedit">
                會員資料
              </Nav.Link>
            </div>
            <div className="u-userPwd">
              <Nav.Link as={Link} to="/user-pwdEdit">
                修改密碼
              </Nav.Link>
            </div>
          </div>
        </div>
        <div className="u-userData">
          <form>
            <div className="form-group u-form">
              <input
                type="password"
                className="form-control"
                id="password"
              />
            </div>
            <div className="form-group u-form">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="請輸入新密碼"
              />
            </div>
            <div className="form-group u-form">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="再次輸入新密碼"
              />
            </div>

            <button
              type="submit"
              className="btn btn-outline-dark editBtn"
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
