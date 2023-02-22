/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';
import { GoogleLogin } from '@react-oauth/google';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { googleLogin } from '../../../api/User/AuthRequest';
import { setUser } from '../../../redux/userSlice';

function Google() {
  const [users, setUsers] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (users) {
      const googleSignIn = async () => {
        const data = {
          username: users?.family_name,
          email: users?.email,
          profile_img: users?.picture,
        };
        const response = await googleLogin(data);
        if (response.status) {
          dispatch(setUser(response));
          navigate('/');
        }
      };
      googleSignIn();
    }
  }, [users]);

  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        const decoded = jwtDecode(credentialResponse.credential);
        setUsers(decoded);
      }}
    />
  );
}

export default Google;
