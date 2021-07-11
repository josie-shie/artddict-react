import React, { useEffect } from 'react'
import { RiArrowLeftSLine } from 'react-icons/ri'

const MusEventTitle = (props) => {
  
  
  useEffect(() => {
    console.log(props.musEvent)
  }, [])

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="py-3 mr-3">
          <RiArrowLeftSLine color={'#1D0AFF'} size={30} />
        </div>
        <h1 className="h3 text-center my-3">
          {props.musEvent[0].musName}
        </h1>
      </div>
      <div className="d-flex align-items-center justify-content-center py-2 mb-2">
        <div className="map-select-box-dk px-4">排序</div>
        <select
          className="map-select-box-dk map-select pl-3 border-left-0 "
          name=""
          id=""
        >
          <option style={{ color: '#707070' }} value="">
            距離最近的
          </option>
          <option value="">123</option>
          <option value="">123</option>
        </select>
      </div>
    </>
  )
}

export default MusEventTitle
