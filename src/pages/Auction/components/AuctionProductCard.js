import React, { useState, useEffect } from 'react';
import monkey from '../images/monkey.jpg'
import { withRouter, Link } from 'react-router-dom'
import useInterval from './useInterval';

function AuctionProductCard(props) {
    const { aucId, aucName, aucPriceNow, deadline, aucImg, TimeRemaining, search, arrangement,aucInfo } = props
    const [delay, setDelay] = useState(1000);
    const [auctionRunning, setAuctionrunning] = useState(false)
    const [AuctionProductCard_CountDown, setAuctionProductCard_CountDown] = useState([0, '', 0, ''])
    const [loading, setLoading] = useState('')
    const [isRunning, setIsRunning] = useState(true);
    // const [deadlineB,setDeadline] = useState()

    // 初始化倒數計時器
    useEffect(() => {
        // console.log("觸發",aucName)
        //第一次計算剩餘時間(不控制)
        let deadlineA = new Date(deadline).getTime()
        let newAucProductTimeRemaining = TimeRemaining(deadlineA)
        //第一次計算剩餘時間(react資料流)
        setAuctionProductCard_CountDown(newAucProductTimeRemaining)
        // TimeRemaining(deadline)
        if ((newAucProductTimeRemaining.reduce((a, b) => a + b) < 0)) {
            // console.log(newAucProductTimeRemaining,'產品名字',aucName)
            console.log('競標結束')
            setLoading('競標結束')
            setAuctionrunning(false)
            setIsRunning(false)
            // console.log(aucName, 'loading', loading, 'isRunning', isRunning)
        } else {
            setAuctionrunning(true)
            // console.log('競標繼續')
            if (newAucProductTimeRemaining[0] > 0)
                setAuctionProductCard_CountDown([newAucProductTimeRemaining[0], '天', newAucProductTimeRemaining[1] + 1, '小時'])
            if (newAucProductTimeRemaining[0] < 1)
                setAuctionProductCard_CountDown([newAucProductTimeRemaining[1], '小時', newAucProductTimeRemaining[2] + 1, '分鐘'])
        }
    }, [])
    // console.log('產品資料',aucInfo)
    useEffect(() => {
        // setIsRunning(false)
    }, [search, arrangement])

    useInterval(() => {
        // console.log("該商品名稱",aucName)
        // console.log("該商品截止日",deadline)
        // 把日期換算成毫秒
        let deadlineA = new Date(deadline).getTime()
        //設立一個變數來避免 setstate非同步問題
        let TimeRemainingAA = TimeRemaining(deadlineA)
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
            // console.log(aucName,TimeRemainingAA)
            if (TimeRemainingAA[0] > 0)
                setAuctionProductCard_CountDown([TimeRemainingAA[0], '天', TimeRemainingAA[1] + 1, '小時'])
            if (TimeRemainingAA[0] < 1)
                setAuctionProductCard_CountDown([TimeRemainingAA[1], '小時', TimeRemainingAA[2] + 1, '分鐘'])
        }
    }, isRunning ? delay : null)

    return (
        <>
            {/* {console.log('card的render')}
            {console.log('-------------------------------')} */}
            <div className="col-4 auctionProductCard">
                <div className="auctionProduct_Picture_time">
                    <div className="auctionProduct_Picture">
                        <Link to={`/AuctionDetail/${aucId}`}>
                            <img src={`http://localhost:6005/aucpics/auc/${aucImg}`} alt="Background" />
                        </Link>
                    </div>
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