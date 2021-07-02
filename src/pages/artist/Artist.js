import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../pics/logo-bk.svg'
import './Artist.css'
import { RiMarkPenFill } from 'react-icons/ri'

import artistImg1 from './img/Mr-Doodle_img_1040_780.jpg'
import artistImg2 from './img/Potty-Trained-2_img_1040_780.jpg'
import artistImg3 from './img/The-Anti-Doodle-Squad_img_1040_780.jpg'
import { Image } from 'react-bootstrap'

const Artist = () => {
  return (
    <>
      <div className="art-area index-web-padding d-flex flex-column">
        <Logo className="art-logo " />
        <nav aria-label="breadcrumb-dk">
          <ol className="breadcrumb-dk">
            <li className="breadcrumb-item">
              <Link href="/">首頁</Link>
            </li>
            <li className="breadcrumb-item">
              <Link href="#">本月藝術家</Link>
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
          <Image src={artistImg1} alt="" />
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
        <div className="px-5 my-5">
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
        <div className="d-flex mb-5">
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
        <div>
            <img src={artistImg3} alt="" />
            <p className="art-date">13.06.02 London</p>
        </div>


      </div>
    </>
  )
}

export default Artist
