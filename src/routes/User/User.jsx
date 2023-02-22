/* eslint-disable import/no-unresolved */
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

// public and protedcted Route
import PublicRoute from '../PublicRoute';
import ProtectedRoute from '../ProtectedRoute';

// pages
import Home from '../../pages/User/Home';
import Login from '../../components/User/login/Login';
import Register from '../../components/User/register/Register';
import UserProfile from '../../pages/User/UserProfile';
import Profile from '../../pages/User/Profile';
import Create from '../../pages/User/Create';
import Short from '../../pages/User/Short';
import { setUser } from '../../redux/userSlice';
import { getUserDetails } from '../../api/User/userRequest';
import Message from '../../pages/User/Message';
import Chat from '../../pages/User/Chat';
import ChangePassword from '../../pages/User/ChangePassword';

function User() {
  const user = useSelector((state) => state.user);
  const userId = localStorage.getItem('userId');
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user && userId) {
      const getData = async () => {
        const response = await getUserDetails(userId);
        dispatch(setUser(response.user));
      };
      getData();
    }
  }, [user, userId]);
  return (
    <>
      <Toaster position="top-center" />
      <Routes>
        <Route exact path="/login" element={(<PublicRoute><Login /></PublicRoute>)} />
        <Route exact path="/signup" element={(<PublicRoute><Register /></PublicRoute>)} />
        <Route exact path="/" element={(<ProtectedRoute><Home /></ProtectedRoute>)} />
        <Route exact path="/profile" element={(<ProtectedRoute><Profile /></ProtectedRoute>)} />
        <Route exact path="/user-profile/:id" element={(<ProtectedRoute><UserProfile /></ProtectedRoute>)} />
        <Route exact path="/create" element={(<ProtectedRoute><Create /></ProtectedRoute>)} />
        <Route exact path="/shorts" element={(<ProtectedRoute><Short /></ProtectedRoute>)} />
        <Route exact path="/message" element={(<ProtectedRoute><Message /></ProtectedRoute>)} />
        <Route exact path="/chat" element={(<ProtectedRoute><Chat /></ProtectedRoute>)} />
        <Route exact path="/change-password" element={(<ProtectedRoute><ChangePassword /></ProtectedRoute>)} />
      </Routes>
    </>
  );
}

export default User;
