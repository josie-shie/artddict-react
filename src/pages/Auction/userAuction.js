import React from 'react';
// import { useState } from 'react';
import './style/userAuction.scss';
import { withRouter } from 'react-router-dom'
import Menu from './components/Menu'
import Logoheader from './components/Logoheader'
import Breadcrumb from './components/UserBreadcrumb'
import { Link } from 'react-router-dom'

function userAuction(props) {
    return (
        <>
           <div className="u-body">
        <Logoheader />
        <div className="u-breadcrumb">
          <Breadcrumb />
        </div>
        <div className="u-userMenu">
          <Menu />
        </div>
        <div className="u-container-fluid">
          <div className="d-flex u-row justify-content-around">
            <div className="u-usertitleLeft1">
              <Link to="/user-msgedit">會員資料</Link>
            </div>
            <div className="u-usertitleRight1">
              <Link to="/user-pwdEdit">修改密碼</Link>
            </div>
          </div>
        </div>
        </div>
        </>
    );
}

export default withRouter(userAuction);