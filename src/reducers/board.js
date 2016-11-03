import Immutable from 'immutable';

const initialState = Immutable.Map({
  game: [],
});

const board = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME':
      return state.set('game', action.game);
    case 'STOP_GAME':
      return state.set('freeze', action.freeze);
    case 'ACTIVATE_TILE':
      return state.set('game', action.game);
    default:
      return state;
  }
};

export default board;
