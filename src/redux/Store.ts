import { createStore, applyMiddleware, compose } from 'redux';
import RootReducer from './reducers/RootReducer';
import { createEpicMiddleware } from 'redux-observable';

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware();

const Store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware)),
);

export default Store;
