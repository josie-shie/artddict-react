import React, { useRef, useState, useEffect } from 'react'
import './style/MatchGame.css'

function MatchGame() {
  const [name, setName] = useState('')
  const inputRef = useRef()

  function focus() {
    console.log(inputRef.current)
  }

  return (
    <>
      <input
        type="text"
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button onClick={focus}>focus</button>
    </>
  )
}

export default MatchGame
