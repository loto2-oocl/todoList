import { combineReducers } from 'redux';
import {
  ADD_TODO_ITEM,
  REMOVE_TODO_ITEM,
  TOGGLE_CHANGE_STATUS,
} from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

const todoItemList = (state = [], action) => {
  if (action.type === ADD_TODO_ITEM) {
    const item = {
      id: uuidv4(),
      message: action.payload,
      status: 'NOT_DONE',
    };

    return state.concat(item);
  }

  if (action.type === REMOVE_TODO_ITEM) {
    return state.filter((todoItem) => todoItem.id !== action.payload);
  }

  if (action.type === TOGGLE_CHANGE_STATUS) {
    return state.map((todoItem) => {
      if (todoItem.id === action.payload) {
        return {
          ...todoItem,
          status: todoItem.status === 'NOT_DONE' ? 'DONE' : 'NOT_DONE',
        };
      }

      return todoItem;
    });
  }

  return state;
};

export default combineReducers({
  todoItemList,
});
