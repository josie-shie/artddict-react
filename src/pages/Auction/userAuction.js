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
        <>  <div className="u-body-flex">
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
                            <Link to="/user-auction">競標中</Link>
                        </div>
                        <div className="u-usertitleRight1">
                            <Link to="/user-auctionOver">已得標</Link>
                        </div>
                    </div>
                </div>
                <div className="uAuc-main">
                    <div className="uAuc-picture">

                    </div>
                    <div className="uAuc-productState">
                        <ul>
                            <li>競標編號:A956722</li>
                            <li>競標商品：BTS 麥當勞飲料杯 防彈少年團聯名 不防彈款</li>
                            <li>您的出價：NT$ 340</li>
                            <li>最高出價：NT$ 340</li>
                            <li>剩餘時間：01 天 02 小時 34 分鐘 56 秒</li>
                        </ul>
                    </div>
                    <div className="uAuc-btnf">
                        <button className="uAuc-btn">
                            拍賣品細節
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

export default withRouter(userAuction);