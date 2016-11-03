import React, { PropTypes } from 'react';
import Nav from './Nav';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import BoardContainer from '../containers/BoardContainer';

const styles = {
  app: {
    display: 'flex',
    flex: 10,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '99.9vh',
    width: '99.9vw',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '5em',
    fontFamily: 'custom',
    paddingTop: '0.25em',
    paddingBottom: '0.25em',
    width: '100%',
    borderBottom: '2px solid black',
  },
};

const App = ({ startGame, stopGame, gameOn, score }) => (
  <ReactCSSTransitionGroup
    transitionName="example"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500}
  >
    <div style={styles.wrapper} >
      <div style={styles.title} >
        <div>kanjEweled</div>
      </div>
      <div style={styles.app}>
        <Nav score={score} gameOn={gameOn} startGame={startGame} stopGame={stopGame} />
        <BoardContainer gameOn={gameOn} />
      </div>
    </div>
  </ReactCSSTransitionGroup>
);
App.propTypes = {
  startGame: PropTypes.func,
  stopGame: PropTypes.func,
  gameOn: PropTypes.bool,
  score: PropTypes.number,
};
export default App;
