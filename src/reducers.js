import { combineReducers } from 'redux';
import {
  ADD_TODO_ITEM,
  INIT_TODOS,
  REMOVE_TODO_ITEM,
  TOGGLE_CHANGE_STATUS,
} from './actionTypes';

const todoItemList = (state = [], action) => {
  if (action.type === ADD_TODO_ITEM) {
    return state.concat(action.payload);
  }

  if (action.type === REMOVE_TODO_ITEM) {
    return state.filter((todoItem) => todoItem.id !== action.payload);
  }

  if (action.type === TOGGLE_CHANGE_STATUS) {
    return state.map((todoItem) => {
      if (todoItem.id === action.payload) {
        return {
          ...todoItem,
          status: !todoItem.status,
        };
      }

      return todoItem;
    });
  }

  if (action.type === INIT_TODOS) {
    return action.payload;
  }

  return state;
};

export default combineReducers({
  todoItemList,
});
