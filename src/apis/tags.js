import api from './api';

const getAllTags = () => {
  return api.get('/tags');
};

const createNewTag = (tag) => {
  return api.post('/tags', tag);
};

const deleteTagById = (tagId) => {
  return api.delete(`/tags/${tagId}`);
};

export { getAllTags, createNewTag, deleteTagById };
