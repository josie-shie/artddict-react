import React from 'react'

import {createStage} from './gameHelper'

// Component
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

//const Cell = ({ type }) => (<div>cell</div>)
function Tetris({ type }) {
  return (
    <>
      <div>
        <Stage stage={createStage()}/>
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
      </div>
    </>
  )
}

export default Tetris
