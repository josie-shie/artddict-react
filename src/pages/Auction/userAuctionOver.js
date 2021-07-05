import React from 'react';
// import { useState } from 'react';
import './style/userAuctionOver.scss';
import { withRouter } from 'react-router-dom'
import Menu from './components/Menu'
import Logoheader from './components/Logoheader'
import Breadcrumb from './components/UserBreadcrumb'
import { Link } from 'react-router-dom'

function userAuctionOver(props) {
    return (
        <div>
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
                        <div className="u-usertitleLeft">
                            <Link to="/user-auction">競標中</Link>
                        </div>
                        <div className="u-usertitleRight">
                            <Link to="/user-auctionOver">已得標</Link>
                        </div>
                    </div>
                </div>
                <div className="uAucO-main">
                    <div className="uAucO-picture">

                    </div>
                    <div className="uAucO-productState">
                        <ul>
                            <li>競標編號:A956722</li>
                            <li>競標商品：BTS 麥當勞飲料杯 防彈少年團聯名 不防彈款</li>
                            <li>您的出價：NT$ 340</li>
                        </ul>
                    </div>
                    <div className="uAucO-btnf">
                        <button className="uAucO-btnA">
                            拍賣品細節
                        </button>
                        <button className="uAucO-btnB">
                            訂單明細
                        </button>
                    </div>
                </div>
                <div className="uAucO-detail">
                    <div className="uAucO-detail-Title">
                        訂單明細
                    </div>
                    <div className="uAuc-detail-contentA">
                        <ul>
                            <li>競標編號</li>
                            <li>得標時間</li>
                            <li>收件人</li>
                            <li>手機編號</li>
                            <li>訂單狀態</li>
                        </ul>
                        <ul>
                            <li>A956722</li>
                            <li>2021-03-22</li>
                            <li>gy哥</li>
                            <li>09123456789</li>
                            <li>帶取貨</li>
                        </ul>
                        <ul>
                            <li>付款方式</li>
                            <li>付款狀態</li>
                            <li>運費</li>
                            <li>總金額</li>
                        </ul>
                        <ul>
                            <li>信用卡</li>
                            <li>已付款</li>
                            <li>NT$ 80</li>
                            <li>NT$ 860</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default userAuctionOver;