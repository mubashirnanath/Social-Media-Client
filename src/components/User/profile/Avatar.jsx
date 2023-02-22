import React from 'react';

function Avatar({ img }) {
  return (
    <div>
      <div className="w-28 rounded-full overflow-hidden">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default Avatar;
