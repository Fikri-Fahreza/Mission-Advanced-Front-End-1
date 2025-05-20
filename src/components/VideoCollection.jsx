import React, { useState, useEffect } from 'react';
import { getVideos, addVideoAPI, updateVideoAPI, deleteVideoAPI } from '../services/api';
import avatar from '../assets/avatar web.png';
import img1 from '../assets/Rectangle 2.png';

const VideoCollection = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newVideo, setNewVideo] = useState({
    title: '',
    price: '',
    name: '',
    position: '',
    reviews: '',
    rating: 0,
  });
  const [editVideo, setEditVideo] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        setError(null);
        const localVideos = JSON.parse(localStorage.getItem('videos')) || [];
        const apiVideos = await getVideos();
        
        const mergedVideos = [...apiVideos];
        localVideos.forEach((localVideo) => {
          if (!apiVideos.some((apiVideo) => apiVideo.id === localVideo.id)) {
            mergedVideos.push(localVideo);
          }
        });

        setVideos(mergedVideos);
        localStorage.setItem('videos', JSON.stringify(mergedVideos));
      } catch (err) {
        setError(err.message);
        const localVideos = JSON.parse(localStorage.getItem('videos')) || [];
        if (localVideos.length > 0) {
          setVideos(localVideos);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  useEffect(() => {
    if (videos.length > 0) {
      localStorage.setItem('videos', JSON.stringify(videos));
    }
  }, [videos]);

  const addVideo = async () => {
    const { title, price, name, position, reviews } = newVideo;
    if (!title || !price || !name || !position || !reviews) return;

    try {
      const newId = videos.length ? Math.max(...videos.map((v) => parseInt(v.id))) + 1 : 1;
      const videoData = {
        id: newId.toString(),
        img: img1,
        title,
        rating: 0,
        price,
        name,
        position,
        reviews: parseInt(reviews),
      };
      
      const addedVideo = await addVideoAPI(videoData);
      setVideos([...videos, addedVideo]);
      setNewVideo({ title: '', price: '', name: '', position: '', reviews: '', rating: 0 });
    } catch (err) {
      setError(err.message);
    }
  };

  const deleteVideo = async (id) => {
    try {
      await deleteVideoAPI(id);
      const updatedVideos = videos.filter((video) => video.id !== id);
      setVideos(updatedVideos);
    } catch (err) {
      setError(err.message);
    }
  };

  const startEdit = (video) => {
    setEditVideo(video);
    setNewVideo({
      title: video.title,
      price: video.price,
      name: video.name,
      position: video.position,
      reviews: video.reviews,
      rating: video.rating,
    });
  };

  const updateVideo = async () => {
    const { title, price, name, position, reviews } = newVideo;
    if (!title || !price || !name || !position || !reviews) return;

    try {
      const updatedVideoData = {
        ...editVideo,
        title,
        price,
        name,
        position,
        reviews: parseInt(reviews),
      };
      
      const updatedVideo = await updateVideoAPI(editVideo.id, updatedVideoData);
      setVideos(videos.map((video) => 
        video.id === editVideo.id ? updatedVideo : video
      ));
      setEditVideo(null);
      setNewVideo({ title: '', price: '', name: '', position: '', reviews: '', rating: 0 });
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading videos...</p>;
  if (error && videos.length === 0) return <p>Error: {error}</p>;

  return (
    <section className="max-w-7xl mx-auto p-6">
      <div className="py-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Koleksi Video Pembelajaran Unggulan</h2>
        <p className="text-gray-600 mt-2">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">{editVideo ? 'Edit Video' : 'Tambah Video Baru'}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Judul Video"
            value={newVideo.title}
            onChange={(e) => setNewVideo({ ...newVideo, title: e.target.value })}
            className="border rounded-md p-2"
          />
          <input
            type="text"
            placeholder="Harga"
            value={newVideo.price}
            onChange={(e) => setNewVideo({ ...newVideo, price: e.target.value })}
            className="border rounded-md p-2"
          />
          <input
            type="text"
            placeholder="Nama Instruktur"
            value={newVideo.name}
            onChange={(e) => setNewVideo({ ...newVideo, name: e.target.value })}
            className="border rounded-md p-2"
          />
          <input
            type="text"
            placeholder="Posisi Instruktur"
            value={newVideo.position}
            onChange={(e) => setNewVideo({ ...newVideo, position: e.target.value })}
            className="border rounded-md p-2"
          />
          <input
            type="number"
            placeholder="Jumlah Reviews"
            value={newVideo.reviews}
            onChange={(e) => setNewVideo({ ...newVideo, reviews: e.target.value })}
            className="border rounded-md p-2"
          />
          {editVideo ? (
            <button
              onClick={updateVideo}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Update
            </button>
          ) : (
            <button
              onClick={addVideo}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Tambah
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mt-4">
        {videos.map((video) => (
          <div key={video.id} className="bg-white shadow-md rounded-lg p-4">
            <img src={video.img || img1} className="rounded-md w-full mb-2" alt={video.title} />
            <h4 className="font-semibold text-gray-800">{video.title}</h4>
            <p className="text-gray-500 text-sm mb-2">
              Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik
            </p>
            <div className="flex items-center gap-3 bg-white py-4 w-full justify-start">
              <img src={avatar} alt="Avatar" className="w-12 h-12 rounded-md" />
              <div>
                <span className="block font-semibold text-gray-800">{video.name}</span>
                <span className="text-sm text-gray-500">{video.position}</span>
              </div>
            </div>
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={i < Math.round(video.rating / 10) ? 'text-yellow-400' : 'text-gray-300'}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-gray-600 text-sm">{video.rating}</span>
                <span className="text-gray-500 text-sm underline">({video.reviews})</span>
              </div>
              <span className="text-green-500 font-bold text-lg">{video.price}</span>
            </div>
            <div className="flex justify-end gap-2 mt-2">
              <button
                onClick={() => startEdit(video)}
                className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => deleteVideo(video.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoCollection;