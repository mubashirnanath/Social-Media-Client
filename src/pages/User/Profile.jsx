import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { GetPosts } from '../../api/User/PostRequest';
import Layout from '../../components/User/layout/Layout';
import HeadPart from '../../components/User/profile/HeadPart';
import Info from '../../components/User/profile/Info';
import ProfilePosts from '../../components/User/profile/ProfilePosts';

function UserProfile() {
  const [post, setPost] = useState([]);
  const user = useSelector((state) => state.user);
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const getPost = async (Id) => {
      const posts = await GetPosts(Id);
      setPost(posts);
    };
    getPost(userId);
  }, []);
  return (
    <Layout>
      <div className="flex">
        <div className="md:w-8/12 mt-2 w-full">
          <div className="ml-1">
            <HeadPart user={user} post={post?.data} />
          </div>
          <div className="flex">
            <div className="ml-1">
              <ProfilePosts post={post?.data} />
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-4/12">
          <Info user={user} />
        </div>
      </div>
    </Layout>
  );
}

export default UserProfile;
