import React from 'react'

import {StyledStartButton} from './StyleforTetris/StyledStartButton'
//const Cell = ({ type }) => (<div>cell</div>)
function StartButton({ callback }) {
  return (
    <>
      <StyledStartButton onClick={callback}>開始遊戲</StyledStartButton>
    </>
  )
}

export default StartButton
