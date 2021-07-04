import React from 'react'
import { Link } from 'react-router-dom'
import '../../bootstrap/css/bootstrap.css'
import {} from 'react-bootstrap'
import {} from 'react-icons/cg'
import './style/ProductList.css'
// -----------svg---------
import logobk from './svg/logobk.svg'
import { GoSearch } from 'react-icons/go'
// ---------picture------------
import listtitle from './img/producrList/listtitle.jpeg'
function ProductList() {
  return (
    <>
      <div className="prolist-full">
        <div className="prolist-titlepic">
          <img src={listtitle} alt="" />
          <div className="prolist-titleword d-flex">
            <div className="prolist-ArtDdictlogo ">
              <img src={logobk} alt="" />
            </div>
            <div className="prolist-titlewordA col-12">
              <p>
                書寫的藝
                <span className="prolist-zzzzzz">術</span>
              </p>
            </div>
            <div className="prolist-titlewordB col-12">
              <p>在ArtDDict探索藝術品</p>
            </div>
            <div className="col-12 d-flex prolist-justify">
              <button className="prolist-shopnowBtn ">
                <p>SHOP NOW</p>
              </button>
            </div>
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
      <div className="prolist-full2">
        <div className="prolist-row">
          <div className="prolist-topOflist">
            <div className="prolist-breadbox">
              <div className="prolist-bread">
                <p className="prolist-breadwordall">
                  <Link to="/product">
                    <span className="prolist-breadwordA">
                      商品首頁
                    </span>
                  </Link>
                  /
                  <Link>
                    <span className="prolist-breadwordB">
                      美術館商品
                    </span>
                  </Link>
                </p>
              </div>
            </div>
            <div className="prolist-topofmiddle">
              <div className="prolist-filter d-flex">
                <div className="ed-select-box cn-font p-1">
                  <div className="pr-3">排列</div>
                  <select
                    className="ed-select pl-2"
                    name=""
                    id=""
                  >
                    <option
                      style={{ color: '#707070' }}
                      value=""
                      className=" pl-4"
                    >
                      推薦
                    </option>
                    <option value="">價格嗨</option>
                    <option value="">價格嗨</option>
                  </select>
                </div>
                <div className="prolist-searchIcon">
                  <GoSearch size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductList
