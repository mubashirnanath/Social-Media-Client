import React, { useState } from 'react';
import Card from '../home/Card';
import AddShorts from './AddShorts';
import AddStory from './AddStory';
import NewFeed from './NewFeed';

function HeadPart() {
  const [feed, setFeed] = useState(true);
  const [shorts, setShorts] = useState(false);
  const [story, setStory] = useState(false);
  const activeElement = 'flex gap-2 px-2 text-main text-xl border-b-2 justify-center border-main shadow-md shadow-gray-300 font-bold';
  const nonActiveElement = 'flex gap-2 px-2 text-main text-xl justify-center font-semibold hover:shadow-md';
  return (
    <>
      <Card>
        <div className="flex justify-between px-10">
          <div className={feed ? activeElement : nonActiveElement}>
            <button
              onClick={() => {
                setFeed(true);
                setShorts(false);
                setStory(false);
              }}
              type="button"
              className=""
            >
              New Feed
            </button>
          </div>
          <div className={shorts ? activeElement : nonActiveElement}>
            <button
              onClick={() => {
                setFeed(false);
                setShorts(true);
                setStory(false);
              }}
              type="button"
              className=""
            >
              Shorts
            </button>
          </div>
          <div className={story ? activeElement : nonActiveElement}>
            <button
              onClick={() => {
                setFeed(false);
                setShorts(false);
                setStory(true);
              }}
              type="button"
              className=""
            >
              Story
            </button>
          </div>
        </div>
      </Card>
      {feed && <NewFeed />}
      {shorts && <AddShorts />}
      {story && <AddStory />}
    </>
  );
}
export default HeadPart;
