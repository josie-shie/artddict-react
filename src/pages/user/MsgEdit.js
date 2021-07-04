import React from 'react'
import './styles/MsgEdit.scss'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Menu from './components/Menu'
import Logoheader from './components/Logoheader'
import Breadcrumb from './components/UserBreadcrumb'

function MsgEdits() {
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
              <div className="form-group u-form1">
                <label for="username">帳號</label>
                <input
                  type="email"
                  className="form-control"
                  id="username"
                />
              </div>
              <div className="form-group u-form1">
                <label for="name">姓名</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                />
              </div>
              <div className="form-group u-form1">
                <label for="tel">手機</label>
                <input
                  type="tel"
                  className="form-control"
                  id="tel"
                />
              </div>

              <div className="form-group  u-gender-ckb d-flex">
                <label for="gender">性別</label>
                <br />
                <div className="u-gender-box">
                  <input type="checkbox" />
                  <label htmlFor="gender">先生</label>
                </div>
                <div className="u-gender-box">
                  <input type="checkbox" />
                  <label htmlFor="gender">小姐</label>
                </div>
                <div className="u-gender-box">
                  <input type="checkbox" />
                  <label htmlFor="gender">不提供</label>
                </div>
              </div>

              <div className="form-group u-form1">
                <label for="birthday">生日</label>
                <input
                  type="date"
                  className="form-control"
                  id="birthday"
                />
              </div>
              <div className="form-group u-form1">
                <label for="address">住址</label>
                <br />
                <div className="d-flex">
                  <div className="u-Select">
                    <select
                      name=""
                      id=""
                      className="u-sel1"
                    >
                      <option>請選擇縣市</option>
                    </select>
                  </div>
                  <div className="u-Select">
                    <select
                      name=""
                      id=""
                      className="u-sel2"
                    >
                      <option>請選擇區域</option>
                    </select>
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
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
