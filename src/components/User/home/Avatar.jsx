import React from 'react';

function Avatar({ img }) {
  return (
    <div>
      <div className="w-12 object-cover rounded-full">
        <img className="rounded-full" src={img} alt="" />
      </div>
    </div>
  );
}

export default Avatar;
