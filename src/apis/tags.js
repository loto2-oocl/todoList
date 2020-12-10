import api from './api';

const createNewTag = (tag) => {
  return api.post('/tags', tag);
};

export { createNewTag };
