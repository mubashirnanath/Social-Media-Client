/* eslint-disable react/react-in-jsx-scope */
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import Avatar from './Avatar';
import { editProfile, uploadProfile } from '../../../api/User/userRequest';

export default function Modal({ visible, onClose }) {
  const user = useSelector((state) => state.user);
  const {
    token,
    status,
    message,
    mobile,
    followers,
    following,
    verified,
    email,
    ...others
  } = user;
  const [data, setData] = useState(others);
  const [profile, setProfile] = useState('');
  const [cover, setCover] = useState('');
  const imageRefPro = useRef(null);
  const imageRefCov = useRef(null);
  // const navigate = useNavigate();
  const handleChange = async (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif\.webp)$/i;
  const handleProfile = async (e) => {
    const proImg = await e.target.files[0];
    if (!allowedExtensions.exec(proImg.name)) {
      toast.error('Choose Image');
    } else {
      setProfile(proImg);
    }
  };
  const handleCover = async (e) => {
    const coverImg = await e.target.files[0];
    if (!allowedExtensions.exec(coverImg.name)) {
      toast.error('Choose Image');
    } else {
      setCover(coverImg);
    }
  };
  const handleSubmit = async () => {
    if (JSON.stringify(others) === JSON.stringify(data)) {
      toast.success('No changes occured');
    } else {
      if (profile) {
        const formData = new FormData();
        formData.append('file', profile);
        formData.append(
          'upload_preset',
          process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
        );
        const imageUrl = await uploadProfile(formData);
        data.profile_img = imageUrl;
      }

      // uploading cover_image to cloudinary
      if (cover) {
        const formDatas = new FormData();
        formDatas.append('file', cover);
        formDatas.append(
          'upload_preset',
          process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
        );
        const coverUrl = await uploadProfile(formDatas);
        data.cover_img = coverUrl;
      }
      const response = await editProfile(data);
      if (response.data.status) {
        onClose();
      }
    }
    // uploading profile to cloudinary
  };
  return (
    <>
      {/* <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold
         uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline
         -none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button> */}
      {visible ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-auto mx-auto max-w-xl h-96 w-76">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-center p-5 text-center border-b border-solid border-slate-200 bg-main rounded-t">
                  <h3 className="text-3xl text-white justify-items-center text-center font-semibold">
                    Edit profile
                  </h3>
                  <button
                    type="button"
                    className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={onClose}
                  >
                    <span className="bg-transparent text-white  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 justify-self-end"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                {/* body */}
                <div className="relative p-6 flex-auto">
                  <div className="mt-2">
                    <div className="flex">
                      <h1 className="font-bold text-2xl">Profile photo</h1>
                      <button
                        type="button"
                        onClick={() => imageRefPro.current.click()}
                        className="text-lg text-blue-600 ml-auto"
                      >
                        edit
                      </button>
                      <input
                        type="file"
                        name="Profile_img"
                        onChange={handleProfile}
                        ref={imageRefPro}
                        hidden
                      />
                      <input
                        type="file"
                        name="cover_img"
                        onChange={handleCover}
                        ref={imageRefCov}
                        hidden
                      />
                    </div>
                    <div className="flex justify-center mt-2">
                      {profile ? (
                        <div className="w-28 rounded-full overflow-hidden">
                          <img src={URL.createObjectURL(profile)} alt="" />
                        </div>
                      ) : (
                        <Avatar img={data?.profile_img} />
                      )}
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex">
                      <h1 className="font-bold text-2xl">Conver photo</h1>
                      <button
                        type="button"
                        onClick={() => imageRefCov.current.click()}
                        className="text-lg text-blue-600 ml-auto"
                      >
                        edit
                      </button>
                    </div>
                    {cover ? (
                      <div className="h-36 overflow-hidden flex justify-center mt-4 items-center">
                        <img src={URL.createObjectURL(cover)} alt="" />
                      </div>
                    ) : (
                      <div className="h-36 overflow-hidden flex justify-center mt-4 items-center">
                        <img src={data?.cover_img} alt="" />
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <div className="flex">
                      <h1 className="font-bold text-2xl">Personal Details</h1>
                    </div>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="username"
                        value={data?.username}
                        onChange={handleChange}
                        placeholder="Full name..."
                        className="text-center w-full h-8 rounded-md bg-gray-100"
                      />
                    </div>
                    <div className="mt-2 gap-2 flex justify-between">
                      <input
                        type="date"
                        name="date"
                        value={data?.dob}
                        onChange={handleChange}
                        className="text-center w-1/2 h-8 rounded-md bg-gray-100"
                      />
                      <input
                        type="text"
                        placeholder="place . . ."
                        name="place"
                        onChange={handleChange}
                        value={data?.place}
                        className="text-center w-1/2 h-8 rounded-md bg-gray-100"
                      />
                    </div>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="bio"
                        value={data.bio}
                        onChange={handleChange}
                        className="text-center w-full h-8 rounded-md bg-gray-100"
                      />
                    </div>
                    <div className="mt-2">
                      <select
                        id="countries"
                        onChange={handleChange}
                        name="relationship"
                        className="text-center bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      >
                        <option value={data?.relationship} selected>
                          {data?.relationship}
                        </option>
                        <option value="single">Single</option>
                        <option value="In a Relationship">
                          In a Relationship
                        </option>
                        <option value="Enagaged">Engaged</option>
                        <option value="Married">Married</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </>
  );
}
