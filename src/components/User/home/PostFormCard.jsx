import React from 'react';
import Card from './Card';
import Story from './Story';

function PostFormCard() {
  return (
    <div className="mt-1">
      <Card>
        <div className="flex gap-1 justify-between rounded-sm overflow-x-scroll">
          <div className="">
            <Story />
          </div>
          <div className="">
            <Story />
          </div>
          <div className="">
            <Story />
          </div>
          <div className="">
            <Story />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default PostFormCard;
