/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { io } from 'socket.io-client';
import Moment from 'react-moment';
import { addMessage, getMessages } from '../../../api/User/messageRequest';

function MessageContent() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);
  const scroll = useRef();
  const socket = useRef();
  const { state } = useLocation();
  const currentUser = state.id;
  const chat = state?.chats;
  // sending message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit('send-message', sendMessage);
    }
  }, [sendMessage]);

  useEffect(() => {
    socket.current = io(process.env.REACT_APP_SOCKET_URL);
    socket.current.emit('new-user-add', currentUser);
    socket.current.on('get-users', (users) => {
      setOnlineUsers(users);
    });
  }, [currentUser]);

  // receive message from socket server
  useEffect(() => {
    socket.current.on('receive-message', (data) => {
      setReceiveMessage(data);
    });
  }, []);

  useEffect(() => {
    if (receiveMessage !== null && receiveMessage?.chatId === chat?._id) {
      setMessages([...messages, receiveMessage]);
    }
  }, [receiveMessage]);
  // fetching data for messages
  useEffect(() => {
    const fetchMessages = async () => {
      const { data } = await getMessages(chat?._id);
      setMessages(data);
    };
    if (chat !== null) fetchMessages();
  }, [chat]);
  const handleChange = (Message) => {
    setNewMessage(Message.target.value);
  };
  const handleSend = async (e) => {
    e.preventDefault();
    setNewMessage('');
    const message = {
      senderId: currentUser,
      text: newMessage,
      chatId: chat._id,
    };

    // send message to database
    if (newMessage !== '') {
      const { data } = await addMessage(message);
      setMessages([...messages, data]);
      setNewMessage('');
    }

    // send message to socket
    const receiverId = chat.members.find((id) => id !== currentUser);
    setSendMessage({ ...message, receiverId });
  };

  // Always scroll to the last message
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="border-2 border-b-0 md:border-b-2 px-5 relative mb-3">
      <div className="h-96 max-h-96 mb-10">
        <div ref={scroll} className="h-80 overflow-y-scroll">
          {messages?.map((message) => (
            <div className="">
              {message?.senderId !== currentUser ? (
                <div className="flex gap-3 mt-3 mb-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm shadow-gray-500 cursor-pointer">
                    <img
                      src="https://i.pinimg.com/originals/31/44/7e/31447e25b7bc3429f83520350ed13c15.jpg"
                      alt="avatars"
                    />
                  </div>
                  <div>
                    <div className="py-2 rounded-lg inline-block rounded-bl-none px-3 bg-green-100 max-w-xl">
                      <p>{message?.text}</p>
                    </div>
                    <p className="text-xs text-blue-600 text-end font-thin">
                      9:00pm
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex gap-3 mt-3 justify-end">
                  <div>
                    <div className="py-2 rounded-lg inline-block rounded-br-none px-3 bg-yellow-50 max-w-xl">
                      <p>{message?.text}</p>
                    </div>
                    <p className="text-xs text-black text-end font-thin">
                      {/* <Moment fromNow>{message.createdAt}</Moment> */}
                      <Moment
                        date={message?.createdAt}
                        format="hh:mm"
                        trim
                        durationFromNow
                      />
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm shadow-gray-500 cursor-pointer">
                    <img
                      src="https://wallpaperaccess.com/full/2213424.jpg"
                      alt="avatars"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className=" absolute inset-x-0 bottom-0 py-2 px-2">
        <div className="flex gap-2">
          <div className="flex w-full border-2 rounded-2xl px-4 py-2 ">
            {/* <span>
              <InputEmoji value={newMessage} onChange={handleChange} />
            </span> */}
            <input
              className="w-full z-0 outline-none px-2"
              placeholder="Text message..."
              onChange={handleChange}
              type="text"
              value={newMessage}
            />
          </div>
          <div className="">
            <button
              type="button"
              className="bg-main text-white px-4 py-3 rounded-full"
              onClick={handleSend}
            >
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                    fill="rgba(255,255,255,1)"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageContent;
