import { connect } from 'react-redux';
import { startGame, stopGame } from '../actions/appActions';
import App from '../components/App.js';

const mapStateToProps = (state) => ({
  gameOn: state.app.get('gameOn'),
  score: state.app.get('score'),
});

const mapDispatchToProps = (dispatch) => ({
  startGame: () => {
    dispatch(startGame());
  },
  stopGame: () => {
    dispatch(stopGame());
  },
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
