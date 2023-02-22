/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import OutsideClickHandler from 'react-outside-click-handler';
import { useSelector } from 'react-redux';
import { DebounceInput } from 'react-debounce-input';
import Avatar from './Avatar';
import QrCodeModal from './QrCodeModal';
import { getLink } from '../../../api/User/userRequest';
import { searchUsers } from '../../../api/User/searchRequest';

function Navbar() {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const [search, setSearch] = useState(null);
  const [users, setUsers] = useState([]);
  const [url, setUrl] = useState('');

  useEffect(() => {
    const searchUser = async () => {
      if (search) {
        const { value } = search;
        const response = await searchUsers(value);
        setUsers(response);
      }
    };
    searchUser();
  }, [search]);
  const handleGetLink = async () => {
    setShowQr(true);
    const link = await getLink();
    setUrl(link);
  };
  const handleOnClose = () => {
    setShowQr(false);
  };
  return (
    <>
      {/* navbar */}
      <div className=" sticky top-0 z-50 bg-white w-full flex mb-4 rounded-md items-center justify-between  py-4 h-50  border-l-neutral-800  p-8">
        {/* left part */}
        <div className=" flex items-center gap-x-40">
          <Link to="/">
            <span className="font-bold text-lg md:text-2xl text-cyan-900">
              CONNECT WITH
            </span>
          </Link>
          <div className="hidden md:block items-cente gap-x-4 border border-neutral-300 p-2 rounded-lg">
            <SearchOutlinedIcon />
            <DebounceInput
              minLength={2}
              debounceTimeout={300}
              placeholder="search...."
              onChange={(event) => setSearch({ value: event.target.value })}
            />
          </div>
        </div>
        {/* right part */}
        <div className="flex items-center gap-x-4">
          <button type="button" onClick={() => setDropdownOpen(true)}>
            <div className="flex items-center gap-x-5 w-9 bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="36"
                height="36"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M3.34 17a10.018 10.018 0 0 1-.978-2.326 3 3 0 0 0 .002-5.347A9.99 9.99 0 0 1 4.865 4.99a3 3 0 0 0 4.631-2.674 9.99 9.99 0 0 1 5.007.002 3 3 0 0 0 4.632 2.672c.579.59 1.093 1.261 1.525 2.01.433.749.757 1.53.978 2.326a3 3 0 0 0-.002 5.347 9.99 9.99 0 0 1-2.501 4.337 3 3 0 0 0-4.631 2.674 9.99 9.99 0 0 1-5.007-.002 3 3 0 0 0-4.632-2.672A10.018 10.018 0 0 1 3.34 17zm5.66.196a4.993 4.993 0 0 1 2.25 2.77c.499.047 1 .048 1.499.001A4.993 4.993 0 0 1 15 17.197a4.993 4.993 0 0 1 3.525-.565c.29-.408.54-.843.748-1.298A4.993 4.993 0 0 1 18 12c0-1.26.47-2.437 1.273-3.334a8.126 8.126 0 0 0-.75-1.298A4.993 4.993 0 0 1 15 6.804a4.993 4.993 0 0 1-2.25-2.77c-.499-.047-1-.048-1.499-.001A4.993 4.993 0 0 1 9 6.803a4.993 4.993 0 0 1-3.525.565 7.99 7.99 0 0 0-.748 1.298A4.993 4.993 0 0 1 6 12c0 1.26-.47 2.437-1.273 3.334a8.126 8.126 0 0 0 .75 1.298A4.993 4.993 0 0 1 9 17.196zM12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>
            </div>
          </button>
          <OutsideClickHandler
            onOutsideClick={() => {
              setDropdownOpen(false);
            }}
          >
            <div className="relative">
              {dropdownOpen && (
                <div className="absolute right-6 border border-gray-300 bg-white shadow-md p-3 rounded-md w-52 mt-10">
                  <button
                    type="button"
                    onClick={handleGetLink}
                    className=" text-center w-full flex gap-1 py-2 my-2 hover:bg-gray-200 px-2 rounded-md transition-all "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M16 17v-1h-3v-3h3v2h2v2h-1v2h-2v2h-2v-3h2v-1h1zm5 4h-4v-2h2v-2h2v4zM3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm13-2h3v2h-3v-2zM6 6h2v2H6V6zm0 10h2v2H6v-2zM16 6h2v2h-2V6z" />
                    </svg>
                    Get link
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/change-password')}
                    className="w-full flex gap-1 py-2 my-2 hover:bg-gray-200 px-2 rounded-md transition-all "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path d="M6 8V7a6 6 0 1 1 12 0v1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h2zm13 2H5v10h14V10zm-8 5.732a2 2 0 1 1 2 0V18h-2v-2.268zM8 8h8V7a4 4 0 1 0-8 0v1z" />
                    </svg>
                    Change Password
                  </button>
                </div>
              )}
            </div>
          </OutsideClickHandler>
          <Link to="/profile">
            <div className="">
              <Avatar img={user?.profile_img} />
            </div>
          </Link>
        </div>
        <QrCodeModal visible={showQr} onClose={handleOnClose} link={url} />
      </div>
      {users.length !== 0 ? (
        <div className="w-full flex justify-center fixed top-9">
          <div className="absolute w-96 z-50 border border-gray-300 bg-white shadow-md p-3 rounded-md  mt-10">
            {users?.map((people) => (
              <Link
                to={
                  people?._id !== userId
                    ? `/user-profile/${people?._id}`
                    : '/profile'
                }
              >
                <div className="flex gap-2 items-center my-3">
                  <Avatar img={people?.profile_img} />
                  <div>
                    <p className="font-semibold">{people?.username}</p>
                  </div>
                  <div className="flex ml-auto text-main gap-2">
                    <p>{people?.followers.length}</p>
                    <p>followers</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
