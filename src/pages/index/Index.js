import React, { useRef } from 'react'
import { ReactComponent as Logo } from '../../pics/logo.svg'
import ReactPlayer from 'react-player'
import './index.css'

const Index = () => {
  const logoRef = useRef()
  return (
    <>
      <div className="hero-section">
        <div className="video-area">
          <video
            src={
              require('./video/Graffiti street art.mp4')
                .default
            }
            playsinline
            autoplay
            muted
            loop
          ></video>
          <div className="slogan">
            <h1 className="">devotes to ART</h1>
            <h5 className="">to the moon and back</h5>
          </div>
        </div>
        <div className="rect rect-first"></div>
        <div className="rect rect-last"></div>
        <div>
          <Logo className="logo" ref={logoRef} />
        </div>
        <div className="start-scroll">
          <p className="vertical-line">|</p>
          <p>scroll Down</p>
        </div>
      </div>
    </>
  )
}

export default Index
