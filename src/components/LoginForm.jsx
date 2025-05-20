import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="flex items-center justify-center flex-grow pt-12 px-4">
      <div className="bg-white p-5 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-lg font-semibold text-gray-800 mb-1 text-center">Masuk</h2>
        <p className="text-gray-500 text-xs mb-4 text-center">Masuk ke akun kamu!</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block text-gray-500 text-xs">
              E-Mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>


          <div className="mb-2 relative">
            <label className="block text-gray-500 text-xs">
              Kata Sandi <span className="text-red-500">*</span>
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/4 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`bi ${showPassword ? 'bi-eye-fill' : 'bi-eye-slash-fill'}`}></i>
            </span>
          </div>


          <div className="text-right mb-2">
            <a href="#" className="text-gray-500 text-xs">Lupa Password?</a>
          </div>


          <button
            type="submit"
            className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition duration-300 text-sm font-bold"
          >
            Masuk
          </button>
        </form>


        <div className="text-center mt-2 bg-[#E2FCD9] py-2 rounded-md">
          <Link to={'register'} className="text-green-500 text-sm font-bold hover:underline">Daftar</Link>
        </div>


        <div className="flex items-center my-2">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-1 text-gray-500 text-xs">atau</span>
          <hr className="flex-grow border-gray-300" />
        </div>


        <button className="w-full flex items-center justify-center p-2 border border-gray-300 rounded-md hover:bg-gray-50 transition duration-300">
          <img src="https://www.google.com/favicon.ico" alt="Google Icon" className="w-4 h-4 mr-1" />
          <span className="text-gray-700 text-xs">Masuk dengan Google</span>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;