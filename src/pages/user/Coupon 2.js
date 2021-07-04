import React from 'react'
import Menu from './components/Menu'
import Logoheader from './components/Logoheader'
import './styles/Coupon.scss'
import { message } from 'antd'

class Coupon extends React.Component {
  //一鍵複製功能
  copy() {
    const copyEle = document.querySelector('.contentText') // 獲取要複製的節點
    const range = document.createRange() // 創造range
    window.getSelection().removeAllRanges() //清除頁面中已有的selection
    range.selectNode(copyEle) // 選中需要複製的節點
    window.getSelection().addRange(range) // 執行選中元素
    const copyStatus = document.execCommand('Copy') // 執行copy操作
    // 對成功與否定進行提示
    if (copyStatus) {
      message.success('複製成功')
    } else {
      message.fail('複製失敗')
    }
    window.getSelection().removeAllRanges() //清除頁面中已有的selection
  }
  render() {
    return (
      <div className="u-body">
        <Logoheader />
            <div className="u-userMenu">
                <Menu />
            </div>
        <div class="u-couponbox d-flex">
          <div class="u-Text col-6">
            <div class="u-couponTitle">
              <h3>生日禮</h3>
            </div>
            <div class="u-couponText">
              <h5>消費不論金額即享免運！</h5>
            </div>
            <div class="u-couponDate d-flex">
              <div class="u-cd">
                <h5>使用期限：</h5>
              </div>
              <div class="u-end">
                <h5>2021-12-22</h5>
              </div>
            </div>
          </div>
          <div class="u-couponBtn col-6">
            <div class="u-SNnumbox">
              <h3 type="copy" className="contentText">
                Hello Chole
              </h3>
            </div>
            <div class="u-cobyBtn">
              <button onClick={this.copy}>複製</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Coupon
