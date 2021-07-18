import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'

import auc1 from '../image/acution/MaskGroup2.jpg'
import auc2 from '../image/acution/MaskGroup3.jpg'
import auc3 from '../image/acution/MaskGroup4.jpg'
import auc4 from '../image/acution/MaskGroup5.jpg'

const AuctionCard = () => {
  const data = [
    '2021-08-04 00:00:00',
    '2021-07-30 00:00:00',
    '2021-08-06 00:00:00',
    '2021-08-10 00:00:00',
  ]
  const [count, setCount] = useState(0)
  const [aucRemainT, setAucRemainT] = useState([])

  //將時間設定為毫秒
  const TimeRemaining = (deadline) => {
    //截止時間(毫秒)
    // 將資料拿到資料庫截止日期 從字串轉換成數字
    const deadlineMin = parseInt(deadline)
    //現在時間(毫秒)
    const timeRightNow = new Date().getTime()

    const TimeRemaining = deadlineMin - timeRightNow

    const seconds = Math.floor((TimeRemaining / 1000) % 60)
    const minutes = Math.floor(
      (TimeRemaining / 1000 / 60) % 60
    )
    const hours = Math.floor(
      (TimeRemaining / (1000 * 60 * 60)) % 24
    )
    const days = Math.floor(
      TimeRemaining / (1000 * 60 * 60 * 24)
    )
    // console.log(days, "天", hours, '小時', minutes, '分鐘', seconds, '秒')
    if (TimeRemaining < 0) {
      return '競標結束'
    } else {
      return `${days}天 ${hours}小時 ${minutes}分鐘 ${seconds}秒`
    }
  }

  //每秒重新去渲染時間
  useEffect(() => {
    let remainTime = []
    //把所有deadline取出來計算剩餘時間
    if (data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        let deadlineA = new Date(data[i]).getTime()
        remainTime.push(TimeRemaining(deadlineA))
      }

      setAucRemainT(remainTime)
      //console.log(remainTime) //value exist
      //console.log(aucRemainT) //value exist
    }
    let test = setInterval(() => {
      setCount((count) => count + 1)
    }, 1000)
    //console.log('+++++++++++++++++++++++', count)
    return () => clearInterval(test)
  }, [count])

  return (
    <>
      <div className="auction-card-wrap d-flex">
        <div className="auction-card col-3">
          <Link to="/AuctionDetail/70005">
            <img src={auc4} alt="" />
            <div className="index-card-rect notoSansTC-md">
              {aucRemainT[0]}
            </div>
          </Link>
          <h5 className="notoSansTC-md font-weight-bold">
            奈旭美雪 [何時結婚]
          </h5>
        </div>
        <div className="auction-card col-3">
          <Link to="/AuctionDetail/70010">
            <img src={auc2} alt="" />
            <div className="notoSansTC-md index-card-rect">
              {aucRemainT[1]}
            </div>
            <h5 className="notoSansTC-md font-weight-bold">
              鹽田千春 [捕夢網]
            </h5>
          </Link>
        </div>
        <div className="auction-card col-3">
          <Link to="/AuctionDetail/70001">
            <img src={auc3} alt="" />
            <div className="notoSansTC-md index-card-rect">
              {aucRemainT[2]}
            </div>
            <h5 className="notoSansTC-md font-weight-bold">
              松本龍介 [無題]
            </h5>
          </Link>
        </div>
        <div className="auction-card col-3">
          <Link to="/AuctionDetail/70008">
            <img src={auc1} alt="" />
            <div className="notoSansTC-md index-card-rect">
              {aucRemainT[3]}
            </div>
            <h5 className="notoSansTC-md font-weight-bold">
              山琦 潤 [無題]
            </h5>
          </Link>
        </div>
      </div>
    </>
  )
}

export default withRouter(AuctionCard)
