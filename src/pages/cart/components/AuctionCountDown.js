import React, { useEffect, useState } from 'react'
import { Link, withRouter } from 'react-router-dom'

const AuctionCountDown = () => {
  const data = [
    '2021-07-24 12:00:00',
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

  return <>{aucRemainT[0]}</>
}

export default withRouter(AuctionCountDown)
