import api from './api';

const getAllTags = () => {
  return api.get('/tags');
};

const createNewTag = (tag) => {
  return api.post('/tags', tag);
};

const updateTagById = (tagId, newTag) => {
  return api.put(`/tags/${tagId}`, newTag);
};

const deleteTagById = (tagId) => {
  return api.delete(`/tags/${tagId}`);
};

export { getAllTags, createNewTag, updateTagById, deleteTagById };
