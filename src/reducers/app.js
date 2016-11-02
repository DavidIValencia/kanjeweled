import Immutable from 'immutable';

const initialState = Immutable.Map({
  gameOn: false,
});

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME':
      return state.set('gameOn', true);
    case 'END_GAME':
      return state.set('gameOn', false);
    default:
      return state;
  }
};

export default app;
