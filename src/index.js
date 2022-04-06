import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import * as ACTIONS from './Actions';
import reducer from "./Reducer";



console.log(store);

var store = createStore(reducer)

store.dispatch(ACTIONS.add_elem("Element1"));
store.dispatch(ACTIONS.add_elem("Element2"));
store.dispatch(ACTIONS.add_elem("Element3"));

store.dispatch(ACTIONS.remove_elem("Element3"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
