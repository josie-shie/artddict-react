import React, { useState } from 'react';
import './style/auction.scss'
import { withRouter, Link } from 'react-router-dom'

import { data } from './data/data.js'

import AuctionProductList from './components/AuctionProductList'
import AuctionSlider from './components/AuctionSlider'
import AucBreadcrumb from './components/AucBreadcrumb'
// import Breadcrumb from './components/UserBreadcrumb'

import auctionLogo from './images/auctionLogo.svg'
import auctionarrow from './images/arrow.svg'
import selectArrow from './images/selectArrow.svg'


// react icons
import {
    IoIosArrowBack,
    IoIosArrowForward,
    IoIosArrowRoundDown,
    IoIosSearch,
    IoIosHeart,
    IoMdAdd,
    IoMdRemove,
} from 'react-icons/io'

function Auction(props) {

    const [search,setSearch] = useState('')
    const [arrangement ,setArrangement] = useState('')

    //選擇排列順序
    const handleChangeSelect = (e) =>{
        // console.log("選擇的順序",e.target.value)
        setArrangement(e.target.value)
    }
    return (
        <>
            <div className="auctionPage">
                <div className="auctionHeroSection">
                    <div className="auctionHeroSectionLogo">
                        <img src={auctionLogo} />
                    </div>
                    <div className="auctionTitleOne cn-font">
                        藝術競標
                    </div>
                    <div className="auctionTitleTwo cn-font">
                        ArtDDICT  相信藝術不只有單一價值
                    </div>
                    <div className="auctiondecorationA auctiondecoration eng-font-bold">
                        A
                    </div>
                    <div className="auctiondecorationT auctiondecoration eng-font-bold">
                        T
                    </div>
                    <div className="auctiondecorationR auctiondecoration eng-font-bold">
                        R 
                    </div>
                </div>
                <marquee>
                    <div className="auctionMarquee eng-font-bold">
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
                                    <AucBreadcrumb/>
                                </div>
                                <div className="auctionArrangement cn-font">
                                    排列
                                </div>
                                <div className="auctionArrangementInput">
                                    <select 
                                        className="auc-select pl-1 cn-font" 
                                        onChange ={handleChangeSelect}
                                        name="name" 
                                        id="name">
                                        <option style={{ color: '#707070' }} value="">
                                            推薦
                                        </option>
                                        <option value="t-more">剩餘時間(多至少)</option>
                                        <option value="t-less">剩餘時間(少至多)</option>
                                        <option value="p-less">價格(低至高)</option>
                                        <option value="p-high">價格(高至低)</option>
                                    </select>
                                </div>
                                <button className="auc-Search">
                                    <IoIosSearch />
                                </button>
                                <input 
                                    className="auc-Searchbox"
                                    value = {search}
                                    onChange ={(event)=>{setSearch(event.target.value)} }   
                                />
                                    <div className="auctionNumberOfProduct cn-font">
                                        Showing 1-9 of 27
                                    </div>
                            </div>
                                <div className="auctionMainFilterRight">
                                    <div>price range</div>
                                    <AuctionSlider />
                                </div>
                            </div>
                            <div className="auctionMainContent cn-font">
                                <div className="auctionsidebar cn_font">
                                    <div className="auctionsidebarTitle ">美術館商品</div>
                                    <ul>
                                        <li>畫作</li>
                                        <li>服飾</li>
                                        <li>家飾</li>
                                        <li>文具</li>
                                        <li>書籍</li>
                                        <li>配件</li>
                                    </ul>
                                </div>
                                <AuctionProductList
                                    // data={data}
                                    search={search}
                                    setSearch={setSearch}
                                    arrangement={arrangement}
                                />
                            </div>
                        </div>
                    </div>
                </div>

        </>
            );
}

            export default withRouter(Auction);