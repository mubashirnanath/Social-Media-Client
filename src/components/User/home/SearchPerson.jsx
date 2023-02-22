import React from 'react';
import Avatar from './Avatar';

function SearchPerson({ users }) {
  return (
    <div className="flex">
      <Avatar img={users?.profile_img} />
      <div>adsf</div>
    </div>
  );
}

export default SearchPerson;
