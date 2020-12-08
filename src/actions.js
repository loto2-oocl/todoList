const { ADD_TODO_ITEM } = require('./actionTypes');

const addTodoItem = (message) => ({
  type: ADD_TODO_ITEM,
  payload: message,
});

export { addTodoItem };
