import React, { useEffect, useState } from 'react';
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

    const [search, setSearch] = useState('')
    const [arrangement, setArrangement] = useState('')
    const [count, setCount] = useState(0)
    const [aucInfo, setAucInfo] = useState([])
    const [aucRemainT, setAucRemainT] = useState([])



    //選擇排列順序
    const handleChangeSelect = (e) => {
        // console.log("選擇的順序",e.target.value)
        setArrangement(e.target.value)
    }

    //初始化資料
    async function getAucProFromServer() {

        // 連接的伺服器資料網址
        const url = 'http://localhost:6005/auctoin/auction-list'

        // 注意header資料格式要設定，伺服器才知道是json格式
        const request = new Request(url, {
            method: 'GET',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'appliaction/json',
            }),
        })
        const response = await fetch(request)
        const data = await response.json()

        // 設定資料
        setAucInfo(data)
    }

    //排列查詢
    async function getAucProArrFromServer() {

        // 連接的伺服器資料網址
        const url = 'http://localhost:6005/auctoin/aucSeaArr' + `?search=${search}` + `&arrangement=${arrangement}`
        // 注意header資料格式要設定，伺服器才知道是json格式
        const request = new Request(url, {
            method: 'GET',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'appliaction/json',
            }),
        })

        const response = await fetch(request)
        const data = await response.json()
        console.log(data)
        // 設定資料
        setAucInfo(data)
    }

    useEffect(() => {
        getAucProFromServer()
    }, [])

    useEffect(() => {
        getAucProArrFromServer()
    }, [search, arrangement])


    const TimeRemaining = (deadline) => {
        //截止時間(毫秒)
        // 將資料拿到資料庫截止日期 從字串轉換成數字
        const deadlineMin = parseInt(deadline)
        //現在時間(毫秒)
        const timeRightNowA = new Date()
        const timeRightNow = timeRightNowA.getTime()

        const TimeRemaining = deadlineMin - timeRightNow

        const seconds = Math.floor((TimeRemaining / 1000) % 60);
        const minutes = Math.floor((TimeRemaining / 1000 / 60) % 60);
        const hours = Math.floor((TimeRemaining / (1000 * 60 * 60)) % 24);
        const days = Math.floor(TimeRemaining / (1000 * 60 * 60 * 24));
        // console.log(days, "天", hours, '小時', minutes, '分鐘', seconds, '秒')
        if (TimeRemaining < 0) {
            return '競標結束'
        }

        if (days > 0) {
            if (String(days).length < 2) {
                return `截標倒數0${days}天${hours}小時${seconds}`
            } else {
                return `截標倒數${days}天${hours}小時${seconds}`
            }
        }
        if (days < 1)
            if (String(hours).length < 2) {
                return `截標倒數0${hours}小時${minutes}分鐘${seconds}`
            }else {
                return `截標倒數${hours}小時${minutes}分鐘${seconds}`
            }

    }

    useEffect(() => {
        let remainTime = []
        //把所有deadline取出來計算剩餘時間
        if (aucInfo.length > 0) {
            for (let i = 0; i < (aucInfo.length); i++) {
                let deadlineA = new Date(aucInfo[i].aucDeadline).getTime()
                remainTime.push(TimeRemaining(deadlineA))
            }

            setAucRemainT(remainTime)
        }
        let test = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)
        // console.log('+++++++++++++++++++++++', count)
        return () => clearInterval(test)
    }, [count])

    // 一開始就會開始載入資料

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
                                    <AucBreadcrumb />
                                </div>
                                <div className="auctionArrangement cn-font">
                                    排列
                                </div>
                                <div className="auctionArrangementInput">
                                    <select
                                        className="auc-select pl-1 cn-font"
                                        onChange={handleChangeSelect}
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
                                    value={search}
                                    onChange={(event) => { setSearch(event.target.value) }}
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
                                getAucProFromServer={getAucProFromServer}
                                getAucProArrFromServer={getAucProArrFromServer}
                                aucInfo={aucInfo}
                                setAucInfo={setAucInfo}
                                TimeRemaining={TimeRemaining}
                                aucRemainT={aucRemainT}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default withRouter(Auction);