import axios from 'axios';
axios.defaults.baseURL = 'https://6397211886d04c76338bb46d.mockapi.io/';
export const addMaterial = async values => {
  const responce = await axios.post('/materials', values);
  return responce.data;
};
export const getMaterials = async () => {
  const responce = await axios.get('/materials');
  return responce.data;
};
export const deleteMaterials = async id => {
  const responce = await axios.delete(`/materials/${id}`);
  return responce.data;
};
export const updateMaterials = async fields => {
  const responce = await axios.put(`/materials/${fields.id}`, fields);
  return responce.data;
};
