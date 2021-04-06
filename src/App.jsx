import React, { useEffect, useState } from 'react';
import _uniqueId from 'lodash/uniqueId';
import styled from 'styled-components';
import Grid from './components/grid/Grid';

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  const [isX, setIsX] = useState(true);
  const [cells, setCells] = useState(new Array(9).fill({ id: '', content: false }));
  const [winner, setWinner] = useState(false);

  const calculateWinner = (filled) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i += 1) {
      const [a, b, c] = lines[i];
      if (
        filled[a].content
        && filled[a].content === filled[b].content
        && filled[a].content === filled[c].content
      ) {
        return filled[a].content;
      }
    }
    return null;
  };

  useEffect(() => {
    setCells(cells.map((cell) => ({ ...cell, id: _uniqueId('cell-') })));
  }, []);

  useEffect(() => {
    setWinner(calculateWinner(cells));
  }, [cells]);

  const handleClick = (e) => {
    if (calculateWinner(cells)) return;
    setCells(
      cells.map((cell) => {
        if (cell.id === e.target.id && cell.content === false) {
          setIsX(!isX);
          return { ...cell, content: isX ? 'X' : 'O' };
        }
        return { ...cell };
      }),
    );
  };

  return (
    <Container>
      <p>{`Next player is: ${isX ? 'X' : 'O'}`}</p>
      {winner && <p>{`Winner is: ${winner}`}</p>}
      <Grid isX={isX} cells={cells} cellClicked={handleClick} />
    </Container>
  );
};

export default App;
