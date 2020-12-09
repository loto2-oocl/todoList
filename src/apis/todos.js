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

const toggleTodoStatus = (todoItem) => {
  return api.put(`/todos/${todoItem.id}`, {
    ...todoItem,
    status: !todoItem.status,
  });
};

export { getTodoList, createNewTodo, deleteTodoItem, toggleTodoStatus };
