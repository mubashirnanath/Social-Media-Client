/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
// import PostFormCard from "../../components/User/home/PostFormCard";
import { useSelector } from 'react-redux';
import PostCard from '../../components/User/home/PostCard';
import RightSidebar from '../../components/User/home/RightSidebar';
import Layout from '../../components/User/layout/Layout';
import { getAllPosts } from '../../api/User/PostRequest';
import { getAllUsers } from '../../api/User/userRequest';
import Card from '../../components/User/home/Card';

function Home() {
  const user = useSelector((state) => state.user);
  const [allPost, setAllPost] = useState([]);
  const [suggesion, setSuggesion] = useState([]);
  useEffect(() => {
    const Posts = async () => {
      const allPosts = await getAllPosts();
      setAllPost(allPosts);
      const users = await getAllUsers();
      setSuggesion(users);
    };

    Posts();
  }, []);
  const suggetions = suggesion.filter(
    (x) => !user?.following?.includes(x._id) && user?._id !== x?._id,
  );
  return (
    <Layout>
      <div className="flex gap-6">
        <div className="max-md:w-full w-6/12 grow">
          {/* <PostFormCard /> */}
          {allPost.data?.map((post) => (
            <PostCard allPost={post} />
          ))}
        </div>
        <div className="max-md:hidden w-3/12 grow">
          <div className="max-md:hidden p-4 py-1">
            <Card>
              <>
                <h2 className="text-gray-400 mb-3">People you may know</h2>
                {suggetions?.map((users) => (
                  <RightSidebar users={users} key={users._id} />
                ))}
              </>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
