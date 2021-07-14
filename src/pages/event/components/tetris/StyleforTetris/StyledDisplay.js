import styled from 'styled-components'

export const StyledDisplay = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 2px solid white;
  min-height: 30px;
  width: 100%;
  color: ${(props) =>
    props.gameOver ? '223, 173, 36' : 'white'};
  background: #000;
  font-family: Engravers-Bold, Arial, Helvetica, sans-serif;
  font-size: 1rem;
`

