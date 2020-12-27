import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';
import { createEpicMiddleware } from 'redux-observable'

const composeEnhancers = composeWithDevTools({});

const epicMiddleware = createEpicMiddleware();

let store;
if (!(window as any).__REDUX_DEVTOOLS_EXTENSION__) {
  store = createStore(rootReducer)
} else {
  store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)))
}

export default store;
