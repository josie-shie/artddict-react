import styled from 'styled-components'

export const StyledStartButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 20px 0;
  padding: 20px;
  min-height: 30px;
  width: 100%;
  border: none;
  color: black;
  background: white;
  font-family: 'Noto Sans TC', Arial, Helvetica, sans-serif;
  font-weight: 500;
  letter-spacing: 9px;
  font-size: 1rem;
  outline: none;
  cursor: pointer;
`

// const StartButton = ({ callback }) => (
//   <StyledStartButton onClick={callback}>
//     Start Game
//   </StyledStartButton>
// )