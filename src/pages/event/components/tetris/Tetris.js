import { React, useState, useEffect, useRef } from 'react'

import { createStage } from './gameHelper'

// Styled Component
import {
  StyledTetrisWrapper,
  StyledTetris,
} from './StyleforTetris/StyledTetris'

// Costom Hooks
import { usePlayer } from './hooks/usePlayer'
import { useStage } from './hooks/useStage'

// Component
import Stage from './Stage'
import Display from './Display'
import StartButton from './StartButton'

//const Cell = ({ type }) => (<div>cell</div>)
function Tetris({ type }) {
  const [dropTime, setDropTime] = useState(null)
  const [gameOver, setGameOver] = useState(false)

  const [player, updatePlayerPos, resetPlayer ] = usePlayer()
  const [stage, setStage] = useStage(player)

  const movePlayer = dir => {
    updatePlayerPos({x: dir, y:0})
  }

  const startGame = () => {
    // Rest Everything
    setStage(createStage())
    resetPlayer()
  }

  const drop = () =>{
    updatePlayerPos({ x: 0, y: 1, collided: false })
  }

  const dropPlayer = () =>{
    drop()
  }

  const move = ({keyCode}) => {{
    if(!gameOver){
      if(keyCode === 37){
        movePlayer(-1)
      }else if(keyCode === 39){
        movePlayer(1)
      }else if(keyCode === 40){
        dropPlayer()
      }
    }
  }}


  return (
    <>
      <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
        <StyledTetris>
          <Stage stage={stage} />
          <aside>
            {gameOver ? (
              <Display
                gameOver={gameOver}
                text="領取優惠卷"
              />
            ) : (
              <div>
                <Display text="Score" />
                <Display text="Rows" />
                <Display text="Level" />
              </div>
            )}
            <StartButton onClick={startGame}/>
          </aside>
        </StyledTetris>
      </StyledTetrisWrapper>
    </>
  )
}

export default Tetris
