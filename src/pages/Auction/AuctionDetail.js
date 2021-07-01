import React from 'react';
// import { useState } from 'react';
import './style/auctionDetail.css';
import { withRouter } from 'react-router-dom'

function AuctionDetail() {

  return (
    <>
      <div className="auctionDetailContent">
        <div className="auctionDetailleftContent">
          <div className="leftContent_firstpart">
            <div id="auctionDetailLOGO">
              <svg xmlns="http://www.w3.org/2000/svg" width="148.543" height="34.945" viewBox="0 0 148.543 34.945">
                <rect id="Rectangle_9" data-name="Rectangle 9" width="50.501" height="34.945" fill="#fff" />
                <g id="Path_154" data-name="Path 154" transform="translate(50.21)">
                  <path d="M 97.33348846435547 33.94530868530273 L 1.000007033348083 33.94530868530273 L 1.000007033348083 1.000002861022949 L 97.33348846435547 1.000002861022949 L 97.33348846435547 33.94530868530273 Z" stroke="none" />
                  <path d="M 2 2 L 2 32.9453125 L 96.33348083496094 32.9453125 L 96.33348083496094 2 L 2 2 M 0 0 L 98.33348083496094 0 L 98.33348083496094 34.9453125 L 0 34.9453125 L 0 0 Z" stroke="none" fill="#fff" />
                </g>
                <path id="Path_9" data-name="Path 9" d="M79.093,390.15l-2.055-6.081H71.463L69.3,390.15h2.112v.535H67.1v-.535h1.324L75.6,370.808H77.91l7.1,19.342H86.3v.535H77.094v-.535Zm-4.73-14.077-2.646,7.376h5.1Z" transform="translate(-64.286 -363.526)" />
                <path id="Path_10" data-name="Path 10" d="M118.383,385.078a2.213,2.213,0,0,0-1.83,1.351,6.255,6.255,0,0,0-.788,3.21v7.546h2v.507h-8.784v-.507h1.549V384.8h-1.549v-.507h6.785v2.7a3.818,3.818,0,0,1,1.408-2.21,3.861,3.861,0,0,1,2.365-.774,3.1,3.1,0,0,1,2.154.746,2.693,2.693,0,0,1,.831,2.112,3.162,3.162,0,0,1-.619,2.1,2.351,2.351,0,0,1-1.9.732,2.163,2.163,0,0,1-1.887-.845,2.6,2.6,0,0,1-.154-2.337h1.014Q119.677,385.078,118.383,385.078Z" transform="translate(-86.515 -370.532)" />
                <path id="Path_11" data-name="Path 11" d="M139.927,388.411v-8.869h-1.548v-.507h1.548V375.4l5.237-1.3v4.927h3.66v.507h-3.66v9.488a5.219,5.219,0,0,0,.267,1.943,1.084,1.084,0,0,0,1.113.619,1.826,1.826,0,0,0,1.478-.845,4.891,4.891,0,0,0,.831-2.309l.479.056a5.464,5.464,0,0,1-1.239,3.083,4.288,4.288,0,0,1-3.35,1.14,5.881,5.881,0,0,1-3.575-.929Q139.926,390.86,139.927,388.411Z" transform="translate(-102.118 -365.278)" />
                <path id="Path_12" data-name="Path 12" d="M197.129,380.684q0,5.8-3.266,8.08-3.013,2.112-8.277,2.112h-7.968v-.535h1.859V371.7h-1.859v-.535h8.7q5.406,0,8.109,2.21T197.129,380.684Zm-12.163,9.657h1.07a4.387,4.387,0,0,0,4.068-2.013q1.225-2.012,1.225-6.743v-1.633q0-6.335-2.422-7.63a7.018,7.018,0,0,0-3.265-.619h-.676Z" transform="translate(-122.945 -363.717)" fill="#fff" />
                <path id="Path_13" data-name="Path 13" d="M242.428,380.684q0,5.8-3.266,8.08-3.013,2.112-8.277,2.112h-7.968v-.535h1.858V371.7h-1.858v-.535h8.7q5.406,0,8.109,2.21T242.428,380.684Zm-12.163,9.657h1.07a4.387,4.387,0,0,0,4.068-2.013q1.225-2.012,1.225-6.743v-1.633q0-6.335-2.421-7.63a7.022,7.022,0,0,0-3.266-.619h-.676Z" transform="translate(-146.988 -363.717)" fill="#fff" />
                <path id="Path_14" data-name="Path 14" d="M268.456,371.168h8.587v.535h-1.549v18.638h1.549v.535h-8.587v-.535H270V371.7h-1.549Z" transform="translate(-171.158 -363.717)" fill="#fff" />
                <path id="Path_15" data-name="Path 15" d="M300.824,371.071q-4.365,0-4.364,8.418v2.224a13.993,13.993,0,0,0,1.154,6.264,3.661,3.661,0,0,0,3.407,2.266q3.1,0,5.687-6.025h.507l-.2,6.278h-.31a1.7,1.7,0,0,0-.31-.436.591.591,0,0,0-.408-.127,16.747,16.747,0,0,0-2.041.436,15.027,15.027,0,0,1-3.6.436q-4.589,0-7.109-2.478t-2.52-7.447q0-4.969,2.632-7.672a9.429,9.429,0,0,1,7.081-2.7,13.083,13.083,0,0,1,3.365.436,13.607,13.607,0,0,0,1.929.436.613.613,0,0,0,.422-.127,1.688,1.688,0,0,0,.31-.436h.31l.225,6.11h-.507a17.106,17.106,0,0,0-2.6-4.35A4,4,0,0,0,300.824,371.071Z" transform="translate(-182.972 -363.367)" fill="#fff" />
                <path id="Path_16" data-name="Path 16" d="M346.909,371.168l.281,7.067h-.534a21.888,21.888,0,0,0-2.2-5.11,3.165,3.165,0,0,0-2.76-1.366h-.337v18.526h2.393v.591H333.479v-.591h2.393V371.759h-.366a3.194,3.194,0,0,0-2.787,1.422,21.183,21.183,0,0,0-2.168,5.054h-.535l.281-7.067Z" transform="translate(-203.831 -363.717)" fill="#fff" />
              </svg>
            </div>
            <div className="auctionDetailBreadcrumb">
              首頁/競標
            </div>
          </div>
          <div className="leftContent_secondpart">
            <div className="auctionDetailTitle">
              梵谷自畫像t-shirt
            </div>
            <div className="currentPrice">
              目前出價:NT$7,800,000
            </div>
            <div>
              最高出價者:謝*心
            </div>
          </div>
          <div className="leftContent_thirdpart">
            <div className="auctionDetailProductDesTitle">
              <div>商品描述</div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="4" viewBox="0 0 29 4">
                  <line id="Line_134" data-name="Line 134" x2="25" transform="translate(2 2)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4" />
                </svg>
              </div>
            </div>
            <div className="auctionDetailProductDesContent">
              1889年9月，荷蘭後印象派畫家文森特·梵谷（Vincent van Gogh）在畫布上用油畫了自畫像。這幅作品可能是梵谷的最後一幅自畫像，是在他離開法國南部聖雷米的普羅旺斯之前不久畫的。這幅畫現在在巴黎的奧賽博物館（Muséed'Orsay）展出。
            </div>
          </div>
          <div className="leftContent_forthpart">
            <div className="auctionSpecification">
              <div>商品規格</div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30.5" viewBox="0 0 29 30.5">
                  <g id="Group_156" data-name="Group 156" transform="translate(2 2)">
                    <g id="Group_153" data-name="Group 153">
                      <line id="Line_59" data-name="Line 59" x2="25" transform="translate(0 13.25)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4" />
                      <line id="Line_60" data-name="Line 60" y1="26.5" transform="translate(12.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div></div>
          </div>
          <div className="leftContent_fifthpart">
            <div className="priceRecord">
              <div className="priceRecordTitle">出價紀錄</div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30.5" viewBox="0 0 29 30.5">
                  <g id="Group_156" data-name="Group 156" transform="translate(2 2)">
                    <g id="Group_153" data-name="Group 153">
                      <line id="Line_59" data-name="Line 59" x2="25" transform="translate(0 13.25)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4" />
                      <line id="Line_60" data-name="Line 60" y1="26.5" transform="translate(12.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4" />
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="rightContentFix">
          <div className="auctionDetailrightContent">
            <div className="countdown"><span>00</span>天<span>00</span>小時<span>05</span>分<span>32</span>秒</div>
            <div className="auctionDetailPicture">
              <img src="../images/5_001.jpg" alt="Background" />
            </div>
            <div className="auctionDetailcurrentPriceInput">
              <div className="auctionDetailcurrentPriceAboveInput">
                目前出價:NT$7,800,000
              </div>
              <div className="priceInput" >
                <input placeholder="請輸入下標價格" />
              </div>
            </div>
            <button className="auctionDetailButton">
              下標
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(AuctionDetail);