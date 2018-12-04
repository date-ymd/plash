import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from 'redux';


// import logger from 'redux-logger';
import * as reducers from '../reducers';
import Reactotron from "../ReactotronConfig";

import createSagaMiddleware from 'redux-saga';
import mySaga from '../saga';
const sagaMiddleware = createSagaMiddleware();


export function createStore() {
  return Reactotron.createStore(//reduxCreateStore
    combineReducers(reducers),
    applyMiddleware(
      sagaMiddleware
    )
  )
}

export function runsaga() {
  return sagaMiddleware.run(mySaga)
}
