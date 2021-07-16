import React, { useState } from 'react';
import $ from 'jquery'
import 'rc-tooltip/assets/bootstrap.css'
import Slider, { SliderTooltip } from 'rc-slider'
import 'rc-slider/assets/index.css'


function AuctionSlider(props) {
    const {priceRange,setPriceRange,priceRange2,setPriceRange2} = props
    const { Range } = Slider
    const style = { width: 700 }
    const [minvalue,setMinValue] = useState(0)
    const [maxvalue,setMaxValue] = useState(38000)
    
    return (
        <>
            <div className="priceRangeBox d-flex">
                  {/* 要用Jq做 */}

                  <div className="prolist-sliderbox d-flex pro-filterWord">
                    <div style={style}>
                      <p>PRICE RANGE ({minvalue} ~ {maxvalue})</p>
                      <Range
                        min={0}
                        max={38000}
                        step={500}
                        marks={{
                          // 0: 0,
                          // 2000: 2000,
                          // 4000: 4000,
                          // 6000: 15000,
                          // 20000: 40000,
                        }}
                        allowCross={false}
                        defaultValue={[0, 40000]}
                        onAfterChange={(e) => {
                          // setPriceRange(JSON.stringify(e))
                          setMinValue(e[0])
                          setMaxValue(e[1])
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