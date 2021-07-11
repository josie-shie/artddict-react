import React from 'react';
import { useState, useEffect } from 'react';
import '../style/AuctionProductList.scss';
import { withRouter, Link } from 'react-router-dom'
import '../../../bootstrap/css/bootstrap.css'
import AuctionProductCard from './AuctionProductCard'


function AuctionProductList(props) {

    const { search, setSearch, arrangement,getAucProFromServer,getAucProArrFromServer,aucInfo,setAucInfo, TimeRemaining,aucRemainT} = props

    return (
        <>  
        {/* {console.log('-----------------------------')} */}
            <div className="container">
                <div className="row">
                    {/* {console.log("render時商品名稱",aucInfo)} */}
                    {aucInfo.map((auctionProduct,i) => (
                        <span key={i} className="d-flex col-4 p-0">
                        <AuctionProductCard
                            aucId={auctionProduct.aucId}
                            aucName={auctionProduct.aucName}
                            aucPriceNow={auctionProduct.aucPriceNow}
                            deadline={aucRemainT[i]}
                            aucImg={auctionProduct.aucImg}
                            TimeRemaining={TimeRemaining}
                            search={search}
                            arrangement={arrangement}
                            aucInfo={aucInfo}
                        />
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
}

export default withRouter(AuctionProductList);