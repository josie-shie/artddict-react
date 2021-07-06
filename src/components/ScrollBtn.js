import React, { useState } from 'react'
import {
  BiArrowToTop,
  BiArrowToBottom,
} from 'react-icons/bi'

const ScrollBtn = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  window.addEventListener('scroll', toggleVisible)

  return (
    <>
      <div>
        {visible === false ? (
          <BiArrowToBottom />
        ) : (
          <BiArrowToTop />
        )}
      </div>
    </>
  )
}

export default ScrollBtn