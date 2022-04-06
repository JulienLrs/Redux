import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';


function add_elem(elem){
  return{
    type: ADD_ELEM,
    elem: elem
  };
}

function remove_elem(index){
  return{
    type: REMOVE_ELEM,
    index: index
  };
}

function revert_list(){
  return{
    type: REVERT_ELEM
  };
}

function find_tag(tag){
  return{
    type: FIND_TAG,
    tag: tag
  };
}


// Types d'actions
const ADD_ELEM = "ADD_ELEM";
const REMOVE_ELEM = "REMOVE_ELEM";
const REVERT_ELEM = "REVERT_ELEM";
const FIND_TAG = "FIND_TAG";

// // Action d'ajout
// const add_elem_1 = {type: ADD_ELEM, elem: "Element1"};
// const add_elem_2 = {type: ADD_ELEM, elem: "Element2"};
// const add_elem_3 = {type: ADD_ELEM, elem: "Element3"};
// const add_elem_4 = {type: ADD_ELEM, elem: "Element4"};
// const add_elem_5 = {type: ADD_ELEM, elem: "Element5"};

// // Action de suppression
// const remove_elem_1 = {type: REMOVE_ELEM, elem: "Element1"};
// const remove_elem_2 = {type: REMOVE_ELEM, elem: "Element2"};

// const revert_list_1 = {type: REVERT_ELEM};

// const find_tag_1 = {type: FIND_TAG, tag: "Element3"};
// const find_tag_2 = {type: FIND_TAG, tag: "Element4"};


// Initialisation de l'état de l'application
const stateInit = {
  elems: [],  // Elements de la lsite
  revert: false,  // Boolean
  find: {
    tag: "", // Tag à rechercher
    elems: [] // Les Elements contenants le tag à rechercher
  }
}


const store = createStore(function(state = stateInit, action){  // Reducer
  var newState;
    if (action.type == ADD_ELEM) {
      var elem = action.elem;
      var elems = state.elems;
      newState = Object.assign({}, state, {elems:elems});
    }
    else if (action.type == REMOVE_ELEM) {
      var index = action.type;
      var elems = state.elems;
      elems = elems.filter(function(elem, i){
        if (i == index)
        return false;
        else return true;
      });
      newState = Object.assign({}, state, {elems: elems});
    }
    else if (action.type == REVERT_ELEM){
      var revert = state.revert;
      var elems = state.elem;
      elems.revert();
      newState = Object.assign({}, state, {elems: elems, revert: !revert});
    }
    else if (action.type == FIND_TAG){
      var tag = action.tag;
      var elems = state.elems;
      elems = elems.filter(function(elem, i){
        if (elem.indexOf(tag) >= 0) 
        return true;
        else return false;
      });
      newState = Object.assign({}, state, {find: {elems, elems, tag:tag}});
    }
    else {
      newState = state;
    }
    console.log(action, newState);
    return newState;
})

console.log(store);



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
