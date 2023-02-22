import React from 'react';

function ProfilePosts({ post }) {
  return (
    <div className="grid-cols-1 md:grid-cols-3 flex-wrap p-0 gap-2 md:gap-1 flex">
      {post?.map((hai) => (
        <div>
          <img
            className="object-cover rounded-md overflow-hidden h-48 w-48 flex items-center"
            src={hai?.image}
            alt="posts"
          />
        </div>
      ))}
    </div>
  );
}

export default ProfilePosts;
