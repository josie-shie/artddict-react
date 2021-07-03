import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../pics/logo-bk.svg'

const Map = () => {
  return (
    <>
      <div>
        <Logo className="art-logo " />
        <marquee
          scrollamount="10"
          className="event-marquee px-3"
        >
          <h1 className="notoSansTC-md my-3">
            Pop Art藝術家 Mr.moodel
             Pop-Art藝術家 Mr.moodel{' '}
             Pop-Art藝術家 Mr.moodel
             Pop-Art藝術家 Mr.moodel
            
          </h1>
        </marquee>
      </div>
    </>
  )
}

export default Map
