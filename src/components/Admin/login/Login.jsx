import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminLogin } from '../../../api/Admin/adminAuthRequest';

function Login() {
  const [formData, setFormData] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {}, [formData]);
  const handleSubmit = async () => {
    const response = await adminLogin(formData);
    if (response.status) {
      navigate('/admin/dashboard');
    }
  };
  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-mains rounded-md shadow-xl shadow-mains ring-2 ring-main lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-main uppercase">
          Sign in
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              onChange={handleChange}
              name="email"
              type="email"
              className="block w-full px-4 py-2 mt-2 text-main bg-white border rounded-md focus:border-white focus:white focus:outline-none focus:ring"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              onChange={handleChange}
              name="password"
              type="password"
              className="block w-full px-4 py-2 mt-2 text-main bg-white border rounded-md focus:border-main focus:main focus:outline-none focus:ring"
            />
          </div>
          <p className="text-xs text-main hover:underline">Forget Password?</p>
          <div className="mt-6">
            <button
              onClick={handleSubmit}
              type="button"
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-main rounded-md hover:bg-gray-700 focus:outline-none"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
