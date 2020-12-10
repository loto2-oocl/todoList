import { combineReducers } from 'redux';
import {
  ADD_TODO_ITEM,
  UPDATE_TODO_ITEM,
  REMOVE_TODO_ITEM,
  INIT_TODOS,
  TOGGLE_CHANGE_STATUS,
  INIT_TAGS,
  ADD_TAG,
  REMOVE_TAG,
} from './actionTypes';

const todoItemList = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return state.concat(action.payload);
    case UPDATE_TODO_ITEM:
      return state.map((todoItem) => {
        if (todoItem.id === action.payload.id) {
          return action.payload;
        }

        return todoItem;
      });
    case REMOVE_TODO_ITEM:
      return state.filter((todoItem) => todoItem.id !== action.payload);
    case TOGGLE_CHANGE_STATUS:
      return state.map((todoItem) => {
        if (todoItem.id === action.payload) {
          return {
            ...todoItem,
            status: !todoItem.status,
          };
        }

        return todoItem;
      });
    case INIT_TODOS:
      return action.payload;
    default:
      return state;
  }
};

const tags = (state = [], action) => {
  switch (action.type) {
    case INIT_TAGS:
      return action.payload;
    case ADD_TAG:
      return state.concat(action.payload);
    case REMOVE_TAG:
      return state.filter((tag) => tag.id !== action.payload);
    default:
      return state;
  }
};

export default combineReducers({
  todoItemList,
  tags,
});
