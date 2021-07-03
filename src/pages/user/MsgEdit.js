import React from 'react'
import './styles/MsgEdit.scss'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'
import Menu from './components/Menu'
import Logoheader from './components/Logoheader'

function MsgEdits() {
  return (
    <>
      <div className="u-body">
        <Logoheader />
        <div className="u-userMenu">
          <Menu />
        </div>
        <div className="u-container-fluid">
          <div className="d-flex u-row justify-content-around">
            <div className="u-usertitleLeft1">
              <Link to="/user-msgedit">
                會員資料
              </Link>
            </div>
            <div className="u-usertitleRight1">
              <Link to="/user-pwdEdit">
                修改密碼
              </Link>
            </div>
          </div>
        </div>
        <div className="u-userData">
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
            <div className="form-group u-form1">
              <label for="gender">性別</label>
              <br />
              <select>
                <option></option>
                <option>男</option>
                <option>女</option>
                <option>不提供</option>
              </select>
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
              <div className="u-Select">
                <select name="" id="">
                  <option>請選擇縣市</option>
                </select>

                <select name="" id="" className="u-sel2">
                  <option>請選擇區域</option>
                </select>
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
        </div>
      </div>
    </>
  )
}

export default MsgEdits
