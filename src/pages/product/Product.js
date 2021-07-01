import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../pics/logo.svg'
import './style/Product.css'
import '../../bootstrap/css/bootstrap.css'
import { CgArrowLongRightL, CgPacman } from 'react-icons/cg'
import { BsThreeDots } from 'react-icons/bs'

import logo from './svg/logo.svg'
import arddictCircleG from './svg/arddictCircleG.svg'
import arddictEyeG from './svg/arddictEyeG.svg'
import upLogo from './img/upLogo.png'
import homepic1 from './img/homepic1.jpeg'
import homepic2 from './img/homepic2.png'
import homepic3 from './img/homepic3.png'
import homepic4 from './img/homepic4.png'
import museumGif from './img/museumGif.gif'

function Product() {
  return (
    <>
      <div className="pro-outside">
        <div className="row">
          <div className="homepageA-left">
            <div className="ArtLogoDiv">
              <img src={logo} alt="" />
            </div>
            <div className="upLogoDiv">
              <img className="upLogo" src={upLogo} alt="" />
            </div>
            <div className="homepageA-word-div">
              <h1 className="homepageA-word">鹽田千春</h1>
            </div>
            <div className="homepageA-wordB-div">
              <p className="homepageA-wordB">
                現在藝術大師鹽田千春
                <br />
                2021『這樣的千春』展覽系列商品
                <br />
                只有在———
                <span className="pro-English">
                  ARTDDICT
                </span>
              </p>
            </div>
            <button
              onclick="javascript:location.href='productList'"
              className="homepageA-box btn-lg pro-English "
            >
              Go Shop
            </button>
          </div>
          <div className="homepageA-right">
            <div className="homepageA-right-box d-flex">
              <div className="homepageA-right-box-picA">
                <img
                  className="homepageA-right-picA"
                  src={homepic1}
                  alt=""
                />
              </div>
              <div className="homepageA-right-box-picB">
                <img
                  className="homepageA-right-picB"
                  src={homepic2}
                  alt=""
                />
              </div>
              <div className="homepageA-right-box-picC">
                <img
                  className="homepageA-right-picC"
                  src={homepic3}
                  alt=""
                />
              </div>
              <div className="homepageA-right-box-picD">
                <img
                  className="homepageA-right-picD"
                  src={homepic4}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <img
          className="arddictCircleG"
          src={arddictCircleG}
          alt=""
        />
        <img
          className="arddictEyeG"
          src={arddictEyeG}
          alt=""
        />
      </div>

      {/* -----------------------首頁第一頁 以下第二頁 */}
      <div className="pro-outside2">
        <div className="row">
          <div className="homepageB-left">
            <p className="pro-English homepageB-left-word">
              TO DRAW, <br />
              YOU MUST CLOSE <br /> YOUR EYES
              <br /> AND SING
              <br />
              ——PABLO PICASSO
            </p>
            <div className="pro-gif">
              <img
                className="museumGif"
                src={museumGif}
                alt=""
              />
            </div>
          </div>
          <div className="homepageB-right"> </div>
        </div>
      </div>
    </>
  )
}

export default Product
