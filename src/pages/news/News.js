import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Collapse } from 'react-bootstrap'
import swal from 'sweetalert'

import { ReactComponent as Logo } from '../../pics/logo.svg'
import { GiLipstick } from 'react-icons/gi'
import './news.scss'

//img
import news1 from './newspic/poster.jpeg'
import news2 from './newspic/newyear.jpg'
import news3 from './newspic/blowRed.jpeg'
import news4 from './newspic/blow.jpeg'
import news5 from './newspic/swim.jpeg'
import news6 from './newspic/naime.jpeg'
import news7 from './newspic/naime2.jpeg'
import news8 from './newspic/naime3.jpeg'
import news9 from './newspic/lower.jpeg'
import news10 from './newspic/she.jpg'

const News = () => {
  const [open, setOpen] = useState(false)
  const [comment, setComment] = useState([])
  const [userId, setUserId] = useState('')
  const [NewsCom, setNewsCom] = useState('')
  const [share, setShare] = useState(false)
  const [email, setEmail] = useState('')

  const [dataLoading, setDataLoading] = useState(false)

  //取得所有資料
  async function getAllComServer() {
    const url = `http://localhost:6005/news`
    const request = new Request(url, {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'appliaction/json',
      }),
    })

    const response = await fetch(request)
    const data = await response.json()

    setComment(data)
  }

  //留言板錯誤處理
  async function addNewComToSever() {
    //判斷留言板跟名字是否有填寫
    if (NewsCom !== '' && userId !== '') {
      setDataLoading(true)

      const newData = { userId, NewsCom }

      // 連接的伺服器資料網址
      const url = 'http://localhost:6005/news/'

      // 注意資料格式要設定，伺服器才知道是json格式
      const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify(newData),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      console.log(JSON.stringify(newData))

      const response = await fetch(request)
      const data = await response.json()

      console.log('伺服器回傳的json資料', data)
      // 要等驗証過，再設定資料(簡單的直接設定)

      //直接在一段x秒關掉指示器
      setTimeout(() => {
        setDataLoading(false)
        swal({
          text: '留言成功',
          icon: 'success',
          button: false,
          timer: 2000,
        })
      }, 500)
      console.log('success')
    } else {
      swal({
        text: '請填寫所有欄位',
        icon: 'warning',
        confirmButtonColor: '#1D0AFF',
        confirmButtonText: '確定',
        timer: 3000,
      })
    }
  }

  async function sentMail() {
    //判斷mail是否正確 [a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*
    let emailRule =
      /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/
    
      if (email !== '' && email.search(emailRule) !== -1) {
      const newData = { email }

      // 連接的伺服器資料網址
      const url = 'http://localhost:6005/mail'

      // 注意資料格式要設定，伺服器才知道是json格式
      const request = new Request(url, {
        method: 'POST',
        body: JSON.stringify(newData),
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      })

      console.log(JSON.stringify(newData))

      const response = await fetch(request)
      const data = await response.json()

      console.log('伺服器回傳的json資料', data)

      setTimeout(() => {
        setDataLoading(false)
        swal({
          text: '郵件已傳送',
          icon: 'success',
          button: false,
          timer: 1000,
        })
      }, 200)
      console.log('success')
    } else {
      swal({
        text: '請輸入正確Email',
        icon: 'warning',
        confirmButtonColor: '#1D0AFF',
        confirmButtonText: '確定',
        timer: 3000,
      })
    }
  }

  useEffect(() => {
    getAllComServer()
  }, [])

  //送出留言才會重新撈資料
  useEffect(() => {
    setShare(false)
    getAllComServer()
    //console.log('update');
  }, [share])

  //   useEffect(() => {
  //     getAllComServer()
  //     setShare(!share)
  //   }, [share])

  const allComment = comment.map((com) => {
    return (
      <React.Fragment key={com.newsComId}>
        <div className="d-flex justify-content-center w-100 mb-5">
          <div className="news-user-text col-8 border-left pr-3">
            <strong className="">
              {com.userId}
              <span>{com.creates_at.split('T')[0]}</span>
            </strong>
            <p className="">{com.NewsCom}</p>
          </div>
        </div>
      </React.Fragment>
    )
  })
  return (
    <>
      <div className="news-content-area d-flex flex-column">
        <Link to="/">
          <Logo className="news-logo " />
        </Link>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb mb-4">
            <li className="breadcrumb-item">
              <Link to="/">首頁</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">最新消息</Link>
            </li>
            <li
              className="breadcrumb-item active"
              aria-current="page"
            >
              渡邊直美再造！另人食慾變好的化妝品行銷
            </li>
          </ol>
        </nav>
        <marquee
          scrollamount="10"
          className="news-marquee px-3"
        >
          <h1 className="notoSansTC-md my-3">
            日本設計師 Yuni Yoshida
            <GiLipstick /> 與直美攜手出擊
            <GiLipstick /> 日本設計師 Yuni Yoshida
            <GiLipstick /> 與直美攜手出擊
            <GiLipstick />
          </h1>
        </marquee>
        <div className="d-flex justify-content-center my-4">
          <img className="w-100" src={news1} alt="" />
        </div>
        <marquee
          scrollamount="10"
          className="news-marquee px-3"
        >
          <h1 className="notoSansTC-md my-3">
            新銳設計師
            <GiLipstick /> 特殊美學 顛覆視覺
            <GiLipstick /> 新銳設計師
            <GiLipstick /> 特殊美學 顛覆視覺
            <GiLipstick />
          </h1>
        </marquee>
        <div className="px-5 mt-5 art-push">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h3 className="notoSansTC-md art-push">
              Yuni Yoshida 今年
              39歲，曾修讀東京女子美術大學的設計科，現在不時跟不同品牌合作平面廣告，題材非常廣泛，包括休閒服飾
              Lowrys Farm、KIRIN 啤酒、Mercedes-Benz
              等等。此外，她也曾與渡邊直美、星野源、Chara
              合作設計宣傳照或唱片封套等，也曾為雜誌《装苑》作出連載報導，所以就算你還不認識Yuni
              Yoshida 這個名字，也很大機會曾經看過她的作品。
              大家還記得渡邊直美與植村秀合作的化妝品平面廣告嗎？當時透過身體與透明玻璃之間擠壓的效果運用，巧妙和趣味地突顯彩妝品的手法帶有玩味色彩，自然吸引了受眾的目光。而負責那次設計項目的藝術總監
              Yuni
              Yoshida（吉田ユニが）一向以繽紛和誇張的玩味感為個人設計的風格，最近她即將在原宿舉辦
              5年來首次的大型個展《Dinalog》
              ，讓大家有機會一次欣賞到她過往與大小品牌、明星的作品。
            </h3>
            <img src={news2} alt="" />
            <h5 className="art-push">2021/06/30 Tokiyo</h5>
            <img src={news5} alt="" />
            <div className="d-flex justify-content-center mt-5">
              <img src={news3} alt="" />
              <img src={news4} alt="" />
            </div>
            <h5 className="text-center art-push">
              2021/07/10 Tokiyo
            </h5>
            <h3 className="art-push">
              她的作品鮮艷又可愛，具有令人著迷的生命及創造力，而且她很著重細節的部分，每一項出現在構圖中的物件和人物都安排得恰如其分。2014年，她便曾經舉辦個人展《Imaginatomy》，事隔5年後決定在原宿
              LAFORET博物館舉辦一個更大型的展覽，她自己對這次展覽亦表示雀躍。
              <br />
              創意來源於渡邊對吉田ユニ（YuniYoshida）
              說的一句話： 「我喜歡『食物』和『時尚』」。
              於是鏡頭下的渡邊化身為穿著唇膏戰靴的女戰士；
              扮演了甜美的蜜桃甜筒和嬌俏可愛的小籠包……
              在「推臉瘦腰大長腿」的修圖年代，
              吉田ユニ（Yuni Yoshida）用渡邊喜歡的元素
              展現了她特有的俏皮和豐盈之美，打破單一的審美標準。
            </h3>
            <div>
              <img src={news6} alt="" />
            </div>
            <div className="d-flex justify-content-center mt-5 art-push">
              <img src={news7} alt="" />
              <img src={news8} alt="" />
            </div>
            <h3 className="art-push">
              在不乏個人風格突出的日本設計界，
              出生於1980年的女設計師、藝術指導
              ——吉田ユニ（Yuni Yoshida）的作品
              不僅詼諧有趣，還帶有獨特的世界觀，
              擁有讓人也津津樂道、過目不忘的魅力。
              妥妥成為不少明星和大企業的御用設計師。
              <br />
              Yuni Yoshida十分擅長運用
              瑰麗的色彩、簡潔的構圖，
              營造出大膽又超寫實的效果。
              以女性為主題，利用錯位 或加入迥然不同的元素，
              創造出令人震撼的的視覺效果。
            </h3>
            <img className="art-push" src={news9} alt="" />
            <div className="d-flex justify-content-center mt-5 pb-5  mb-5">
              <div className="col-6">
                <img
                  className="w-100"
                  src={news10}
                  alt=""
                />
              </div>
              <div className="ml-3 ">
                <h2>Can't wait?</h2>
                <h1>leave Your Mail Now!</h1>
                <h5>
                  留下你的郵件，展覽日期確認後立刻通知您！
                  <br />
                  對於展覽有更好的靈感？也歡迎留言告訴我們！
                </h5>
                <form className="mt-5" action="">
                  <input
                    className="news-inp pl-2"
                    name="email"
                    type="text"
                    pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                    required
                    value={email}
                    placeholder="請輸入電子郵件"
                    onChange={(e) => {
                      setEmail(e.target.value)
                    }}
                  />
                  <button
                    className="news-btn ml-3"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault()
                      sentMail()
                      setEmail('')

                      //   console.log(e.target.value)
                      //setEmail('')
                    }}
                  >
                    send
                  </button>
                  <button
                    className="news-btn ml-3"
                    style={{
                      backgroundColor: '#000',
                      color: '#000',
                    }}
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault()
                      setEmail('josieeeshie@gmail.com')
                    }}
                  >
                    自動填寫
                  </button>
                </form>
              </div>
            </div>
            <div>
              <h4 className="art-push border-bottom border-top py-5 px-5 mb-5">
                Leave Comments Here
              </h4>
            </div>
            <div className="col-12 p-0 d-flex justify-content-center flex-wrap">
              <button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                className="news-btn mb-5 mt-5"
              >
                撰寫評論
              </button>
              <Collapse
                in={open}
                className="col-12 p-0 mt-3 mb-5 "
              >
                <div className="col-12 p-0">
                  <form
                    className="border-0 d-flex flex-wrap justify-content-center"
                    action=""
                  >
                    <label
                      className="mb-5 pt-1"
                      htmlFor="userId"
                      style={{ color: '#81FC4D' }}
                    >
                      <p>名稱：</p>
                    </label>
                    <input
                      className="news-inp mb-5"
                      type="text"
                      name="userId"
                      value={userId}
                      onChange={(e) => {
                        setUserId(e.target.value)
                      }}
                    />
                    <textarea
                      className="news-text-com col-12 p-0"
                      cols="30"
                      rows="10"
                      value={NewsCom}
                      onChange={(e) => {
                        //console.log('text', e.target.value)
                        setNewsCom(e.target.value)
                      }}
                    ></textarea>
                    <div className="d-flex flex-column">
                      <button
                        className="news-btn mb-2 mt-5"
                        type="submit"
                        style={{ background: '#81FC4D' }}
                        onClick={(e) => {
                          e.preventDefault()
                          addNewComToSever()
                          setNewsCom('')
                          setUserId('')
                          setShare(true)
                          // setShare(!share)
                        }}
                      >
                        <p style={{ color: '#000' }}>
                          送出評論
                        </p>
                      </button>
                      <button
                        className="news-btn ml-3"
                        style={{
                          backgroundColor: '#000',
                          color: '#000',
                        }}
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault()
                          setNewsCom(
                            '我們都很清楚，這是個嚴謹的議題。我認為，瓊森曾經認為，有些人生來只會吸收書中的毒素。這影響了我的價值觀。可是，即使是這樣，對藝術的執著的出現仍然代表了一定的意義。'
                          )
                          setUserId('我創作故我在')
                        }}
                      >
                        自動填寫
                      </button>
                    </div>
                  </form>
                </div>
              </Collapse>
            </div>
            {allComment}
          </div>
        </div>
      </div>
    </>
  )
}

export default News
