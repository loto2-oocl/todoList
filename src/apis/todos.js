import api from './api';

const getTodoList = () => {
  return api.get('/todos');
};

const createNewTodo = (message) => {
  return api.post('/todos', {
    message,
  });
};

const deleteTodoItem = (id) => {
  return api.delete(`/todos/${id}`);
};

export { getTodoList, createNewTodo, deleteTodoItem };
