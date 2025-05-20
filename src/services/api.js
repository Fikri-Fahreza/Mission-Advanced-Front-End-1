import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getCollections = () => axios.get(`${BASE_URL}/collections`);
export const addCollection = (data) => axios.post(`${BASE_URL}/collections`, data);
export const updateCollection = (id, data) => axios.put(`${BASE_URL}/collections/${id}`, data);
export const deleteCollection = (id) => axios.delete(`${BASE_URL}/collections/${id}`);
