import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getVideos = async () => {
  try {
    const response = await api.get('/');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Gagal mengambil data video');
  }
};

export const addVideoAPI = async (videoData) => {
  try {
    const response = await api.post('/', videoData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Gagal menambahkan video');
  }
};

export const updateVideoAPI = async (id, videoData) => {
  try {
    const response = await api.put(`/${id}`, videoData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Gagal memperbarui video');
  }
};

export const deleteVideoAPI = async (id) => {
  try {
    const response = await api.delete(`/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Gagal menghapus video');
  }
};