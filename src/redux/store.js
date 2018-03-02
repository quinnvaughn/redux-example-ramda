import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './ducks/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const configureStore = initialState => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(logger))
  );
};

export default configureStore;
