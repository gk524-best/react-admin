import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({});

let store;
if (!(window as any).__REDUX_DEVTOOLS_EXTENSION__) {
  store = createStore()
} else {

}
