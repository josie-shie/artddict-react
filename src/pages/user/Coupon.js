import React from 'react'
import { Row } from 'react-bootstrap'
// import ReactDOM from 'react-dom'
import { withRouter, NavLink } from 'react-router-dom'
// import Menu from './components/Menu'
import Logoheader from './components/Logoheader'
import Breadcrumb from './components/UserBreadcrumb'
import './styles/Coupon.scss'
import swal from 'sweetalert'
import { IoIosCopy } from 'react-icons/io'
// class Coupon extends React.Component {
//   copy() {
//     const copyEle = document.querySelector('.contentText')
//     const range = document.createRange()
//     window.getSelection().removeAllRanges()
//     range.selectNode(copyEle)
//     window.getSelection().addRange(range) // 加上選取範圍

//     const copyStatus = document.execCommand('Copy')
//     // const copyStatus = 0;
//     if (copyStatus) {
//       var coupon_msg = '複製成功'
//       var msg_type = 'success'
//     } else {
//       var coupon_msg = '複製失敗'
//       var msg_type = 'error'
//     }

//     swal({
//       text: coupon_msg,
//       icon: msg_type,
//       button: false,
//       timer: 1500,
//     })

//     window.getSelection().removeAllRanges() // 取消選取範圍
//   }

//   render(id) {
//     return (
//       <div className="u-body">
//         <Logoheader />
//         <div className="u-breadcrumb">
//           <Breadcrumb />
//         </div>
//         {/* <div className="u-userMenu d-none d-lg-block d-xl-block">
//           <Menu />
//         </div> */}
//         <div className="tab-bar">
//           <NavLink
//             activeClassName="activenav"
//             className={'tab'}
//             to={`/user-msgedit/${id}`}
//             style={{ textDecoration: 'none' }}
//           >
//             修改資料
//           </NavLink>

//           <NavLink
//             activeClassName="activenav"
//             className={'tab'}
//             to={`/user-orderpro/${id}`}
//             style={{ textDecoration: 'none' }}
//           >
//             訂單查詢
//           </NavLink>
//           <NavLink
//             activeClassName="activenav"
//             className={'tab'}
//             to={`/user-coupon/${id}`}
//             style={{ textDecoration: 'none' }}
//           >
//             我的優惠券
//           </NavLink>
//           <NavLink
//             activeClassName="activenav"
//             className={'tab'}
//             to={`/user-ticket/${id}`}
//             style={{ textDecoration: 'none' }}
//           >
//             我的票券
//           </NavLink>
//           <NavLink
//             activeClassName="activenav"
//             className={'tab'}
//             to={`/user-myfav/${id}`}
//             style={{ textDecoration: 'none' }}
//           >
//             我的收藏
//           </NavLink>
//           <NavLink
//             activeClassName="activenav"
//             className={'tab'}
//             to="/user-auction"
//             style={{ textDecoration: 'none' }}
//           >
//             競標查詢
//           </NavLink>
//           {/* <NavLink
//           activeClassName="activenav"
//           className={'tab'}
//           to="/user-login"
//           onClick={() => {
//             logoutToSever()
//           }} */}
//           {/* style={{ textDecoration: 'none' }}
//         >
//           登出
//         </NavLink> */}
//         </div>
//         <div className="u-Line"></div>
//         <Row className="d-flex ml-5">
//           <div className="col-6">
//             <div className="u-couponbox d-flex">
//               <div class="u-Text col-6">
//                 <div class="u-couponTitle">
//                   <p>新會員！</p>
//                 </div>
//                 <div class="u-couponText">
//                   <p>300元折價券</p>
//                 </div>
//                 <div class="u-couponDate d-flex">
//                   <div class="u-cd">
//                     <h5>使用期限：</h5>
//                   </div>
//                   <div class="u-end">
//                     <h5>2021-08-30</h5>
//                   </div>
//                 </div>
//               </div>
//               <div class="u-couponBtn col">
//                 <div class="u-SNnumbox">
//                   <p type="copy" className="contentText">
//                     tru4r8
//                   </p>
//                 </div>
//                 <div class="u-cobyBtn">
//                   <button onClick={this.copy}>
//                     <IoIosCopy /> 複製
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-6">
//             <div className="u-couponbox d-flex">
//               <div class="u-Text col-6">
//                 <div class="u-couponTitle">
//                   <p>低消滿 $1000</p>
//                 </div>
//                 <div class="u-couponText">
//                   <p>現折 $100</p>
//                 </div>
//                 <div class="u-couponDate d-flex">
//                   <div class="u-cd">
//                     <h5>使用期限：</h5>
//                   </div>
//                   <div class="u-end">
//                     <h5>2021-07-31</h5>
//                   </div>
//                 </div>
//               </div>
//               <div class="u-couponBtn col">
//                 <div class="u-SNnumbox">
//                   <p type="copy" className="contentText">
//                     DFg2FW
//                   </p>
//                 </div>
//                 <div class="u-cobyBtn">
//                   <button onClick={this.copy}>
//                     <IoIosCopy /> 複製
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Row>
//       </div>
//     )
//   }
// }

// export default withRouter(Coupon)

function Coupon(props) {
  const userid = props.match.params.userid
  async function copy_one() {
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
      timer: 1500,
    })

    window.getSelection().removeAllRanges() // 取消選取範圍
  }

  async function copy_two() {
    const copyEle = document.querySelector('.contentText1')
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
      timer: 1500,
    })

    window.getSelection().removeAllRanges() // 取消選取範圍
  }
  async function logoutToSever() {
    // 連接的伺服器資料網址
    localStorage.removeItem('token')
    const url = 'http://localhost:6005/users/logout'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    // 要等驗証過，再設定資料(簡單的直接設定)

    swal({
      text: '登出成功！',
      icon: 'success',
      button: false,
      timer: 3000,
    })

    const response = await fetch(request)
    const data = await response.json()
  }
  return (
    <div className="u-body">
      <Logoheader user_id={userid} show_user_name={true} />
      <div className="u-breadcrumb">
        <Breadcrumb />
      </div>

      <div className="tab-bar">
        <NavLink
          activeClassName="activenav"
          className={'tab'}
          to={`/user-msgedit/${userid}`}
          style={{ textDecoration: 'none' }}
        >
          修改資料
        </NavLink>

        <NavLink
          activeClassName="activenav"
          className={'tab'}
          to={`/user-orderpro/${userid}`}
          style={{ textDecoration: 'none' }}
        >
          訂單查詢
        </NavLink>
        <NavLink
          activeClassName="activenav"
          className={'tab'}
          to={`/user-coupon/${userid}`}
          style={{ textDecoration: 'none' }}
        >
          我的優惠券
        </NavLink>
        <NavLink
          activeClassName="activenav"
          className={'tab'}
          to={`/user-ticket/${userid}`}
          style={{ textDecoration: 'none' }}
        >
          我的票券
        </NavLink>
        <NavLink
          activeClassName="activenav"
          className={'tab'}
          to={`/user-myfav/${userid}`}
          style={{ textDecoration: 'none' }}
        >
          我的收藏
        </NavLink>
        <NavLink
          activeClassName="activenav"
          className={'tab'}
          to={`/user-auction/${userid}`}
          style={{ textDecoration: 'none' }}
        >
          競標查詢
        </NavLink>
        <NavLink
          activeClassName="activenav"
          className={'tab'}
          to="/user-login"
          onClick={() => {
            logoutToSever()
          }}
          style={{ textDecoration: 'none' }}
        >
          登出
        </NavLink>
      </div>
      <div className="u-Line"></div>
      <Row className="d-flex ml-5">
        <div className="col-6">
          <div className="u-couponbox d-flex">
            <div class="u-Text col-6">
              <div class="u-couponTitle">
                <p>歡度週年慶</p>
              </div>
              <div class="u-couponText">
                <p>500元折價券</p>
              </div>
              <div class="u-couponDate d-flex">
                <div class="u-cd">
                  <h5>使用期限：</h5>
                </div>
                <div class="u-end">
                  <h5>2021-08-30</h5>
                </div>
              </div>
            </div>
            <div class="u-couponBtn col">
              <div class="u-SNnumbox">
                <p type="copy" className="contentText">
                  tru4r8
                </p>
              </div>
              <div class="u-cobyBtn">
                {/* <button onClick={this.copy}> */}
                <button
                  onClick={() => {
                    copy_one()
                  }}
                >
                  <IoIosCopy /> 複製
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-6">
          <div className="u-couponbox d-flex">
            <div class="u-Text col-6">
              <div class="u-couponTitle">
                <p>低消滿 $1000</p>
              </div>
              <div class="u-couponText">
                <p>現折 $100</p>
              </div>
              <div class="u-couponDate d-flex">
                <div class="u-cd">
                  <h5>使用期限：</h5>
                </div>
                <div class="u-end">
                  <h5>2021-07-31</h5>
                </div>
              </div>
            </div>
            <div class="u-couponBtn col">
              <div class="u-SNnumbox">
                <p type="copy" className="contentText1">
                  DFg2FW
                </p>
              </div>
              <div class="u-cobyBtn">
                <button
                  // onClick={this.copy}
                  onClick={() => {
                    copy_two()
                  }}
                >
                  <IoIosCopy /> 複製
                </button>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </div>
  )
}

export default withRouter(Coupon)
