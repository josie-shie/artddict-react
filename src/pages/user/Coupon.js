import React from 'react'
import Menu from './components/Menu'
import Logoheader from './components/Logoheader'
import './styles/Coupon.scss'
import { message } from 'antd'

class Coupon extends React.Component {
  copy() {
    const copyEle = document.querySelector('.contentText')
    const range = document.createRange() 
    window.getSelection().removeAllRanges() 
    range.selectNode(copyEle)
    window.getSelection().addRange(range) 
    const copyStatus = document.execCommand('Copy')
    if (copyStatus) {
      message.success('複製成功')
    } else {
      message.fail('複製失敗')
    }
    window.getSelection().removeAllRanges()
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
