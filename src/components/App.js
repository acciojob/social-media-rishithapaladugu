

import React, { useState } from 'react';
import Tabs from './Tabs';
import PostForm from './PostForm';
import PostList from './PostList';
import Users from './Users';
import Notifications from './Notifications';
export default function App() {
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <div className="App"> {/* <-- Add this class */}
      <h1>GenZ</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'posts' && (
        <>
          <PostForm />
          <h2>Posts</h2>
          <PostList />
        </>
      )}
       <div className="tabs">
      <a href="#" onClick={() => setActiveTab('posts')}>Posts</a>
      <a href="#" onClick={() => setActiveTab('users')}>Users</a>
      <a href="#" onClick={() => setActiveTab('notifications')}>Notifications</a>
    </div>
      {activeTab === 'users' && <Users />}
      {activeTab === 'notifications' && <Notifications />}
    </div>
  );
}
