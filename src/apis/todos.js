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

const updateTodoTags = (todoItem, tagIds) => {
  return api.put(`/todos/${todoItem.id}/tags`, tagIds);
};
export {
  getTodoList,
  createNewTodo,
  deleteTodoItem,
  toggleTodoStatus,
  updateTodoTags,
};
