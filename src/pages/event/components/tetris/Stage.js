import React from 'react'
import Cell from './Cell'

//const Cell = ({ type }) => (<div>cell</div>)
function Stage({ stage }) {
  return (
    <>
      <div>
        {stage.map((row) =>
          row.map((cell, x) => (
            <Cell key={x} type={cell[0]} />
          ))
        )}
      </div>
    </>
  )
}

export default Stage
