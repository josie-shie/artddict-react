import React from 'react';
import $ from 'jquery'
import 'rc-tooltip/assets/bootstrap.css'
import Slider, { SliderTooltip } from 'rc-slider'
import 'rc-slider/assets/index.css'


function AuctionSlider(props) {
    const {priceRange,setPriceRange,priceRange2,setPriceRange2} = props
    const { Range } = Slider
    const style = { width: 700 }
    
    return (
        <>
            <div className="priceRangeBox d-flex">
                  {/* 要用Jq做 */}

                  <div className="prolist-sliderbox d-flex pro-filterWord">
                    <div style={style}>
                      <p>PRICE RANGE</p>
                      <Range
                        min={0}
                        max={8000}
                        step={2000}
                        marks={{
                          0: 0,
                          2000: 2000,
                          4000: 4000,
                          6000: 6000,
                          8000: 8000,
                        }}
                        allowCross={false}
                        defaultValue={[0, 6000]}
                        onAfterChange={(e) => {
                        //   setPriceRange(JSON.stringify(e))
                          setPriceRange(e)
                        }}
                      />
                    </div>
                  </div>
                </div>
                {/* 要用Jq做 */}
        </>
    );
}

export default AuctionSlider;