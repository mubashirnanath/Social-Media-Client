import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
// import AWS from "aws-sdk";
import { uploadShorts } from '../../../api/User/shortRequest';

// const s3 = new AWS.S3({
//   accessKeyId: process.env.REACT_APP_ACCESS,
//   secretAccessKey: process.env.REACT_APP_SECRET,
//   region: process.env.REACT_APP_REGION,
// });

function AddShorts() {
  const navigate = useNavigate();
  const [shorts, setShorts] = useState('');
  const allowedExtensions = /(\.mp4)$/i;
  const handleShorts = async (e) => {
    const short = await e.target.files[0];
    // validating wheather it is video
    if (!allowedExtensions.exec(short.name)) {
      toast.error('Choose video');
    } else {
      setShorts(short);
    }
  };
  const handleUpload = async () => {
    // const fileContent = new Blob([shorts]);
    // const params = {
    //   Bucket: process.env.REACT_APP_BUCKET_NAME,
    //   Key: `shorts/${shorts.name}`,
    //   Body: fileContent,
    // };
    // const result = await s3.upload(params).promise();
    // const url = result?.Location;
    const url = 'https://connect-with-post.s3.ap-south-1.amazonaws.com/shorts/Sample%20Videos%20-%20Dummy%20Videos%20For%20Demo%20Use%20%282%29.mp4';
    const uploadShort = await uploadShorts(url);
    if (uploadShort.status) {
      navigate('/shorts');
    }
  };
  return (
    <div>
      {shorts ? (
        <>
          <div className="flex justify-center">
            <div className="items-center w-1/2">
              <video width="400" controls>
                <source src={URL.createObjectURL(shorts)} />
                <track src="captions_en.vtt" kind="captions" srcLang="en" />
              </video>
            </div>
          </div>
          <div className="text-center mt-3 mb-4 rounded-md cursor-pointer">
            <button
              onClick={handleUpload}
              type="button"
              className="border text-white rounded-lg text-3xl w-48 py-2 bg-main font-semibold"
            >
              Upload
            </button>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
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
            onChange={handleShorts}
            type="file"
            className="hidden"
            required
          />
        </div>
      )}
    </div>
  );
}

export default AddShorts;
