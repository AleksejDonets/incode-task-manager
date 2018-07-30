import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';

import {
  connectRouter,
  routerMiddleware,
  ConnectedRouter,
} from 'connected-react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);

export default store;
