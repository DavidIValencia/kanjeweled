import React, { PropTypes } from 'react';
import Tiles from './Tiles';

const styles = {
  board: {
    flex: 2,
    display: 'flex',
    height: '100%',
    width: '100%',
    margin: '0 5em 0 0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyBoard: {
    flex: 1,
    height: '33.5em',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
    border: '0.15em solid #221300',
    borderRadius: '0.5em',
  },
};

const Board = ({ gameOn, game }) => {
  if (!gameOn) {
    return (
      <div style={styles.board}>
        <div style={styles.emptyBoard} />
      </div>
    );
  }
  return (
    <div style={styles.board}>
      <Tiles game={game} />
    </div>
  );
};
Board.propTypes = {
  gameOn: PropTypes.bool,
  game: PropTypes.array,
};
export default Board;
