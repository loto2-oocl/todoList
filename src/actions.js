import {
  ADD_TODO_ITEM,
  INIT_TODOS,
  REMOVE_TODO_ITEM,
  TOGGLE_CHANGE_STATUS,
} from './actionTypes';

const addTodoItem = (todoItem) => ({
  type: ADD_TODO_ITEM,
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

export { addTodoItem, removeTodoItem, toggleChangeStatus, initTodos };
