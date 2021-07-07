import React, { useEffect, useState } from 'react';
import useInterval from './useInterval'

function AuctionDetailcountDown(props) {
    const { aucDetailinfo, setAucProduct, TimeRemaining, auctionDetailcountdown, setAuctionDetailcountdown,auctionRunning,loading } = props
    return (
        <>
            {auctionRunning ? (
                <div className="auctionDetailcountdown">
                    <span>{String(auctionDetailcountdown[0]).length < 2 ? ('0' + auctionDetailcountdown[0]) : auctionDetailcountdown[0]}</span>天
                    <span>{String(auctionDetailcountdown[1]).length < 2 ? ('0' + auctionDetailcountdown[1]) : auctionDetailcountdown[1]}</span>小時
                    <span>{String(auctionDetailcountdown[2]).length < 2 ? ('0' + auctionDetailcountdown[2]) : auctionDetailcountdown[2]}</span>分
                    <span>{String(auctionDetailcountdown[3]).length < 2 ? ('0' + auctionDetailcountdown[3]) : auctionDetailcountdown[3]}</span>秒
                </div>
            ) : (<div className="auctionDetailcountdown">{loading}</div>)}
        </>
    );
}

export default AuctionDetailcountDown;