const { ADD_TODO_ITEM, REMOVE_TODO_ITEM } = require('./actionTypes');

const addTodoItem = (message) => ({
  type: ADD_TODO_ITEM,
  payload: message,
});

const removeTodoItem = (todoItemId) => ({
  type: REMOVE_TODO_ITEM,
  payload: todoItemId,
});

export { addTodoItem, removeTodoItem };
