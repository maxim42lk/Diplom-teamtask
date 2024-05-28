import { applyMiddleware, legacy_createStore as createStore, compose as reduxCompose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createRouterMiddleware } from './lib/redux-router';

import rootReducer from './reducers';
import rootSaga from './sagas';
import history from './history';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware, createRouterMiddleware(history)];

let compose = reduxCompose;

if (process.env.NODE_ENV !== 'production') {
  const { logger } = require('redux-logger'); 
  middlewares.push(logger);


  if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined') {
    compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }
}

export default createStore(rootReducer, compose(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);
