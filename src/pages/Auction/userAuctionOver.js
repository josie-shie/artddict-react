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
            </div>
        </div>
    );
}

export default userAuctionOver;