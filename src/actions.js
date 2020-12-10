import {
  ADD_TODO_ITEM,
  UPDATE_TODO_ITEM,
  REMOVE_TODO_ITEM,
  INIT_TODOS,
  TOGGLE_CHANGE_STATUS,
  INIT_TAGS,
  ADD_TAG,
  REMOVE_TAG,
  UPDATE_TAG,
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

const initTags = (tags) => ({
  type: INIT_TAGS,
  payload: tags,
});

const addTag = (tag) => ({
  type: ADD_TAG,
  payload: tag,
});

const updateTag = (tag) => ({
  type: UPDATE_TAG,
  payload: tag,
});

const removeTag = (tagId) => ({
  type: REMOVE_TAG,
  payload: tagId,
});

export {
  addTodoItem,
  updateTodoItem,
  removeTodoItem,
  toggleChangeStatus,
  initTodos,
  initTags,
  addTag,
  updateTag,
  removeTag,
};
