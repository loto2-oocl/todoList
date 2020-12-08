import {
  ADD_TODO_ITEM,
  REMOVE_TODO_ITEM,
  TOGGLE_CHANGE_STATUS,
} from './actionTypes';

const addTodoItem = (message) => ({
  type: ADD_TODO_ITEM,
  payload: message,
});

const removeTodoItem = (todoItemId) => ({
  type: REMOVE_TODO_ITEM,
  payload: todoItemId,
});

const toggleChangeStatus = (todoItemId) => ({
  type: TOGGLE_CHANGE_STATUS,
  payload: todoItemId,
});

export { addTodoItem, removeTodoItem, toggleChangeStatus };
