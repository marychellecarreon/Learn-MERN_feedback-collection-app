// Data layer control (Redux)
// Provider - react component that knows how to rechanges the reactstore
// everytime the state changes
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware());

ReactDOM.render(<Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);
