import api from './api';

const getTodoList = () => {
  return api.get('/todos');
};

const createNewTodo = (message) => {
  return api.post('/todos', {
    message,
  });
};

export { getTodoList, createNewTodo };
