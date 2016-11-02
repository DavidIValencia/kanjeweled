import React, { PropTypes } from 'react';
import Nav from './Nav';
import BoardContainer from '../containers/BoardContainer';

const styles = {
  app: {
    display: 'flex',
    height: '99.9vh',
    width: '99.9vw',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const App = ({ startGame, stopGame, gameOn, score }) => (
  <div style={styles.app}>
    <Nav score={score} gameOn={gameOn} startGame={startGame} stopGame={stopGame} />
    <BoardContainer gameOn={gameOn} />
  </div>
);
App.propTypes = {
  startGame: PropTypes.func,
  stopGame: PropTypes.func,
  gameOn: PropTypes.bool,
  score: PropTypes.number,
};
export default App;
