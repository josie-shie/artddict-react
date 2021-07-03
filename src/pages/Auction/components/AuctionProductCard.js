import React from 'react';
import monkey from '../images/monkey.jpg' 

function AuctionProductCard(props) {
    const { aucName, aucPriceNow ,deadline} = props

    console.log(props)
    console.log(parseInt(deadline))
    // 將資料拿到資料庫截止日期 從字串轉換成數字

    //截止時間(毫秒)
    const deadlineMin = new Date(parseInt(deadline));
    console.log("截止日期:", deadlineMin)

    //現在時間(毫秒)
    const timeRightNowA = new Date()
    const timeRightNow = timeRightNowA.getTime()
    console.log('現在時間:', timeRightNow )

    //呼叫函式
    const AuctionProductCard_CountDown= TimeRemaining(parseInt(deadline), timeRightNow)
    console.log(AuctionProductCard_CountDown)

    //計算剩餘時間 
    function TimeRemaining(deadlineMin, timeRightNow) {
        console.log()
        const TimeRemaining = deadline - timeRightNow

        console.log("剩餘時 TimeRemaining")

        const seconds = Math.floor(( TimeRemaining / 1000) % 60);
        const minutes = Math.floor(( TimeRemaining / 1000 / 60) % 60);
        const hours = Math.floor(( TimeRemaining / (1000 * 60 * 60)) % 24);
        const days = Math.floor( TimeRemaining / (1000 * 60 * 60 * 24));
        console.log(seconds,minutes,hours,days)

        if(days>0){
            return [days,'天',hours,'小時']
        }else{
            return [hours,'小時',minutes,'分鐘']
        }
    }


    // console.log(time)
    // console.log(time.getFullYear())
    // console.log(time.getMonth())
    // console.log(time.getDay())
    // console.log(time.getHours())
    // console.log(time.getMinutes())
    // console.log(time.getSeconds())

    // if(time.getMonth() < 1){

    // }


    return (
        <>
            <div className="col-4 auctionProductCard">
                <div className="auctionProduct_Picture_time">
                    <img src={monkey} alt="Background" />
                    <div className="auctionProduct_countdown">
                        截標倒數 <span>{AuctionProductCard_CountDown[0]}</span> {AuctionProductCard_CountDown[1]} <span>{AuctionProductCard_CountDown[2]}</span> {AuctionProductCard_CountDown[3]}
                    </div>
                </div>
                <div className="auctionProductionTitle">
                    {aucName}
                </div>
                <div className="auctionProductCurrentPrice">目前價格: <span>NT ${aucPriceNow}</span></div>
            </div>
        </>
    );
}

export default AuctionProductCard;