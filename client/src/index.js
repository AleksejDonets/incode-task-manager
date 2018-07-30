import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import App from './containers/App';
import { store } from './store';
import { ConnectedRouter } from 'connected-react-router';
import './index.css';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
