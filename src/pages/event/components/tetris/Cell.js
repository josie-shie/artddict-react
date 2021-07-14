import React from 'react'
import { StyledCell } from './StyleforTetris/StyledCell'
import { TETROMINOS } from './tetrominos'
//const Cell = ({ type }) => (<div>cell</div>)
function Cell({ type }) {
  return (
    <>
      <StyledCell type={"L"} color={TETROMINOS["L"].color}/>
    </>
  )
}

export default Cell
