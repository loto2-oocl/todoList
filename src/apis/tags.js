import api from './api';

const getAllTags = () => {
  return api.get('/tags');
};

const createNewTag = (tag) => {
  return api.post('/tags', tag);
};

export { getAllTags, createNewTag };
