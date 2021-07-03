import React from 'react';
import { useState } from 'react';
import '../style/AuctionProductList.css';
import { withRouter,Link } from 'react-router-dom'
import '../../../bootstrap/css/bootstrap.css'
import AuctionProductCard from './AuctionProductCard'


function AuctionProductList(props) {
    const {data} = props
    console.log(data)

    function TimeRemaining(deadline) {
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
        console.log(days, "天", hours, '小時', minutes, '分鐘', seconds, '秒')


        return [days, hours, minutes, seconds]

    }

    return (
        <>
            <div className="container">
                <div className="row">
                {data.map((auctionProduct , index ) =>(
                    <AuctionProductCard
                        aucId={auctionProduct.aucId}
                        aucName={auctionProduct.aucName}
                        aucPriceNow={auctionProduct.aucPriceNow}
                        deadline={auctionProduct.deadline}
                        TimeRemaining={TimeRemaining}
                    />
                ))}
                </div>
            </div>
        </>
    );
}

export default withRouter(AuctionProductList);