import React, { useEffect } from 'react'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const MusEventTitle = (props) => {
  useEffect(() => {
    console.log(props.musEvent)
  }, [])

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="py-3 mr-3">
          <RiArrowLeftSLine
            color={'#1D0AFF'}
            size={30}
            as={Link}
            to="/"
          />
        </div>
        <h1 className="h3 text-center my-3">
          {props.musEvent[0].musName}
        </h1>
      </div>
    </>
  )
}

export default MusEventTitle
