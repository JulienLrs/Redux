import * as ACTIONS from './Action_Types';

const stateInit = {
    elems: [],  // Elements de la lsite
    revert: false,  // Boolean
    find: {
      tag: "", // Tag à rechercher
      elems: [] // Les Elements contenants le tag à rechercher
    }
}



export default function reducer(state = stateInit, action){  // Reducer
    var newState;

        if (action.type == ACTIONS.ADD_ELEM) {
            var elem = action.elem;
            var elems = state.elems;
            newState = Object.assign({}, state, {elems:elems});
}
        else if (action.type == ACTIONS.REMOVE_ELEM) {
            var index = action.type;
            var elems = state.elems;
            elems = elems.filter(function(elem, i){
                if (i == index)
                return false;
                else return true;
        });
            newState = Object.assign({}, state, {elems: elems});
    }
        else if (action.type == ACTIONS.REVERT_ELEM){
            var revert = state.revert;
            var elems = state.elem;
            elems.revert();
            newState = Object.assign({}, state, {elems: elems, revert: !revert});
    }
        else if (action.type == ACTIONS.FIND_TAG){
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
}

