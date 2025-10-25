
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import UsersPage from './UsersPage';
import NotificationsPage from './NotificationsPage';
import CreatePost from './CreatePost';
import EditPost from './EditPost';

const App = () => {
  return (
    <Router>
      <div>
        {/* Do not remove the main div */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:postId" element={<EditPost post={{ title: '', content: '' }} onSave={() => {}} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
