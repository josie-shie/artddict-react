import React, { useState, useEffect } from 'react';
import monkey from '../images/monkey.jpg'
import { withRouter, Link } from 'react-router-dom'
import useInterval from './useInterval';

function AuctionProductCard(props) {
    const { aucId, aucName, aucPriceNow, deadline, aucImg, TimeRemaining, search, arrangement, aucInfo,aucRemainT } = props
    const [delay, setDelay] = useState(3000);
    //控制是否顯露倒數時間
    const [auctionRunning, setAuctionrunning] = useState(false)
    const [AuctionProductCard_CountDown, setAuctionProductCard_CountDown] = useState([0, '', 0, ''])
    const [loading, setLoading] = useState('')
    const [isRunning, setIsRunning] = useState(true);
    // const [deadlineB,setDeadline] = useState()   

    return (
        <>
            {/* {console.log('card的render',aucInfo) */}
            {/*console.log('-------------------------------')} */}
            <div className="auctionProductCard">
                <div className="auctionProduct_Picture_time">
                    <div className="auctionProduct_Picture">
                        <Link to={`/AuctionDetail/${aucId}`}>
                            <img src={`http://localhost:6005/aucpics/auc/${aucImg}`} alt="Background" />
                        </Link>
                    </div>
                    {/* {auctionRunning ? (
                        <div className="auctionProduct_countdown">
                            截標倒數 <span>{AuctionProductCard_CountDown[0]}</span>
                            {AuctionProductCard_CountDown[1]}
                            <span>{AuctionProductCard_CountDown[2]}</span>
                            {AuctionProductCard_CountDown[3]}
                        </div>
                    ) : (<div className="auctionProduct_countdown auctionOver">{loading}</div>)} */}
                    <div className="auctionProduct_countdown"> {deadline}</div>
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