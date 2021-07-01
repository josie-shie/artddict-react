import React, { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../pics/logo.svg'
import './style/Product.css'
import '../../bootstrap/css/bootstrap.css'
import { CgArrowLongRightL, CgPacman } from 'react-icons/cg'
import { BsThreeDots } from 'react-icons/bs'

import logo from './svg/logo.svg'
import upLogo from './img/upLogo.png'
function Product() {
  return (
    <>
      <div className="test">
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
                <span className="English">ARTDDICT</span>
              </p>
            </div>
            <button
              onclick="javascript:location.href='productList'"
              className="homepageA-box btn-lg English "
            >
              Go Shop
            </button>
          </div>
          <div className="homepageA-right">
            <div className="homepageA-right-box d-flex">
              <div className="homepageA-right-box-picA"></div>
              <div className="homepageA-right-box-picB"></div>
              <div className="homepageA-right-box-picC"></div>
              <div className="homepageA-right-box-picD"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
