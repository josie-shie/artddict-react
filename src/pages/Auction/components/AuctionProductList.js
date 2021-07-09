import React from 'react';
import { useState, useEffect } from 'react';
import '../style/AuctionProductList.scss';
import { withRouter, Link } from 'react-router-dom'
import '../../../bootstrap/css/bootstrap.css'
import AuctionProductCard from './AuctionProductCard'


function AuctionProductList(props) {

    const { search, setSearch, arrangement } = props
    //用來放資料
    const [aucInfo, setAucInfo] = useState([])
    const [a,seta] = useState('')

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
        console.log('發送資料時的a',a)
        console.log('收到的資料',data,"AUCINFO",aucInfo)
        // 設定資料
        setAucInfo(data)
        console.log('收到的資料a',data,"AUCINFO666",aucInfo)
    }

    // 一開始就會開始載入資料
    useEffect(() => {
        getAucProFromServer()
    }, [])

    useEffect(() => {
        getAucProArrFromServer()
        // console.log('呼叫資料')
    }, [search,arrangement])

    // useEffect(() => {
    //     getAucProArrFromServer()
    // }, [arrangement])



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
        // console.log(days, "天", hours, '小時', minutes, '分鐘', seconds, '秒')


        return [days, hours, minutes, seconds]

    }

    return (
        <>  
        {/* {console.log('-----------------------------')} */}
            <div className="container">
                <div className="row">
                    {console.log("render時商品名稱",aucInfo)}
                    {/* const eventDisplay = events.map((event) => { */}
                    {aucInfo.map((auctionProduct, index) => (
                        <AuctionProductCard
                            aucId={auctionProduct.aucId}
                            aucName={auctionProduct.aucName}
                            aucPriceNow={auctionProduct.aucPriceNow}
                            deadline={auctionProduct.aucDeadline}
                            aucImg={auctionProduct.aucImg}
                            TimeRemaining={TimeRemaining}
                            search={search}
                            arrangement={arrangement}
                            aucInfo={aucInfo}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default withRouter(AuctionProductList);