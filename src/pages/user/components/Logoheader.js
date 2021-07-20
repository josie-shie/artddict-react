import React, { useState } from 'react'
import logo from '../img/logo-bk.svg'
import '../styles/Logoheader.scss'

function Logoheader(props) {
  /* 
  呼叫Logoheader時, 附上兩個參數
   - user_id = 根據這個ID我們去fetch user name來顯示在header
   - show_user_name = 決定要不要顯示抓到的user name
  */
  const [username, setUsername] = useState('')
  const [welcometext, setWelcome] = useState('')
  if (props.user_id !== null) {
    console.log('props at header = ', props)
    const user_id = props.user_id
    const showusername = props.show_user_name
    // react hook
    getUserById()

    async function getUserById() {
      console.log('sending request')
      // 連接的伺服器資料網址
      const url = `http://localhost:6005/users/${user_id}`

      // 注意資料格式要設定，伺服器才知道是json格式
      const request = new Request(url, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })
      const response = await fetch(request)
      const data = await response.json()
      setUsername(data.name)
      //取得要顯示的字串
      if (showusername) {
        // 如果不是登入或註冊的狀況, 根據ID去抓mysql的name欄位來顯示
        setWelcome(`Hello! ${username}`)
        console.log('user name = ', username)
        console.log('welcome text = ', welcometext)
      }
    }
  }

  return (
    <>
      <header className="d-none d-lg-block d-xl-block">
        <div className="u-container-fluid">
          <div className="u-logo-header">
            <img src={logo} alt="logo" />
            <div className="u-username">{welcometext}</div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Logoheader
