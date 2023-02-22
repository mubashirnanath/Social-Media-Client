import React from 'react';

function Story() {
  return (
    <div className="w-36 story-item relative hover:opacity-90 cursor-pointer transition duration-200 ease-in-out">
      <img
        className="rounded-md w-36 h-48"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
        alt=""
      />
      <div className="absolute flex flex-col justify-between h-full w-full top-0 left-0 py-4">
        <img
          className="rounded-full w-12 h-12 border-4 border-specclr ml-4"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
          alt=""
        />
        <span className="text-center text-white">hhhhhh</span>
      </div>
    </div>
  );
}

export default Story;
