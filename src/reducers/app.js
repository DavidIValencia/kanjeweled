import Immutable from 'immutable';

const initialState = Immutable.Map({
  gameOn: false,
  score: 0,
});

const app = (state = initialState, action) => {
  switch (action.type) {
    case 'START_GAME':
      return state.set('gameOn', true);
    case 'STOP_GAME':
      return state.set('gameOn', false).set('score', 0);
    case 'INCREASE_SCORE':
      return state.set('score', state.get('score') + 100);
    default:
      return state;
  }
};

export default app;
