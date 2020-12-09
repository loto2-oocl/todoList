import {
  ADD_TODO_ITEM,
  UPDATE_TODO_ITEM,
  REMOVE_TODO_ITEM,
  INIT_TODOS,
  TOGGLE_CHANGE_STATUS,
} from './actionTypes';

const addTodoItem = (todoItem) => ({
  type: ADD_TODO_ITEM,
  payload: todoItem,
});

const updateTodoItem = (todoItem) => ({
  type: UPDATE_TODO_ITEM,
  payload: todoItem,
});

const removeTodoItem = (todoItemId) => ({
  type: REMOVE_TODO_ITEM,
  payload: todoItemId,
});

const toggleChangeStatus = (todoItemId) => ({
  type: TOGGLE_CHANGE_STATUS,
  payload: todoItemId,
});

const initTodos = (todos) => ({
  type: INIT_TODOS,
  payload: todos,
});

export {
  addTodoItem,
  updateTodoItem,
  removeTodoItem,
  toggleChangeStatus,
  initTodos,
};
