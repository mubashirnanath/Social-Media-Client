import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../../components/Admin/login/Login';
import Dashboard from '../../pages/Admin/Dashboard';
import ReportedPosts from '../../pages/Admin/ReportedPosts';
import ReportedUsers from '../../pages/Admin/ReportedUsers';
import UserList from '../../pages/Admin/UserList';

function Admin() {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/dashboard" element={<Dashboard />} />
      <Route exact path="/user-list" element={<UserList />} />
      <Route exact path="/reported-users" element={<ReportedUsers />} />
      <Route exact path="/reported-posts" element={<ReportedPosts />} />
    </Routes>
  );
}

export default Admin;
