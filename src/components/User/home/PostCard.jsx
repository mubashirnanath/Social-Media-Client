/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import OutsideClickHandler from 'react-outside-click-handler';
import { useSelector } from 'react-redux';
import Card from './Card';
import CommentsModal from './CommentsModal';
import Avatar from './Avatar';
import {
  addComment,
  getAllComments,
  likePost,
} from '../../../api/User/PostRequest';

function PostCard({ allPost }) {
  const user = useSelector((state) => state.user);
  const [allComment, setAllComment] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [comment, setComment] = useState('');
  const [newComment, setNewComment] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [likeStatus, setLikeStatus] = useState(
    allPost.likes?.includes(allPost.userId?._id),
  );
  const [likeCount, setlikeCount] = useState(allPost.likes?.length);
  const userId = localStorage.getItem('userId');
  useEffect(() => {
    const comments = async () => {
      const data = await getAllComments(allPost?._id);
      setAllComment(data[0]);
    };
    comments();
  }, []);
  const postLike = async (postId) => {
    await likePost(postId, userId);
    setLikeStatus(!likeStatus);
    if (likeStatus) {
      setlikeCount(likeCount - 1);
    } else {
      setlikeCount(likeCount + 1);
    }
  };
  const handleComment = async (postId) => {
    await addComment(userId, postId, comment);
    setNewComment([...newComment, comment]);
    setComment('');
  };
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <div>
      <Card>
        <div className="flex gap-3">
          <div>
            <Avatar img={allPost.userId?.profile_img} size="small" />
          </div>
          <div className="grow">
            <div className="flex items-center gap-2">
              <Link
                to={
                  allPost.userId?._id !== userId
                    ? `/user-profile/${allPost.userId?._id}`
                    : '/profile'
                }
              >
                <p className="font-semibold">{allPost.userId?.username}</p>
              </Link>
              <span>
                {allPost.userId?.verified && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="blue"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                    />
                  </svg>
                )}
              </span>
            </div>
            <p className="text-gray-500">{allPost?.place}</p>
          </div>
          <div className="">
            <button
              type="button"
              className="text-gray-400"
              onClick={() => setDropdownOpen(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </button>
            <OutsideClickHandler
              onOutsideClick={() => {
                setDropdownOpen(false);
              }}
            >
              <div className="relative">
                {dropdownOpen && (
                  <div className="absolute right-6 border border-gray-300 bg-white shadow-md shadow-gray-100 p-3 rounded-md w-36">
                    <a
                      href="/#"
                      className="flex gap-3 py-2 my-2 hover:bg-blue-300 -mx-2 px-2 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                        />
                      </svg>
                      Save post
                    </a>
                    <a
                      href="/#"
                      className="flex gap-3 py-2 my-2 hover:bg-blue-300 -mx-2 px-2 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                        />
                      </svg>
                      Report
                    </a>
                  </div>
                )}
              </div>
            </OutsideClickHandler>
          </div>
        </div>
        <div>
          <div className="flex rounded-md overflow-hidden mt-2 justify-center">
            <img src={allPost?.image} alt="post" />
          </div>
        </div>
        <div className="flex mt-5 gap-4">
          <button
            type="button"
            onClick={() => {
              postLike(allPost?._id);
            }}
            className="flex gap-2 items-center"
          >
            {likeStatus ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0H24V24H0z" />
                <path
                  d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228z"
                  fill="rgba(245,7,7,1)"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0H24V24H0z" />
                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
              </svg>
            )}
          </button>
          <button type="button" className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M7.291 20.824L2 22l1.176-5.291A9.956 9.956 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10a9.956 9.956 0 0 1-4.709-1.176zm.29-2.113l.653.35A7.955 7.955 0 0 0 12 20a8 8 0 1 0-8-8c0 1.334.325 2.618.94 3.766l.349.653-.655 2.947 2.947-.655z" />
            </svg>
          </button>
          <button type="button" className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" />
            </svg>
          </button>
        </div>
        <span className="text-gray-500">
          {likeCount}
          <span className="ml-2">likes</span>
        </span>
        <div className="flex">
          {allPost?.caption ? (
            <p>
              <span className="font-bold ">{allPost.userId?.username}</span>
              <span className="px-1 font-bold">:</span>
              {allPost?.caption}
            </p>
          ) : null}
        </div>
        <div className="mt-3">
          <button
            type="button"
            onClick={() => {
              setShowModal(true);
            }}
            className="text-black font-semibold text-md"
          >
            View All Comments
          </button>
          <div className="mt-2">
            {allComment?.comment?.map((comments) => (
              <div className="flex items-center">
                <h1 className="font-medium">{comments.username}</h1>
                <span className="p-1 font-medium">:</span>
                <span className="ml-1">{comments.comments}</span>
              </div>
            ))}
            {newComment?.map((newcomment) => (
              <div className="flex items-center">
                <h1 className="font-medium">{user?.username}</h1>
                <span className="p-1 font-medium">:</span>
                <span className="ml-1">{newcomment}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-500 text-md mt-3">
          <Moment fromNow>{allPost?.createdAt}</Moment>
        </p>
        <div className="flex mt-4 gap-3 items-center">
          <div>
            <Avatar img={allPost.userId?.profile_img} />
          </div>
          <div className="flex border grow rounded-full items-center">
            <textarea
              className="block w-full p-3 px-4 overflow-hidden h-12 rounded-full"
              placeholder="Leave a comment"
              name="comment"
              onChange={handleChange}
              value={comment}
            />
            <button
              type="button"
              onClick={() => {
                handleComment(allPost?._id);
              }}
              className="text-blue-600 px-5"
            >
              post
            </button>
          </div>
        </div>
      </Card>
      <CommentsModal
        visible={showModal}
        onClose={handleClose}
        comments={allComment}
      />
    </div>
  );
}
export default PostCard;
