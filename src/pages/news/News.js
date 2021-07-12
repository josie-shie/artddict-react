import React from 'react'
import { Link } from 'react-router-dom'
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
  return (
    <>
      <div className="news-area index-web-padding d-flex flex-column">
        <Logo className="news-logo " />
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
            <h5 className="art-push">
              {' '}
              2021/06/30 Tokiyo{' '}
            </h5>
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
            <div className="d-flex justify-content-center mt-5 pb-5 art-push border-bottom">
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
                  留下你的郵件，預約下個月的 | 藝術TALK TO
                  TALK |
                </h5>
                <form className="mt-5" action="">
                  <input className="news-inp" type="text" />
                  <button className="news-btn ml-3"
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault()
                    }}
                  >
                    send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default News
