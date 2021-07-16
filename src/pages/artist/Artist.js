import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../pics/logo-bk.svg'
import './Artist.scss'
import { RiMarkPenFill } from 'react-icons/ri'

import artistImg1 from './img/Mr-Doodle_img_1040_780.jpg'
import artistImg2 from './img/Potty-Trained-2_img_1040_780.jpg'
import artistImg3 from './img/The-Anti-Doodle-Squad_img_1040_780.jpg'
import artistImg4 from './img/images-3.jpg'
import artistImg5 from './img/images-2.jpg'
import artistImg6 from './img/23-Pop-Art-Mr.-Doodle_img_1040_780.jpg'
import { Image } from 'react-bootstrap'

const Artist = () => {
  
  
  //didMount就load FB套件
  useEffect(() => {

    if (window.FB) {
      console.log('window.FB',window.FB);
      window.FB.XFBML.parse()
    }
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: '{4372278766148991}',
        cookie: true,
        xfbml: true,
        version: '{api-version}',
      })
      window.FB.AppEvents.logPageView()
    }
    ;(function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) {
        return
      }
      js = d.createElement(s)
      js.id = id
      js.src = 'https://connect.facebook.net/en_US/sdk.js'
      fjs.parentNode.insertBefore(js, fjs)
    })(document, 'script', 'facebook-jssdk')
  }, [])

  return (
    <>
      <div className="art-area index-web-padding d-flex flex-column">
        <Link to="/">
          <Logo className="art-logo " />
        </Link>
        <nav aria-label="breadcrumb-dk">
          <ol className="breadcrumb-dk">
            <li className="breadcrumb-item">
              <Link to="/">首頁</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="#">本月藝術家</Link>
            </li>
            <li
              className="breadcrumb-item active"
              aria-current="page"
            >
              Mr.moodel
            </li>
          </ol>
        </nav>
        <marquee
          scrollamount="10"
          className="event-marquee px-3"
        >
          <h1 className="notoSansTC-md my-3">
            Pop Art藝術家 Mr.moodel
            <RiMarkPenFill /> Pop-Art藝術家 Mr.moodel{' '}
            <RiMarkPenFill /> Pop-Art藝術家 Mr.moodel
            <RiMarkPenFill /> Pop-Art藝術家 Mr.moodel
            <RiMarkPenFill />
          </h1>
        </marquee>
        <div className="d-flex justify-content-center my-4">
          <img src={artistImg1} alt="" />
        </div>
        <marquee
          scrollamount="10"
          className="event-marquee px-3"
        >
          <h1 className="notoSansTC-md my-3">
            兩歲開始畫畫！ 23歲英國瘋狂藝術家 以密鋪塗鴉走紅{' '}
            <RiMarkPenFill /> 兩歲開始畫畫！
            23歲英國瘋狂藝術家 以密鋪塗鴉走紅{' '}
            <RiMarkPenFill />
          </h1>
        </marquee>
        <div className="px-5 mt-5 art-push">
          <div className="d-flex flex-column">
            <h5 classnames="notoSansTC-md">
              每日畫足最少14小時的Mr.
              Doodle，此行目的是參與Mira
              Place的聖誕企劃「DOO Something This
              Christmas」，
              從倫敦的士畫到著名地標，其作品將在Mira
              Place內公開展出，自言這是一次極棒的創作。聖誕節對於Mr
              Doodle來說相當重要，那是和家人及朋友相聚的時刻，遇着重大節日，他笑言會收斂一下，減少瘋狂塗鴉。
              確立風格對於Mr
              Doodle來說是一大挑戰，他花了很長時間令自己的腦袋變成自動塗鴉模式！「我一個月用掉幾本畫簿，在iPhone上畫的塗鴉大概4,000個，外加一些如Mira
              Place般的大型項目。」這位鐵人藝術家如常說，他每天堅持塗鴉不休息，為的是保持揮灑自如，並指這是一個永不歇息的創作過程。
              塗鴉時，他腦海中浮現很多事情，笑言過程像銀河系歷險，完成作品才返回現實。作品縱然是單色，所描畫的人物不是露出笑臉就是神態古靈精怪，原來統統都是他真性情的反映。「我的作品是根據個人情感而走，由本能去創作人物，而且這些角色都是快樂的。」
            </h5>
          </div>
        </div>
        <div className="d-flex art-push">
          <div className="col-6 mt-5 ">
            <h2 className="mt-5 engraversbd">
              Graffiti is the antidote
            </h2>
            <h5 className="mt-5">
              Mr
              Doodle形容自己的作品為「強迫性塗鴉」，對此他說：「唯一的『解藥』就是放肆地創作，用以減輕強迫症帶來的難耐。起初我以為這個藝術行為不會被家人及朋友理解，怎料他們都覺得我的塗鴉方式很酷。」
            </h5>
          </div>
          <div className="col-6">
            <img src={artistImg2} alt="" />
            <p className="art-date">19.03.22 London</p>
          </div>
        </div>
        <div className="art-push">
          <img src={artistImg3} alt="" />
          <p className="art-date">13.06.02 London</p>
        </div>
        <p className="art-date mb-4">13.06.02 London</p>
        <div className="d-flex justify-content-center mb-5">
          <img
            className="w-2 px-3"
            src={artistImg4}
            alt=""
          />
          <img
            className="w-2 px-3"
            src={artistImg5}
            alt=""
          />
        </div>
        <div className="art-push px-5">
          <h5 classnames="notoSansTC-md">
            創作至今，Mr
            Doodle認為最具挑戰的項目是50小時塗鴉馬拉松。「完成後滿足感極大，尤其知道自己為慈善籌集了多少錢。至於終極的創作期許，希望有日能像那些偉大的藝術家如Haring、Picasso、
            Banksy、
            Warhol等，為藝術界作出貢獻吧。」相信年僅23歲的Mr.
            Doodle前途無限，即管拭目以待他日後的驚人之作。
            Keith
            Haring，相信大家對他的作品都會有印象：色彩鮮艷、透過簡潔線條、符號和圖案表達複雜的批判訊息，辨識度極高，加上短暫傳奇的一生，令
            Keith Haring 在藝術界擁有崇高地位，Mr.Doodle
            亦坦言自己深受前輩 Keith Haring 影響。 Articks
            同意兩者畫風相似，但不認為 Mr.Doodle
            抄襲，他只是運用 Keith Haring
            的藝術語言去創造自己的世界。
          </h5>
        </div>
        <div className="art-name mb-5 pt-5 pb-3 art-relative">
          <img className="mb-5" src={artistImg6} alt="" />
          <h5>
            <span>Pop-Art藝術家 Mr. Doodle</span>
            <br />
            顛覆塗鴉的原始規則，以獨特筆迹填滿所有空間。他的創作領域廣泛，由街道設施、隧道、家具、服飾到電器不等。他的畫風破格，可在毫無預備之下，於任何地方即席創作，不需作任何思考，作畫速度極快，畫作故事性及結構兼備。
          </h5>
          <h2 className="mt-5 engraversbd text-right">
            About Mr <br />
            Doodle
          </h2>
          <div className="art-hl"></div>
          <div className="art-hl2"></div>
        </div>
        <div
          class="fb-like"
          data-href="http://localhost:3000/artist"
          data-width=""
          data-layout="standard"
          data-action="like"
          data-size="small"
          data-share="true"
        ></div>
        <div
          className="fb-comments mb-5"
          data-href="http://localhost:3000/artist"
          data-width="100%"
          data-numposts="5"
        ></div>
      </div>
    </>
  )
}

export default Artist
