/* eslint-disable no-underscore-dangle */
import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import AppContainer from '../containers/AppContainer';
import app from '../reducers/app';
import board from '../reducers/board';
import logger from './Root/logger';
import boardMidWare from './Root/boardMidWare';


const rootReducer = combineReducers({
  app,
  board,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger, boardMidWare)
);

const Root = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);
Root.propTypes = {
  store: PropTypes.object,
};
export default Root;
