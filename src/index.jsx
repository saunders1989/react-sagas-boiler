import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';

import routes from './routes';

import './index.css';

const AppRouter = () => (
  <Provider store={store}>
    <Router>
      { routes }
    </Router>
  </Provider>
);

render(<AppRouter />, document.getElementById('root'));
