import React from 'react';
import { useState } from 'react';
import '../style/AuctionProductList.css';
import { withRouter } from 'react-router-dom'
import '../../../bootstrap/css/bootstrap.css'
import AuctionProductCard from './AuctionProductCard'
import { data } from '../date/date';

function AuctionProductList(props) {
    const [auctionProducts, setAuctionProducts] = useState(
        {
            aucName: '梵谷的帽子',
            aucPriceNow: 64000,
            deadline: "1625153905817",
        }
    )
    return (
        <>
            <div className="container">
                <div className="row">
                {data.map((auctionProduct,index) =>(
                    <AuctionProductCard
                        aucName={auctionProduct.aucName}
                        aucPriceNow={auctionProduct.aucPriceNow}
                        deadline={auctionProduct.deadline}
                    />
                ))}
                </div>
            </div>
        </>
    );
}

export default withRouter(AuctionProductList);