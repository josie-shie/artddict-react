import React from 'react'

import {createStage} from './gameHelper'
import {
  StyledTetrisWrapper,
  StyledTetris,
} from './StyleforTetris/StyledTetris'

// Component
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

//const Cell = ({ type }) => (<div>cell</div>)
function Tetris({ type }) {
  return (
    <>
      <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={createStage()}/>
        <aside>
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          <StartButton />
        </aside>
        </StyledTetris>
      </StyledTetrisWrapper>
    </>
  )
}

export default Tetris
