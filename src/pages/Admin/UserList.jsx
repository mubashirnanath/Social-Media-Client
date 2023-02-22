import React, { useEffect, useState } from 'react';
import UserLists from '../../components/Admin/userList/UserLists';
import Layout from '../../components/Admin/layout/Layout';
import { getAllUsers } from '../../api/User/userRequest';

function UserList() {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const users = await getAllUsers();
      setUsers(users);
    };
    getUsers();
  }, []);

  return (
    <Layout>
      <div>
        <UserLists users={user} />
      </div>
    </Layout>
  );
}

export default UserList;
