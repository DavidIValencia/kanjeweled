import { connect } from 'react-redux';
import Board from '../components/Board.js';

const mapStateToProps = (state) => ({
  game: state.board.get('game'),
});

const BoardContainer = connect(
  mapStateToProps,
  null
)(Board);

export default BoardContainer;
