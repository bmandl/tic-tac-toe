import React, { Children, useState } from 'react'
import styled from 'styled-components'

const StyledCell = styled.div`
  background: white;
  margin: 2px;
  flex: 0 1 31%;
  height: calc(90vw / 3 - 4 * 2px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  color: ${props => props.children === 'X'? 'blue' : 'tomato'};

  @media(min-width: 350px) {
    font-size: 4em;
    flex: 0 1 32%;
    height: 100px;
  }
`

const Cell = ({ cellClicked, children, id }) => {
  return (
    <StyledCell id={id} onClick={cellClicked}>
      {children}
    </StyledCell>
  )
}

export default Cell
