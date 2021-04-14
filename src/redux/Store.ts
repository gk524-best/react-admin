import { createStore, applyMiddleware, compose } from 'redux';
import { RootAction } from './actions/RootAction';
import RootReducer, { RootState } from './reducers/RootReducer';
import epics from './epics/RootEpic';
import { createEpicMiddleware, EpicMiddleware } from 'redux-observable';

export type AppState = RootState;

export type AppAction = RootAction;

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware: EpicMiddleware<
  AppAction,
  AppAction,
  AppState
> = createEpicMiddleware();

const Store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(epicMiddleware)),
);

epicMiddleware.run(epics);

export default Store;
