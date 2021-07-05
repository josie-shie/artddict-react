import React, { useState, useEffect } from 'react';
import monkey from '../images/monkey.jpg'
import { withRouter, Link } from 'react-router-dom'
import useInterval from './useInterval';

function AuctionProductCard(props) {
    const { aucId, aucName, aucPriceNow, deadline, TimeRemaining } = props
    const [delay, setDelay] = useState(1000);
    const [auctionRunning, setAuctionrunning] = useState(false)
    const [AuctionProductCard_CountDown, setAuctionProductCard_CountDown] = useState([0, '', 0, ''])
    const [loading, setLoading] = useState('')
    const [isRunning, setIsRunning] = useState(true);

    // 初始化倒數計時器
    useEffect(() => {
        //第一次計算剩餘時間(不控制)
        let newAucProductTimeRemaining = TimeRemaining(deadline)
        // console.log("我是百變怪", newAucProductTimeRemaining)
        //第一次計算剩餘時間(react資料流)
        setAuctionProductCard_CountDown(newAucProductTimeRemaining)
        // TimeRemaining(deadline)
        if ((newAucProductTimeRemaining.reduce((a, b) => a + b) < 0)) {
            console.log('競標結束')
            setLoading('競標結束')
            setAuctionrunning(false)
            setIsRunning(false)
            // console.log(aucName, 'loading', loading, 'isRunning', isRunning)
        } else {
            setAuctionrunning(true)
            console.log('競標繼續')
            if (newAucProductTimeRemaining[0] > 0)
                setAuctionProductCard_CountDown([newAucProductTimeRemaining[0], '天', newAucProductTimeRemaining[1] + 1, '小時'])
            if (newAucProductTimeRemaining[0] < 1)
                setAuctionProductCard_CountDown([newAucProductTimeRemaining[1], '小時', newAucProductTimeRemaining[2] + 1, '分鐘'])
        }
    }, [])

    useInterval(() => {
        //設立一個變數來避免 setstate非同步問題
        let TimeRemainingAA = TimeRemaining(deadline)
        // console.log(TimeRemainingAA)
        //更改state狀態
        //每秒計算剩餘時間
        setAuctionProductCard_CountDown(TimeRemainingAA)
        let bbb = TimeRemainingAA.reduce((a, b) => a + b)
        if (bbb < 0) {
            setAuctionrunning(false)
            setIsRunning(false)
            setLoading('競標結束')
            console.log('bye')
        } else {
            if (TimeRemainingAA[0] > 0)
                setAuctionProductCard_CountDown([TimeRemainingAA[0], '天', TimeRemainingAA[1] + 1, '小時'])
            if (TimeRemainingAA[0] < 1)
                setAuctionProductCard_CountDown([TimeRemainingAA[1], '小時', TimeRemainingAA[2] + 1, '分鐘'])
        }
    }, isRunning ? delay : null)

    return (
        <>
            <div className="col-4 auctionProductCard">
                <div className="auctionProduct_Picture_time">
                    <Link to={`/AuctionDetail/${aucId}`}>
                        <img src={monkey} alt="Background" />
                    </Link>
                    {auctionRunning ? (
                        <div className="auctionProduct_countdown">
                            截標倒數 <span>{AuctionProductCard_CountDown[0]}</span>
                            {AuctionProductCard_CountDown[1]}
                            <span>{AuctionProductCard_CountDown[2]}</span>
                            {AuctionProductCard_CountDown[3]}
                        </div>
                    ) : (<div className="auctionProduct_countdown auctionOver">{loading}</div>)}
                </div>
                <div className="auctionProductionTitle">
                    {aucName}
                </div>
                <div className="auctionProductCurrentPrice">目前價格: <span>NT ${aucPriceNow}</span></div>
            </div>
        </>
    );
}

export default withRouter(AuctionProductCard);