import { React, useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom'
import {
  Container,
  Row,
  Modal,
  Button,
} from 'react-bootstrap'

import swal from 'sweetalert'
import $ from 'jquery'

// import component
import Lightheader from './components/Lightheader'
import BreadCrumb from './components/EventBreadCrumb'

// react icons
import { IoIosArrowForward, IoMdAdd } from 'react-icons/io'

// import pictures
import Square from './images/square.gif'
// Pictures
import EuListCardPic from './images/event/108.jpg'
import EuListCardPic2 from './images/event/011.jpg'
import EuListCardPic3 from './images/event/009.jpg'

import './style/reset.css'
import './style/fontAndBtn.scss'
import './style/WorkshopUpload.scss'

function WorkshopUpload(props) {
  const id = props.match.params.id

  // input useRef
  const inputRef = useRef()
  const inputRef2 = useRef()
  const inputRef3 = useRef()
  const inputRef4 = useRef()

  // 一開始需要載入的狀態
  const [eventName, setEventName] = useState('')

  // Modal 顯示狀態
  const [show, setShow] = useState(false)

  // Modal 開關 function
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // button 啟動 input
  const triggerFileSelectPopup = () =>
    inputRef.current.click()
  const triggerFileSelectPopup2 = () =>
    inputRef2.current.click()
  const triggerFileSelectPopup3 = () =>
    inputRef3.current.click()
  const triggerFileSelectPopup4 = () =>
    inputRef4.current.click()

  // 圖片的上傳file
  const [isImg, setIsImg] = useState()
  const [isImg2, setIsImg2] = useState()
  const [isImg3, setIsImg3] = useState()
  const [isImg4, setIsImg4] = useState()
  // 圖檔名稱
  const [fileName, setFileName] = useState('')
  const [fileName2, setFileName2] = useState('')
  const [fileName3, setFileName3] = useState('')
  const [fileName4, setFileName4] = useState('')
  // 圖片的base64資料
  const [preview, setPreview] = useState()
  const [preview2, setPreview2] = useState()
  const [preview3, setPreview3] = useState()
  const [preview4, setPreview4] = useState()

  // 避免觸發刪除function狀態
  const [isPreparetoDel, setIsPreparetoDel] =
    useState(false)

  const [userId, setUserId] = useState('')
  const [shareComment, setShareComment] = useState('')

  // 先取得修改前資料
  async function getShareIdServer() {
    const url = `http://localhost:6005/event/share/${id}`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    const imgData = data.shareImg

    // data.shareImg 在資料庫中長這樣 ：["001.jpg","002.jpg","003.jpg","004.jpg"]
    const imgArr = JSON.parse(imgData)

    setEventName(data.eventName)

    if (imgArr.length >= 4) {
      setFileName(imgArr[0])
      setFileName2(imgArr[1])
      setFileName3(imgArr[2])
      setFileName4(imgArr[3])
    } else if (imgArr.length >= 3) {
      setFileName(imgArr[0])
      setFileName2(imgArr[1])
      setFileName3(imgArr[2])
    } else if (imgArr.length >= 2) {
      setFileName(imgArr[0])
      setFileName2(imgArr[1])
    } else if (imgArr.length >= 1) {
      setFileName(imgArr[0])
    }

    setShareComment(data.shareComment)
  }

  const uploadFile = async (e) => {
    const formData = new FormData()
    formData.append('file', isImg)
    formData.append('file', isImg2)
    formData.append('file', isImg3)
    formData.append('file', isImg4)
    try {
      const res = await axios.post(
        'http://localhost:6005/event/uploadPic',
        formData
      )
      console.log(res)
    } catch (ex) {
      console.log(ex)
    }
    console.log(formData, isImg, fileName)
  }

  async function updateEventShareSever() {
    const sharePhoto = [
      fileName,
      fileName2,
      fileName3,
      fileName4,
    ]
    const newData = { id, shareComment, sharePhoto }

    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/event/shareUpdate'

    // 注意資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'PUT',
      body: JSON.stringify(newData),
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    console.log(JSON.stringify(newData, fileName))

    const response = await fetch(request)
    const data = await response.json()

    console.log('伺服器回傳的json資料', data)
    // 要等驗証過，再設定資料(簡單的直接設定)

    //直接在一段x秒關掉指示器
    setTimeout(() => {
      props.history.push(
        `/event/event-list/detail/share/${id}`
      )
    }, 500)
  }

  async function deleteShareFromServer(id) {
    // 連接的伺服器資料網址
    const url = 'http://localhost:6005/event/delete/' + id

    // 注意header資料格式要設定，伺服器才知道是json格式
    const request = new Request(url, {
      method: 'DELETE',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()
    console.log(data)

    // 設定資料
    // if (!data.id) {
    //   const newUsers = users.filter((value, index) => {
    //     return value.id !== userid
    //   })
    // }
    setTimeout(() => {
      props.history.push(`/event/event-list/detail/${id}`)
    }, 500)
  }

  //驗證身分
  async function getjwtvertifyFromServer() {
    const token = localStorage.getItem('token')

    const response = await fetch(
      'http://localhost:6005/users/checklogin',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
        }),
      }
    )

    const data = await response.json()
    console.log(data)
    setUserId(data.id)

    if (!data.id) {
      swal({
        title: '請先登入',
        text: '您的登入驗證已過期或者尚未登入, 請重新登入\n正在將您導向登入頁面 ...',
        button: false,
        timer: 9000,
      })
      setTimeout(() => {
        window.location.replace(`../../../../user-login/`)
      }, 2000)
    }
  }

  useEffect(() => {
    getShareIdServer()
  }, [])

  // test shareComment is loaded
  useEffect(() => {
    console.log(shareComment)
  }, [isImg])

  useEffect(() => {
    if (isImg) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(isImg)
    } else {
      setPreview(null)
    }
  }, [isImg])

  useEffect(() => {
    if (isImg2) {
      const reader2 = new FileReader()
      reader2.onloadend = () => {
        setPreview2(reader2.result)
      }
      reader2.readAsDataURL(isImg2)
    } else {
      setPreview2(null)
    }
  }, [isImg2])

  useEffect(() => {
    if (isImg3) {
      const reader3 = new FileReader()
      reader3.onloadend = () => {
        setPreview3(reader3.result)
      }
      reader3.readAsDataURL(isImg3)
    } else {
      setPreview3(null)
    }
  }, [isImg3])

  useEffect(() => {
    if (isImg4) {
      const reader4 = new FileReader()
      reader4.onloadend = () => {
        setPreview4(reader4.result)
      }
      reader4.readAsDataURL(isImg4)
    } else {
      setPreview4(null)
    }
  }, [isImg4])

  return (
    <>
      <div className="reduce-width">
        <Lightheader />
        <Container className="e-upload " fluid>
          <Row className="py-4 eu-bread both-padding">
            <BreadCrumb />
          </Row>
          <Row className="both-padding">
            <div className="eu-pic-up col-12 p-0 mb-4">
              <h5 className="cn-font">主題工作坊</h5>
              <h2>{eventName}</h2>
            </div>
            {/* 資料form表單 */}
            <div className="col-12 pl-0 justify-content-between d-flex flex-wrap">
              <h5 className="eu-upload-title col-12 p-0 cn-font mb-3">
                作品圖片:
              </h5>
              <form
                className="col-8 p-0 justify-content-start d-flex flex-wrap"
                action=""
                method="post"
                enctype="multipart/form-data"
              >
                <div className="eu-pic-left col-8 p-0 mr-3">
                  <div
                    className="position-relative"
                    onClick={() => triggerFileSelectPopup()}
                    id="#bgImg"
                    style={{
                      backgroundImage:
                        'url(' +
                        `http://localhost:6005/eventpic/share/${fileName}` +
                        ')',
                      backgroundSize: 'cover',
                      opacity: preview ? 1 : 0.7,
                    }}
                  >
                    <input
                      type="file"
                      style={{ display: 'none' }}
                      ref={inputRef}
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files[0]
                        if (file) {
                          setIsImg(file)
                          setFileName(file.name)
                        } else {
                          setIsImg(null)
                        }
                      }}
                    />
                    {preview ? (
                      <img
                        className="w-100 h-100 position-absolute"
                        src={preview}
                        style={{ objectFit: 'cover' }}
                        alt=""
                      />
                    ) : (
                      <button
                        className="e-btn-m cn-font position-absolute"
                        type="button"
                      >
                        上傳新圖片
                        <IoMdAdd />
                      </button>
                    )}
                    <img src={Square} alt="" />
                  </div>
                </div>

                <div className="eu-pic-right col-3 p-0">
                  <div className="col-12 p-0 d-flex flex-wrap">
                    <div
                      className="col-10 p-0 position-relative"
                      onClick={() =>
                        triggerFileSelectPopup2()
                      }
                      style={{
                        backgroundImage:
                          'url(' +
                          `http://localhost:6005/eventpic/share/${fileName2}` +
                          ')',
                        backgroundSize: 'cover',
                        opacity: preview2 ? 1 : 0.7,
                      }}
                    >
                      <input
                        type="file"
                        style={{ display: 'none' }}
                        ref={inputRef2}
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0]
                          if (file) {
                            setIsImg2(file)
                            setFileName2(file.name)
                          } else {
                            setIsImg2(null)
                          }
                        }}
                      />
                      {preview2 ? (
                        <img
                          className="w-100 h-100 position-absolute"
                          src={preview2}
                          style={{ objectFit: 'cover' }}
                          alt=""
                        />
                      ) : (
                        <button
                          className="position-absolute"
                          type="button"
                        >
                          <IoMdAdd />
                        </button>
                      )}
                      <img src={Square} alt="" />
                    </div>
                    <div
                      className="col-10 my-2 p-0"
                      onClick={() =>
                        triggerFileSelectPopup3()
                      }
                      style={{
                        backgroundImage:
                          'url(' +
                          `http://localhost:6005/eventpic/share/${fileName3}` +
                          ')',
                        backgroundSize: 'cover',
                        opacity: preview3 ? 1 : 0.7,
                      }}
                    >
                      <input
                        type="file"
                        style={{ display: 'none' }}
                        ref={inputRef3}
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0]
                          if (file) {
                            setIsImg3(file)
                            setFileName3(file.name)
                          } else {
                            setIsImg3(null)
                          }
                        }}
                      />
                      {preview3 ? (
                        <img
                          className="w-100 h-100 position-absolute"
                          src={preview3}
                          style={{ objectFit: 'cover' }}
                          alt=""
                        />
                      ) : (
                        <button
                          className="position-absolute"
                          type="button"
                        >
                          <IoMdAdd />
                        </button>
                      )}
                      <img src={Square} alt="" />
                    </div>
                    <div
                      className="col-10 p-0"
                      onClick={() =>
                        triggerFileSelectPopup4()
                      }
                      style={{
                        backgroundImage:
                          'url(' +
                          `http://localhost:6005/eventpic/share/${fileName4}` +
                          ')',
                        backgroundSize: 'cover',
                        opacity: preview4 ? 1 : 0.7,
                      }}
                    >
                      <input
                        type="file"
                        style={{ display: 'none' }}
                        ref={inputRef4}
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files[0]
                          if (file) {
                            setIsImg4(file)
                            setFileName4(file.name)
                          } else {
                            setIsImg4(null)
                          }
                        }}
                      />
                      {preview4 ? (
                        <img
                          className="w-100 h-100 position-absolute"
                          src={preview4}
                          style={{ objectFit: 'cover' }}
                          alt=""
                        />
                      ) : (
                        <button
                          className="position-absolute"
                          type="button"
                        >
                          <IoMdAdd />
                        </button>
                      )}
                      <img src={Square} alt="" />
                    </div>
                  </div>
                </div>
                <h5 className="eu-upload-title col-12 p-0 cn-font mt-5 mb-3">
                  作品說明:
                </h5>
                <textarea
                  className="eu-text col-11 pr-2"
                  cols="30"
                  rows="10"
                  onChange={(e) => {
                    setShareComment(e.target.value)
                  }}
                  value={shareComment}
                />

                <div className="col-11 d-flex flex-wrap justify-content-between my-4">
                  {!isPreparetoDel ? (
                    <button
                      className="eu-send-del e-btn-m col-l2 my-3 cn-font"
                      type="button"
                      onClick={() => {
                        handleShow()
                      }}
                    >
                      刪除作品
                    </button>
                  ) : (
                    <button
                      className="eu-send-del2 e-btn-m col-l2 my-3 cn-font"
                      type="button"
                      onClick={() => {
                        deleteShareFromServer(id)
                      }}
                    >
                      刪除作品
                    </button>
                  )}
                  <button
                    className="eu-send-cmt e-btn-m col-l2 my-3 cn-font"
                    type="button"
                    onClick={() => {
                      updateEventShareSever()
                      uploadFile()
                    }}
                  >
                    更新作品
                  </button>
                </div>
              </form>

              {/* 其他活動區塊 */}
              <div className="eu-more-event col-4">
                <h2 className="my-3 col-12 mb-3">
                  其他活動!
                  <span>
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                    <IoIosArrowForward />
                  </span>
                </h2>
                <Link
                  to="/event/event-list/detail/26"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="eu-list-card col-12 pt-5 mb-5">
                    <img
                      className="col-12 p-0"
                      src={EuListCardPic}
                      alt=""
                    />
                    <h6 className="col-12 p-0 cn-font my-2">
                      VERSE Forum 旅遊之夜
                    </h6>
                    <div className="d-flex">
                      <div className="col-8 p-0">
                        <p>地點：彰化縣</p>
                        <p>時間：2021年10月</p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/event/event-list/detail/11"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="eu-list-card col-12 pt-5 mb-5">
                    <img
                      className="col-12 p-0"
                      src={EuListCardPic2}
                      alt=""
                    />
                    <h6 className="col-12 p-0 cn-font my-2">
                      故宮南院戶外美術館-藝術方舟ARK OF ART
                    </h6>
                    <div className="d-flex">
                      <div className="col-8 p-0">
                        <p>地點：嘉義市</p>
                        <p>時間：2021年07月</p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link
                  to="/event/event-list/detail/9"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="eu-list-card col-12 pt-5 mb-5">
                    <img
                      className="col-12 p-0"
                      src={EuListCardPic3}
                      alt=""
                    />
                    <h6 className="col-12 p-0 cn-font my-2">
                      巷弄之間-尋找藏達人計畫
                    </h6>
                    <div className="d-flex">
                      <div className="col-8 p-0">
                        <p>地點：新竹市</p>
                        <p>時間：2021年07月</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* 刪除 Modal警告 */}
            <Modal
              centered
              show={show}
              onHide={handleClose}
              id="eventModal"
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  即將移除您建立的作品!
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                即將移除您建立的作品!當您
                <span>
                  按下確定刪除時，作品將無法復原。
                </span>
                我們認為每個作品都是藝術家嘔心瀝血之作，透過分享創意能夠為藝術帶來更多的美感傳播，不論作品如何我們都以最珍視的方式將他保存在ARTDDICT。
              </Modal.Body>
              <Modal.Footer>
                {/* <Button
                  type="button"
                  className="e-btn-s e-modal-close"
                  onClick={handleClose}
                >
                  關閉
                </Button> */}
                <Button
                  type="button"
                  className="e-btn-s e-modal-del "
                  onClick={() => {
                    handleClose()
                    setIsPreparetoDel(true)
                  }}
                >
                  我瞭解了
                </Button>
              </Modal.Footer>
            </Modal>
          </Row>
        </Container>
      </div>
    </>
  )
}

// class UploadPreview extends React.Component {
//   constructor(props) {
//     super(props)
//     this.inputRef = React.createRef()
//     this.state = { file: null }
//     this.onChange = this.onChange.bind(this)
//     this.resetFile = this.resetFile.bind(this)
//   }
//   onChange(event) {
//     this.setState({
//       file: URL.createObjectURL(event.target.files[0]),
//     })
//   }
//   // const triggerFileSelectPopup = () => inputRef.current.click()
//   triggerFileSelectPopup(){
//     this.inputRef.current.click()
//   }

//   resetFile(event) {
//     event.preventDefault()
//     this.setState({ file: null })
//   }
//   render() {
//     return (
//       <div
//         className="position-relative"
//         style={{
//           backgroundImage: 'url(' + this.state.file + ')',
//           backgroundSize: 'cover',
//         }}
//       >
//         <input
//           type="file"
//           onChange={this.onChange}
//           ref={this.inputRef}
//         />
//         {this.state.file && (
//           <div>
//             <img
//               className="up-spin position-absolute"
//               src={EuGreySpin}
//               alt=""
//             />
//             <button
//               className="e-btn-m cn-font position-absolute"
//               type="button"
//               onClick={this.triggerFileSelectPopup}
//             >
//               上傳圖片
//             </button>
//             <img src={Square} alt="" />
//             {/* <button onClick={this.resetFile}>
//               Remove File
//             </button> */}
//           </div>
//         )}
//       </div>
//     )
//   }
// }

export default withRouter(WorkshopUpload)
