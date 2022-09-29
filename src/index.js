import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Provider,
} from 'react-redux';
import {
  configureStore,
} from '@reduxjs/toolkit';

import App from './components/app/app';

import {
  rootReducer as reducer,
} from './store/reducers/root-reducer';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.querySelector('#root'));

const store = configureStore({
  reducer,
});

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
