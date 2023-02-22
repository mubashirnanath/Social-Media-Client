import React from 'react';
import Card from '../../components/User/home/Card';
import Layout from '../../components/User/layout/Layout';
import ChatContent from '../../components/User/chat/ChatContent';
import ChatHead from '../../components/User/chat/ChatHead';

function Message() {
  return (
    <Layout>
      <Card>
        <div className="bg-white rounded-t-lg border-heavy-metal-700 border-2 ">
          <ChatHead />
          <div className="max-h-screen mb-1">
            <ChatContent />
          </div>
        </div>
      </Card>
    </Layout>
  );
}

export default Message;
