import React from 'react';
import Layout from '../../components/User/layout/Layout';
import Card from '../../components/User/home/Card';
import MessageContent from '../../components/User/chat/MessageContent';
import MessageHead from '../../components/User/chat/MessageHead';

function Chat() {
  return (
    <div>
      <div>
        <Layout>
          <Card>
            <MessageHead />
            <MessageContent />
          </Card>
        </Layout>
      </div>
    </div>
  );
}

export default Chat;
