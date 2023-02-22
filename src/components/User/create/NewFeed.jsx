/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// import S3 from "aws-sdk/clients/s3";
import { AddPost } from '../../../api/User/PostRequest';

// const config = {
//   bucketName: process.env.REACT_APP_BUCKET_NAME,
//   region: process.env.REACT_APP_REGION,
//   accessKeyId: process.env.REACT_APP_ACCESS,
//   secretAccessKey: process.env.REACT_APP_SECRET,
//   signatureVersion: "v4",
// };

// const s3 = new S3({
//   region: config.region,
//   accessKeyId: config.accessKeyId,
//   secretAccessKey: config.secretAccessKey,
// });

function NewFeed() {
  const [post, setPost] = useState('');
  const [place, setPlace] = useState('');
  const [caption, setCaption] = useState('');
  const navigate = useNavigate();
  // const [image, setImage] = useState("");

  const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
  const handlePost = async (e) => {
    const feed = await e.target.files[0];
    if (!allowedExtensions.exec(feed.name)) {
      toast.error('Choose Image');
    } else {
      setPost(feed);
    }
  };
  const handleSubmits = async () => {
    // const file = post;
    // const reader = new FileReader();
    // reader.readAsArrayBuffer(file);
    // reader.onload = async (e) => {
    //   const result = e.target.result;
    //   const uploadParams = {
    //     Bucket: config.bucketName,
    //     Key: file.name,
    //     Body: result,
    //   };
    //   s3.upload(uploadParams)
    //     .promise()
    //     .then((res) => {
    //       const hai = res.Location;
    //       setImage(hai);
    //     });

    const userId = localStorage.getItem('userId');
    const data = {
      userId,
      place,
      caption,
      image:
        'https://assets.architecturaldigest.in/photos/63806da6d2c4a1a597b273fd/master/pass/1442809583',
    };

    if (post) {
      const response = await AddPost(data);
      setCaption('');
      setPlace('');
      setPost('');
      if (response.status) {
        navigate('/');
      }
    } else {
      toast.error('Please Add Post');
    }
  };
  // };
  const notPost = 'flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600';
  return (
    <form>
      {post ? (
        <div className="flex justify-center">
          <div className="items-center w-1/2">
            <img src={URL.createObjectURL(post)} alt="" />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full">
          <label htmlFor="dropzone-file" className={notPost}>
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span
                  type="button"
                  className="bg-main p-3 text-white rounded-md font-semibold"
                >
                  Click to upload
                </span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                or drag and drop
              </p>
            </div>
          </label>
          <input
            id="dropzone-file"
            name="post"
            onChange={handlePost}
            type="file"
            className="hidden"
            required
          />
        </div>
      )}
      <div>
        <div className="mt-3">
          <textarea
            placeholder="Caption Here"
            onChange={(e) => {
              setCaption(e.target.value);
            }}
            type="text"
            id="default-input"
            className="text-center text-xl bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </div>
      <div>
        <input
          type="text"
          onChange={(e) => {
            setPlace(e.target.value);
          }}
          placeholder="Add Place"
          id="small-input"
          className="block w-full p-2 text-xl mt-2 text-center text-gray-900 border border-gray-300 rounded-lg bg-gray-50  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div
        onClick={handleSubmits}
        type="button"
        className="bg-main text-center mt-3 mb-4 rounded-md cursor-pointer"
      >
        <button
          type="button"
          className="text-white text-3xl py-2 font-semibold"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default NewFeed;
