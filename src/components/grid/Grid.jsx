import React from 'react';
import styled from 'styled-components';
import Cell from './components/Cell/Cell';

const StyledMatrix = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  background: black;
  padding: 2px;
  width: 90vw;

  @media (min-width: 350px) {
    width: 312px;
  }
`;

const Grid = ({ cellClicked, cells }) => {
  const matrix = new Array(9).fill();

  return (
    <StyledMatrix>
      {matrix.map((cell, index) => (
        <Cell id={cells[index].id} cellClicked={cellClicked}>
          {cells[index].content}
        </Cell>
      ))}
    </StyledMatrix>
  );
};

export default Grid;
