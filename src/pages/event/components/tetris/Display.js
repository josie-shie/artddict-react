import React from 'react'

import {StyledDisplay} from './StyleforTetris/StyledDisplay'

//const Cell = ({ type }) => (<div>cell</div>)
function Display({ gameover, text }) {
  return (
    <>
      <StyledDisplay gameover={gameover}>{text}</StyledDisplay>
    </>
  )
}

export default Display