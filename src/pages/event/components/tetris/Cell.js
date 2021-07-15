import React from 'react'
import { StyledCell } from './StyleforTetris/StyledCell'
import { TETROMINOS } from './tetrominos'
//const Cell = ({ type }) => (<div>cell</div>)
function Cell({ type }) {
  return (
    <>
      <StyledCell type={type} color={TETROMINOS[type].color}>{console.log("re-render")}</StyledCell>
    </>
  )
}

export default React.memo(Cell)
