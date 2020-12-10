import api from './api';

const getTodoList = () => {
  return api.get('/todos');
};

const createNewTodo = (message) => {
  return api.post('/todos', {
    message,
    status: false,
    tags: [],
  });
};

const deleteTodoItem = (id) => {
  return api.delete(`/todos/${id}`);
};

const toggleTodoStatus = (todoItem) => {
  return api.put(`/todos/${todoItem.id}`, {
    ...todoItem,
    status: !todoItem.status,
  });
};

const updateTodoTags = (todoItem, updatedTags) => {
  return api.put(`/todos/${todoItem.id}`, {
    ...todoItem,
    tags: updatedTags,
  });
};
export {
  getTodoList,
  createNewTodo,
  deleteTodoItem,
  toggleTodoStatus,
  updateTodoTags,
};
