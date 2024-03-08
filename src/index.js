import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from "react-router-dom"

// Let's import the Provider wrapper and our global store:
import {Provider} from "react-redux"
import store from './redux/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Now we wrap App with the Provider wrapper and give it store as props:
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
