import React from 'react';
import { Navigate } from 'react-router-dom';

function PublicAdminRoute({ props }) {
  if (localStorage.getItem('token')) {
    return <Navigate to="/admin" />;
  }
  return props.children;
}

export default PublicAdminRoute;
