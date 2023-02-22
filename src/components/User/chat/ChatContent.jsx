/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userChats } from '../../../api/User/chatRequest';
import Conversations from './Conversations';

function ChatContent() {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const getChats = async () => {
      const { data } = await userChats(userId);
      setChats(data);
    };
    getChats();
  }, []);
  return (
    <div className="w-full overflow-y-scroll">
      <div className="grid  max-h-screen cursor-pointer">
        {chats?.map((chat) => (
          <div
            onClick={() => {
              navigate('/chat', {
                state: {
                  id: userId,
                  chats: chat,
                },
              });
            }}
          >
            <Conversations datas={chat} currentUserId={userId} key={chat._id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatContent;
