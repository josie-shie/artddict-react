import React, { useState } from 'react';
import './style/auction.css'
import { withRouter, Link } from 'react-router-dom'
import AuctionProductList from './components/AuctionProductList'
import AuctionSlider from './components/AuctionSlider'
import auctionLogo from './images/auctionLogo.svg'
import auctionarrow from './images/arrow.svg'
import {data} from './data/data.js'
/*************************** */
import $ from 'jquery'


function Auction(props) {
    return (
        <>
            <div className="auctionPage">
                <div className="auctionHeroSection">
                    <div className="auctionHeroSectionLogo">
                        <img src={auctionLogo} />
                    </div>
                    <div className="auctionTitleOne">
                        藝術競標
                    </div>
                    <div className="auctionTitleTwo">
                        ArtDDICT  相信藝術不只有單一價值
                    </div>
                    <div className="auctiondecorationA auctiondecoration">
                        A
                    </div>
                    <div className="auctiondecorationT auctiondecoration">
                        T
                    </div>
                    <div className="auctiondecorationR auctiondecoration">
                        R
                    </div>
                </div>
                <marquee>
                    <div className="auctionMarquee">
                        AUCTION  &nbsp;&nbsp;&nbsp;
                        <img src={auctionarrow} />
                        &nbsp;&nbsp;&nbsp;
                        ArtDDICT
                        &nbsp;&nbsp;&nbsp;
                        AUCTION  &nbsp;&nbsp;&nbsp;
                        <img src={auctionarrow} />
                        &nbsp;&nbsp;&nbsp;
                        ArtDDICT
                    </div></marquee>
                <div className="auctionMain">
                    <div className="auctionMainWrap">
                        <div className="auctionMainFilter">
                            <div className="auctionMainFilterLeft">
                                <div className="auctionBreadcrumb">
                                    首頁/競標商品
                                </div>
                                <div className="auctionArrangement">
                                    排列
                                </div>
                                <div className="auctionArrangementInput">
                                    推薦
                                </div>
                                <div className="auctionNumberOfProduct">
                                    Showing 1-9 of 27
                                </div>
                            </div>
                            <div className="auctionMainFilterRight">
                                <div>price range</div>
                                <AuctionSlider />
                            </div>
                        </div>
                        <div className="auctionMainContent">
                            <div className="auctionsidebar">
                                <div className="auctionsidebarTitle">美術館商品</div>
                                <ul>
                                    <li>新品上市</li>
                                    <li>暢銷商品</li>
                                    <li>服飾</li>
                                    <li>家飾</li>
                                    <li>文具</li>
                                    <li>書籍</li>
                                    <li>配件</li>
                                </ul>
                            </div>
                            <AuctionProductList 
                                data={data}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default withRouter(Auction);