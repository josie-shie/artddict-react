import React from 'react'
// import ReactDOM from 'react-dom'
import Menu from './components/Menu'
import Logoheader from './components/Logoheader'
import Breadcrumb from './components/UserBreadcrumb'
import './styles/Coupon.scss'
import swal from 'sweetalert'
import { IoIosCopy } from 'react-icons/io'
class Coupon extends React.Component {
  copy() {
    const copyEle = document.querySelector('.contentText')
    const range = document.createRange()
    window.getSelection().removeAllRanges()
    range.selectNode(copyEle)
    window.getSelection().addRange(range) // 加上選取範圍

    const copyStatus = document.execCommand('Copy')
    // const copyStatus = 0;
    if (copyStatus) {
      var coupon_msg = '複製成功'
      var msg_type = 'success'
    } else {
      var coupon_msg = '複製失敗'
      var msg_type = 'error'
    }

    swal({
      text: coupon_msg,
      icon: msg_type,
      button: false,
      timer: 1000,
    })

    window.getSelection().removeAllRanges() // 取消選取範圍
  }

  render() {
    return (
      <div className="u-body">
        <Logoheader />
        <div className="u-breadcrumb">
          <Breadcrumb />
        </div>
        <div className="u-userMenu d-none d-lg-block d-xl-block">
          <Menu />
        </div>
        <div className="u-couponbox d-flex">
          <div class="u-Text col-7">
            <div class="u-couponTitle">
              <p>生日禮</p>
            </div>
            <div class="u-couponText">
              <p>消費不論金額即享免運！</p>
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
          <div class="u-couponBtn col">
            <div class="u-SNnumbox">
              <p type="copy" className="contentText">
                HBD 123
              </p>
            </div>
            <div class="u-cobyBtn">
              <button onClick={this.copy}>
                <IoIosCopy /> 複製
              </button>
            </div>
          </div>
        </div>
        <div className="u-couponmsg"></div>
      </div>
    )
  }
}

export default Coupon
