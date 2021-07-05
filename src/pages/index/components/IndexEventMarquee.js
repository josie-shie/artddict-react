import React from 'react'
import eventimg1 from '../image/event/001.jpg'
import eventimg2 from '../image/event/002.jpg'
import eventimg3 from '../image/event/003.jpg'
import eventimg4 from '../image/event/004.jpg'
import eventimg5 from '../image/event/005.jpg'
import eventimg6 from '../image/event/006.jpg'

const IndexEventMarquee = () => {
  return (
    <div>
      <marquee
        className="marquee1"
        scrollamount="10"
        direction="left"
      >
        <img className="img1" src={eventimg1} alt="" />
        <img className="img2" src={eventimg2} alt="" />
        <img className="img1" src={eventimg1} alt="" />
        <img className="img2" src={eventimg2} alt="" />
      </marquee>
      <marquee
        className="marquee2"
        scrollamount="10"
        direction="right"
      >
        <img className="img3" src={eventimg3} alt="" />
        <img className="img4" src={eventimg4} alt="" />
      </marquee>
      <marquee
        className="marquee3"
        scrollamount="7"
        direction="left"
      >
        <img className="img5" src={eventimg5} alt="" />
        <img className="img6" src={eventimg6} alt="" />
      </marquee>
    </div>
  )
}

export default IndexEventMarquee
