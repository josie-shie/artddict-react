import React from 'react'
import './styles/PwdEdit.scss'
import { Link } from 'react-router-dom'
import Menu from './components/Menu'
import Logoheader from './components/Logoheader'
import Breadcrumb from './components/UserBreadcrumb'
import { Container } from 'react-bootstrap'

function PwdEdit() {
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
        <Container>
          <div className="d-flex u-row justify-content-around">
            <div className="u-usertitleLeft">
              <Link to="/user-msgedit">會員資料</Link>
            </div>
            <div className="u-usertitleRight">
              <Link to="/user-pwdEdit">修改密碼</Link>
            </div>
          </div>
        </Container>
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
            <div className="u-editBtn">
              <button
                type="submit"
                className="btn btn-outline-dark "
              >
                修改
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default PwdEdit
