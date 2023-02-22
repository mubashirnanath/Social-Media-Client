/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Card from './Card';

function LeftSidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };
  const location = useLocation();
  const activeElement = 'text-sm md:text:2xl flex gap-1 md:gap-4 py-2 bg-main items-center text-white md:-mx-7 px-6 md:px-10 rounded-md shadow-md shadow-gray-400';
  const nonActiveElement = 'text-sm md:text:2xl flex gap-1 md:gap-3 py-2 my-2 items-center hover:bg-gray-300 -mx-2 px-6 md:px-2 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-400';
  return (
    <Card>
      <div className="p-4 py-1 flex gap-4 justify-between md:block w-full shadow-md shadow-gray-500 md:shadow-none">
        <h2 className="text-gray-400 md:text-xl mb-3 hidden md:block">
          Navigation
        </h2>
        <Link to="/">
          <p
            className={
              location?.pathname === '/' ? activeElement : nonActiveElement
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span className="hidden md:block md:text-lg">Home</span>
          </p>
        </Link>
        <Link to="/shorts">
          <p
            className={
              location?.pathname === '/shorts'
                ? activeElement
                : nonActiveElement
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            <span className="hidden md:block md:text-lg">Shorts</span>
          </p>
        </Link>
        <Link to="/create">
          <p
            className={
              location?.pathname === '/create'
                ? activeElement
                : nonActiveElement
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="hidden md:block md:text-lg">Create</span>
          </p>
        </Link>
        <Link to="/message">
          <p
            className={
              location?.pathname === '/message'
                ? activeElement
                : nonActiveElement
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
              />
            </svg>
            <span className="hidden md:block md:text-lg">Message</span>
          </p>
        </Link>

        <p onClick={handleLogout} className={nonActiveElement}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
          <span className="hidden md:block md:text-lg">Logout</span>
        </p>
      </div>
    </Card>
  );
}

export default LeftSidebar;
