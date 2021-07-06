import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
// style
import './styles/PwdEdit.scss'
import Menu from './components/Menu'
import Logoheader from './components/Logoheader'
import Breadcrumb from './components/UserBreadcrumb'

// function PwdEdit(props) {
//   return (
//     <>
//       <div className="u-body">
//         <Logoheader />
//         <div className="u-breadcrumb">
//           <Breadcrumb />
//         </div>
//         <div className="u-userMenu d-none d-lg-block d-xl-block">
//           <Menu />
//         </div>
//         <Container fluid>
//           <div className="d-flex u-row justify-content-around">
//             <div className="u-usertitleLeft">
//               <Link to="/user-msgedit">會員資料</Link>
//             </div>
//             <div className="u-usertitleRight">
//               <Link to="/user-pwdEdit">修改密碼</Link>
//             </div>
//           </div>
//         </Container>
//         <div className="u-userData col-6 mt-5">
//           <form>
//             <div className="form-group u-form1">
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//               />
//             </div>
//             <div className="form-group u-form1 mt-5">
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 placeholder="請輸入新密碼"
//               />
//             </div>
//             <div className="form-group u-form1 mt-5">
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 placeholder="再次輸入新密碼"
//               />
//             </div>
//             <div className="u-editBtn">
//               <button
//                 type="submit"
//                 className="btn btn-outline-dark "
//               >
//                 修改
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </>
//   )
// }

// export default PwdEdit

export default class RegistrationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      username: '',
      password: '',
      password_re: '',
      password_has_error: false,
    }
  }

  checkPassword() {
    if (
      !this.state.password ||
      this.state.password !== this.state.password_re
    ) {
      this.setState({ password_has_error: true })
    } else {
      this.setState({ password_has_error: false })
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })

    if (
      event.target.name === 'password' ||
      event.target.name === 'password_re'
    )
      this.checkPassword()
  }

  handleSubmit(event) {
    event.preventDefault()
    // TODO: will submit the form here
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
        <Container fluid>
          <div className="d-flex u-row justify-content-around">
            <div className="u-usertitleLeft">
              <Link to="/user-msgedit">會員資料</Link>
            </div>
            <div className="u-usertitleRight">
              <Link to="/user-pwdEdit">修改密碼</Link>
            </div>
          </div>
        </Container>
        <div className="u-userData col-6 mt-5">
          <form
            onSubmit={(event) => this.handleSubmit(event)}
          >
            <div className="form-group u-form1">
              <input
                type="password"
                className="form-control"
                id="password"
                value={this.state.password}
                onChange={(event) =>
                  this.handleChange(event)
                }
                placeholder="請輸入原密碼"
              />
            </div>
            <div className="form-group u-form1 mt-5">
              <input
                type="password"
                className="form-control"
                id="password"
                value={this.state.password_re}
                onChange={(event) =>
                  this.handleChange(event)
                }
                placeholder="請輸入新密碼"
              />
            </div>
            <div className="form-group u-form1 mt-5">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="再次輸入新密碼"
              />
            </div>
            <div className="u-editBtn">
              <button
                type="submit"
                className="btn btn-outline-dark "
              >
                修改
              </button>
            </div>
          </form>
        </div>
      </div>
      //       <form onSubmit={(event) => this.handleSubmit(event)}>
      //         <div>
      //           <label>Name</label>
      //           <input
      //             type="text"
      //             name="name"
      //             value={this.state.name}
      //             onChange={(event) => this.handleChange(event)}
      //           />
      //         </div>
      //         <div>
      //           <label>Email address</label>
      //           <input
      //             name="email"
      //             type="email"
      //             value={this.state.email}
      //             onChange={(event) => this.handleChange(event)}
      //           />
      //         </div>
      //         <div>
      //           <label>Password</label>
      //           <input
      //             type="password"
      //             name="password"
      //             value={this.state.password}
      //             onChange={(event) => this.handleChange(event)}
      //           />
      //         </div>
      //         <div>
      //           <label>Re-enter password</label>
      //           <input
      //             type="password"
      //             name="password_re"
      //             value={this.state.password_re}
      //             onChange={(event) => this.handleChange(event)}
      //           />
      //         </div>
      //         <button type="submit">Submit</button>
      //       </form>
    )
  }
}
