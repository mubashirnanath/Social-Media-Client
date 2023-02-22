import React from 'react';

function Card({ children }) {
  return (
    <div className="bg-white shadow-md md:w-full shadow-gray-300 rounded-md mb-5 p-3">
      {children}
    </div>
  );
}

export default Card;
