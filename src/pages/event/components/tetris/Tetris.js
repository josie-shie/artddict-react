import { React, useState, useEffect, useRef } from 'react'

import { createStage, checkCollision } from './gameHelper'

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

  const [player, updatePlayerPos, resetPlayer, playerRotate ] = usePlayer()
  const [stage, setStage] = useStage(player)

  const movePlayer = dir => {
    if(!checkCollision(player, stage, {x: dir, y: 0})){
      updatePlayerPos({x: dir, y:0})
    }
  }

  const startGame = () => {
    // Rest Everything
    setStage(createStage())
    resetPlayer()
    setGameOver(false)
  }

  const drop = () =>{
    if (!checkCollision(player, stage,{x: 0, y:1 })){
      updatePlayerPos({ x: 0, y: 1, collided: false })
    }else{
      // game over
      if(player.pos.y <1){
        setGameOver(true)
        setDropTime(null)
      }
      updatePlayerPos({x:0, y:0, collided:true})
    }
  }

  const dropPlayer = () =>{
    drop()
  }

  const move = ({keyCode}) => {{
    if(!gameOver){
      if(keyCode === 65){
        movePlayer(-1)
      }else if(keyCode === 68){
        movePlayer(1)
      }else if(keyCode === 83){
        dropPlayer()
      }else if(keyCode === 87){
        playerRotate(stage, 1)
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
            <StartButton callback={startGame}/>
          </aside>
        </StyledTetris>
      </StyledTetrisWrapper>
    </>
  )
}

export default Tetris
