import { connect } from 'react-redux';
import { activateTile, swapTile } from '../actions/boardActions';
import Board from '../components/Board.js';

const mapStateToProps = (state) => ({
  game: state.board.get('game'),
});

const mapDispatchToProps = (dispatch) => ({
  activateTile: (pos) => {
    dispatch(activateTile(pos));
  },
  swapTile: (pos) => {
    dispatch(swapTile(pos));
  },
});

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);

export default BoardContainer;
