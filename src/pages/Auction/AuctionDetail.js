import React, { useEffect, useState } from 'react';
import './style/auctionDetail.css';
import { withRouter, Link } from 'react-router-dom'
import monkey from './images/monkey.jpg'
import ArtDDICTLOGbw from './images/ArtDDICTLOGbw.svg'
import AuctionDetailcountDown from './components/AuctionDetailcountDown'
import useInterval from './components/useInterval'

//模擬伺服器端的資料
import { data } from './data/data.js'


function AuctionDetail(props) {
  //倒數計時器間隔
  const [delay, setDelay] = useState(500);
  //倒數計時器停止與否  
  const [isRunning, setIsRunning] = useState(true);

  //是否要進行倒數
  const [auctionRunning, setAuctionrunning] = useState(false)
  //是否還在loading 若loading 會給予空白 loading完成 render在螢幕上
  const [loading, setLoading] = useState('')

  //預設資料物件
  const [aucProduct, setAucProduct] = useState(
    {
      aucId: 0,
      aucName: '',
      aucPriceNow: 1,
      deadline: 0,
    }
  )

  //剩餘時間
  const [auctionDetailcountdown, setAuctionDetailcountdown] = useState([0, 0, 0, -1])

  // console.log('delay',delay,'auctionRunning',auctionRunning,'loading',loading,'isRunning',isRunning,'aucProduct',aucProduct)
  //千分位逗號分隔的api
  const internationalNumberFormat = new Intl.NumberFormat('en-US')


  let newAucProduct = 0;
  useEffect(() => {
    //從資料庫抓取資料
    const product = data.find((v, i) => {

      return parseInt(props.match.params.id) === v.aucId
    })

    if (product)
      setAucProduct(product)
    newAucProduct = product
    console.log('抓資料', newAucProduct)

  }, [])

  //計算剩餘時間 
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
    console.log( days, "天", hours, '小時', minutes, '分鐘', seconds, '秒')


    return [days, hours, minutes, seconds]

  }

  // 初始化倒數計時器
  useEffect(() => {
    //第一次計算剩餘時間(不控制)
    let newAucProductTimeRemaining = TimeRemaining(newAucProduct.deadline)
    //第一次計算剩餘時間(react資料流)
    // TimeRemaining(aucProduct.deadline)
    const cc =newAucProductTimeRemaining.reduce((a, b)=> a + b)
    if (cc < 0) {
      console.log('競標結束')
      setLoading('競標結束')
      setIsRunning(false)
    }else{
      console.log('競標繼續')
    }
  }, [])

  //倒時計時器
  useInterval(() => {
    //設立一個變數來避免 setstate非同步問題
    let TimeRemainingAA = TimeRemaining(aucProduct.deadline)
    //更改state狀態
    setAuctionDetailcountdown(TimeRemainingAA)
    //利用加總來計算時間是否歸0
    const bbb = TimeRemainingAA.reduce((a, b) => a + b)
    //當時間歸0 競價停止 倒數停止 
    if (bbb < 0) {
      setAuctionrunning(false)
      setIsRunning(false)
      setLoading('競標結束')
      console.log('bye')
    }else{
      console.log("有進來嗎")
      setAuctionrunning(true)
    }
  }, isRunning ? delay : null)


  console.log('--------------------')
  return (
    <>
      <div className="auctionDetailContent">
        <div className="auctionDetailleftContent">
          <div className="leftContent_firstpart">
            <div id="auctionDetailLOGO">
              <img src={ArtDDICTLOGbw} />
            </div>
            <div className="auctionDetailBreadcrumb">
              首頁/競標
            </div>
          </div>
          <div className="leftContent_secondpart">
            <div className="auctionDetailTitle">
              {aucProduct.aucName}
            </div>
            <div className="currentPrice">
              目前出價:NT${internationalNumberFormat.format(aucProduct.aucPriceNow)}
            </div>
            <div>
              最高出價者:謝*心
            </div>
          </div>
          <div className="leftContent_thirdpart">
            <div className="auctionDetailProductDesTitle">
              <div>商品描述</div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="4" viewBox="0 0 29 4">
                  <line id="Line_134" data-name="Line 134" x2="25" transform="translate(2 2)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="4" />
                </svg>
              </div>
            </div>
            <div className="auctionDetailProductDesContent">
              1889年9月，荷蘭後印象派畫家文森特·梵谷（Vincent van Gogh）在畫布上用油畫了自畫像。這幅作品可能是梵谷的最後一幅自畫像，是在他離開法國南部聖雷米的普羅旺斯之前不久畫的。這幅畫現在在巴黎的奧賽博物館（Muséed'Orsay）展出。
            </div>
          </div>
          <div className="leftContent_forthpart">
            <div className="auctionSpecification">
              <div>商品規格</div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30.5" viewBox="0 0 29 30.5">
                  <g id="Group_156" data-name="Group 156" transform="translate(2 2)">
                    <g id="Group_153" data-name="Group 153">
                      <line id="Line_59" data-name="Line 59" x2="25" transform="translate(0 13.25)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="4" />
                      <line id="Line_60" data-name="Line 60" y1="26.5" transform="translate(12.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="4" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div></div>
          </div>
          <div className="leftContent_fifthpart">
            <div className="priceRecord">
              <div className="priceRecordTitle">出價紀錄</div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30.5" viewBox="0 0 29 30.5">
                  <g id="Group_156" data-name="Group 156" transform="translate(2 2)">
                    <g id="Group_153" data-name="Group 153">
                      <line id="Line_59" data-name="Line 59" x2="25" transform="translate(0 13.25)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="4" />
                      <line id="Line_60" data-name="Line 60" y1="26.5" transform="translate(12.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="4" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="rightContentFix">
          <div className="auctionDetailrightContent">
            {console.log('render一波')}
            <AuctionDetailcountDown
              aucProduct={aucProduct}
              setAucProduct={setAucProduct}
              TimeRemaining={TimeRemaining}
              auctionDetailcountdown={auctionDetailcountdown}
              setAuctionDetailcountdown={setAuctionDetailcountdown}
              auctionRunning={auctionRunning}
              loading={loading}
            />
            {console.log("rneder二波")}
            <div className="auctionDetailPicture">
              <img src={monkey} alt="Background" />
            </div>
            <div className="auctionDetailcurrentPriceInput">
              <div className="auctionDetailcurrentPriceAboveInput">
                目前出價:NT${internationalNumberFormat.format(aucProduct.aucPriceNow)}
              </div>
              <div className="priceInput" >
                <input placeholder="請輸入下標價格" />
              </div>
            </div>
            <button className="auctionDetailButton">
              下標
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(AuctionDetail);

