import React from 'react'
import { Link } from 'react-router-dom'
import '../../bootstrap/css/bootstrap.css'
import {} from 'react-bootstrap'
import {} from 'react-icons/cg'
import './style/ProductList.css'
// -----------svg---------
import logobk from './svg/logobk.svg'
// ---------picture------------
import listtitle from './img/producrList/listtitle.jpeg'
function ProductList() {
  return (
    <>
      <div className="prolist-full">
        <div className="prolist-titlepic">
          <img src={listtitle} alt="" />
          <div className="prolist-titleword">
            <div className="prolist-ArtDdictlogo">
              <img src={logobk} alt="" />
            </div>
            <div className="prolist-titlewordA">
              <p>
                書寫的藝
                <span className="prolist-zzzzzz">術</span>
              </p>
            </div>
            <div className="prolist-titlewordB">
              <p>在ArtDDict探索藝術品</p>
            </div>
            <button className="prolist-shopnowBtn">
              <p>SHOP NOW</p>
            </button>
          </div>
        </div>
        <div className="prolist-wordBox">
          <div className="prolist-quote">
            <p>ART GIVES US WINGS AND TAKE US FAR</p>
          </div>
          <div className="prolist-quote2">
            <p>-PICASSO-</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList
