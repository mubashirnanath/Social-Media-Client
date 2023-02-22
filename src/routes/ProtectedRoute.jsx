/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { getUserDetails } from '../api/User/userRequest';

function ProtectedRoute(props) {
  const user = useSelector((state) => state.user);
  const userId = localStorage.getItem('userId');
  const dispatch = useDispatch();
  if (!user && userId) {
    const getData = async () => {
      const response = await getUserDetails(userId);
      dispatch(setUser(response));
    };
    getData();
  }
  if (localStorage.getItem('token')) {
    return props.children;
  }
  return <Navigate to="/login" />;
}

export default ProtectedRoute;
