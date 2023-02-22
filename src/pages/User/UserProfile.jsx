import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDetails } from '../../api/User/userRequest';
import Layout from '../../components/User/layout/Layout';
import Info from '../../components/User/profile/Info';
import ProfilePosts from '../../components/User/profile/ProfilePosts';
import UserHeadPart from '../../components/User/profile/UserHeadPart';

function Profile() {
  const [datas, setDatas] = useState([]);
  const [posts, setPosts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const userProf = async (userId) => {
      const { userData, userPosts } = await getUserDetails(userId);
      setDatas(userData);
      setPosts(userPosts);
    };
    userProf(id);
  }, [id]);
  return (
    <Layout>
      <div className="flex">
        <div className="w-full md:w-8/12 mt-2">
          <div className="ml-1">
            <UserHeadPart post={posts} user={datas} />
          </div>
          <div className="flex">
            <div className="ml-1">
              <ProfilePosts post={posts} />
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-4/12">
          <Info user={datas} />
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
