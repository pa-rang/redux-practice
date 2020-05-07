import { createStore } from 'redux';

const ADD = "ADD";
const DELETE = "DELETE";

const addToDo = text => {
  return {
    type: ADD,
    text
  };
};

const deleteToDo = id => {
  return {
    type: DELETE,
    id: parseInt(id)
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [ ...state, { text: action.text, id: Date.now() }];
    case DELETE:
      return state.filter(toDo => action.id !== toDo.id);
    default:
      return state;
  }
};

export const actionCreators = {
  addToDo,
  deleteToDo
};

const store = createStore(reducer);

export default store;