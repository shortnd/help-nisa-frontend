import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import persistState from 'redux-localstorage';


const middleware = [
  logger,
  thunk
]

const enhancer = compose(
  composeWithDevTools(applyMiddleware(...middleware)),
  persistState()
)

const store = createStore(
  rootReducer,
  {},
  enhancer
)

export default store;
