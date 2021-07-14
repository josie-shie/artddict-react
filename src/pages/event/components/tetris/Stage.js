import React from 'react'
import Cell from './Cell'
import { StyledStage } from './StyleforTetris/StyledStage'

//const Cell = ({ type }) => (<div>cell</div>)
function Stage({ stage }) {
  return (
    <>
      <StyledStage width={stage[0].length} height={stage.length}>
        {stage.map((row) =>
          row.map((cell, x) => (
            <Cell key={x} type={cell[0]} />
          ))
        )}
      </StyledStage>
    </>
  )
}

export default Stage
