import React, { useRef, useState, useEffect } from 'react'
import StickyBox from 'react-sticky-box/dist/esnext'

import './style/MatchGame.css'

function MatchGame() {
  const [name, setName] = useState('')
  const inputRef = useRef()

  function focus() {
    console.log(inputRef.current)
  }

  return (
    <>
      <div style={{ height: '1000px', overflow: 'auto' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
          }}
        >
          <StickyBox
            style={{
              border: '3px solid green',
              height: '100vh',
            }}
          >
            Sidebar
          </StickyBox>
          <div
            style={{
              height: '1500px',
              border: '3px solid blue',
            }}
          >
            Main Content
          </div>
        </div>
      </div>
    </>
  )
}

export default MatchGame
