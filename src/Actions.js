import * as ACTIONS from './Action_Types';


// Fonction/Méthodes
export function add_elem(elem){
    return{
        type: ACTIONS.ADD_ELEM,
        elem: elem
    };
}

export function remove_elem(index){
    return{
        type: ACTIONS.REMOVE_ELEM,
        index: index
    };
}

export function revert_list(){
    return{
        type: ACTIONS.REVERT_ELEM
    };
}

export function find_tag(tag){
    return{
        type: ACTIONS.FIND_TAG,
        tag: tag
    };
}


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