import { connect } from 'react-redux';
import { startGame, endGame } from '../actions/appActions';
import App from '../components/App.js';

const mapStateToProps = (state) => ({
  gameOn: state.app.get('gameOn'),
});

const mapDispatchToProps = (dispatch) => ({
  rotateImages: () => {
    dispatch(startGame());
  },
  endGame: () => {
    dispatch(endGame());
  },
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
