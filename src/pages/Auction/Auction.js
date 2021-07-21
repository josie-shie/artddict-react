import React, { useEffect, useState } from 'react';
import './style/auction.scss'
import { withRouter, Link } from 'react-router-dom'
import { Container, Row, Button, Collapse, } from 'react-bootstrap'

import { data } from './data/data.js'

import AuctionProductList from './components/AuctionProductList'
import AuctionSlider from './components/AuctionSlider'
import AucBreadcrumb from './components/AucBreadcrumb'
import PageNumber from './components/pageNumber'
import ThreeJs from './components/ThreeJs'

// import Breadcrumb from './components/UserBreadcrumb'

import auctionLogo from './images/auctionLogo.svg'
import auctionarrow from './images/arrow.svg'
import selectArrow from './images/selectArrow.svg'
import $ from 'jquery'


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
    const [category, setCategory] = useState([])
    const [aucInfo, setAucInfo] = useState([])

    const [count, setCount] = useState(0)
    const [aucRemainT, setAucRemainT] = useState([])

    const [colorChange, setColorChange] = useState('')

    //頁碼
    //該頁頁碼
    const [pages, setPages] = useState([])
    //頁碼資料
    const [pagesinfo, setPagesInfo] = useState('')
    //顯示的頁碼
    const [showPages, setShowPages] = useState([1, 2, 3, 4, 5])


    const [priceRange, setPriceRange] = useState('0,38000')
    const [priceRange2, setPriceRange2] = useState(8000)

    const [onenine, setOnenine] = useState(true)

    //選擇排列順序
    const handleChangeSelect = (e) => {
        // console.log("選擇的順序",e.target.value)
        setArrangement(e.target.value)
    }


    const changecolor = () => {
        // $('.colorChange').onclick(function () {
        //     const bgColor = $(this).css('black');
        //     $('.colorChange').css('background-color', 'black').css('fontSize', '2rem');
        // });
    }

    //下一頁
    const nextpage = () => {
        if (pages < pagesinfo.totalPages) {
            let nowcurrentPage = pages + 1
            setPages(pages + 1)
            if (nowcurrentPage > 2 && nowcurrentPage < (pagesinfo.totalPages - 1) && pagesinfo.totalPages > 5) {
                setShowPages([nowcurrentPage - 2, nowcurrentPage - 1, nowcurrentPage, nowcurrentPage + 1, nowcurrentPage + 2])
            }
        }
    }

    //上一頁
    const previouspage = () => {
        if (pages > 1) {
            let nowcurrentPage = pages - 1
            setPages(pages - 1)
            if (nowcurrentPage > 2 && nowcurrentPage < (pagesinfo.totalPages - 1) && pagesinfo.totalPages > 5) {
                setShowPages([nowcurrentPage - 2, nowcurrentPage - 1, nowcurrentPage, nowcurrentPage + 1, nowcurrentPage + 2])
            }
        }
    }

    $('.auc_siblings').click(function () {
        $(this)
            .addClass('changeColors')
            .parent()
            .siblings()
            .children()
            .removeClass('changeColors')
    })

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

    //撈資料
    async function getAucProArrFromServer() {

        // 連接的伺服器資料網址
        const url = 'http://localhost:6005/auctoin/aucSeaArr' + `?search=${search}` + `&arrangement=${arrangement}` + `&category=${category}` + `&pages=${pages}` + `&priceRange=${priceRange}`
        // 注意header資料格式要設定，伺服器才知道是json格式
        const request = new Request(url, {
            method: 'GET',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'appliaction/json',
            }),
        })

        // console.log(pages)
        const response = await fetch(request)
        const data = await response.json()
        //設定page的資料
        setPagesInfo(data[0])

        //設定顯示幾個頁碼
        // console.log(data[0].totalPages)
        if (data[0].totalPages < 6) {
            let pagelength = []
            for (let i = 0; i < data[0].totalPages; i++) {
                pagelength.push(i + 1)
            }
            console.log(pagelength)
            setShowPages(pagelength)
        }

        //拿掉page資料
        data.shift()

        // 設定資料
        setAucInfo(data)
    }

    //執行查詢排列頁碼更換
    useEffect(() => {
        getAucProFromServer()
    }, [])

    //如果選到頁數以外的 重置頁數
    useEffect(() => {
        setPages(1)
        setShowPages([1, 2, 3, 4, 5])
    }, [search, arrangement, category])

    useEffect(() => {
        getAucProArrFromServer()
    }, [search, arrangement, category, pages, priceRange])

    //計算剩餘時間
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
                return `截標倒數0${days}天${hours}小時`
            } else {
                return `截標倒數${days}天${hours}小時`
            }
        }
        if (days < 1)
            if (String(hours).length < 2) {
                return `截標倒數0${hours}小時${minutes}分鐘`
            } else {
                return `截標倒數${hours}小時${minutes}分鐘`
            }

    }

    //倒數計時器
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

    //showing
    useEffect(() => {
        if (pages > 1) {
            setOnenine(false)
        } else {
            setOnenine(true)
        }
    }, [pages])

    const loading = (
        <>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </>
    )

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
                    {/* <ThreeJs/> */}
                    <div id="root"></div>
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
                                {onenine ?
                                    (<div className="auctionNumberOfProduct cn-font">Showing 1-9 of {pagesinfo.totalRows}</div>) :
                                    (<div className="auctionNumberOfProduct cn-font">Showing {9 * (pages - 1)}-{pages * 9} of {pagesinfo.totalRows}</div>)}
                            </div>
                            <div className="auctionMainFilterRight">
                                <AuctionSlider
                                    priceRange={priceRange}
                                    setPriceRange={setPriceRange}
                                    priceRange2={priceRange2}
                                    setPriceRange2={setPriceRange2}
                                />
                            </div>
                        </div>
                        <div className="auctionMainContent cn-font">
                            <div className="auctionsidebar cn_font">
                                <div className="auctionsidebarTitle "
                                >美術館商品</div>
                                <div className="auc-controlCatCol">
                                    <Link style={{ textDecoration: 'none', color: 'black' }}
                                        onClick={(e) => {
                                            e.preventDefault()
                                        }}
                                    ><li onClick={
                                        (event) => { setCategory('') }
                                    } className="changeColors auc_li auc_siblings">全部商品</li></Link>

                                    <Link style={{ textDecoration: 'none', color: 'black' }}
                                        onClick={(e) => {
                                            e.preventDefault()
                                        }}
                                    ><li onClick={(event) => { setCategory('Paintings') }} className=" auc_siblings auc_li">畫作</li></Link>

                                    <Link style={{ textDecoration: 'none', color: 'black' }}
                                        onClick={(e) => {
                                            e.preventDefault()
                                        }}
                                    ><li onClick={(event) => { setCategory('clothes') }} className="auc_siblings auc_li">服飾</li></Link>

                                    <Link style={{ textDecoration: 'none', color: 'black' }}
                                        onClick={(e) => {
                                            e.preventDefault()
                                        }}
                                    ><li onClick={(event) => { setCategory('furniture') }} className="auc_siblings auc_li">家飾</li></Link>

                                    <Link style={{ textDecoration: 'none', color: 'black' }}
                                        onClick={(e) => {
                                            e.preventDefault()
                                        }}
                                    ><li onClick={(event) => { setCategory('stationery') }} className="auc_siblings auc_li">文具</li></Link>

                                    <Link style={{ textDecoration: 'none', color: 'black' }}
                                        onClick={(e) => {
                                            e.preventDefault()
                                        }}
                                    ><li onClick={(event) => { setCategory('books') }} className="auc_siblings auc_li">書籍</li></Link>

                                    <Link style={{ textDecoration: 'none', color: 'black' }}
                                        onClick={(e) => {
                                            e.preventDefault()
                                        }}
                                    ><li onClick={(event) => { setCategory('accessories') }} className="auc_siblings auc_li">配件</li></Link>

                                    {/* {console.log(category)} */}
                                </div>
                            </div>
                                <div>
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
                                        category={category}
                                    />
                                    <div>
                                        <Row className="justify-content-center eng-font-regular mt-5 py-5">
                                            <Link className="ed-pagenum mx-3" onClick={previouspage}>
                                                <IoIosArrowBack />
                                            </Link>
                                            {showPages.map((pageNumber, i) => (
                                                <PageNumber key={i}
                                                    pages={pages}
                                                    setPages={setPages}
                                                    pagesinfo={pagesinfo}
                                                    currentPage={showPages[i]}
                                                    showPages={showPages}
                                                    setShowPages={setShowPages}
                                                />
                                            ))}
                                            <Link className="ed-pagenum mx-3" onClick={nextpage}>
                                                <IoIosArrowForward />
                                            </Link>
                                        </Row>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default withRouter(Auction);