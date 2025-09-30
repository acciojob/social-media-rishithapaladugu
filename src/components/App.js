import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Landing from "./Landing";
import Users from "./Users";
import Notifications from "./Notifications";
import PostDetails from "./PostDetails";
import PostForm from "./PostForm";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", author: "Alice", content: "Hello world!", reactions: [0, 0, 0, 0, 0] },
    { id: 2, title: "Second Post", author: "Bob", content: "React is awesome!", reactions: [0, 0, 0, 0, 0] },
  ]);

  const [notifications, setNotifications] = useState([]);

  const addPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: Date.now(), reactions: [0, 0, 0, 0, 0] }]);
  };

  const updatePost = (id, updatedPost) => {
    setPosts(posts.map(p => (p.id === id ? { ...p, ...updatedPost } : p)));
  };

  return (
    <div className="App">
      <h1>GenZ</h1>
      <nav>
        <Link to="/">Posts</Link> | <Link to="/users">Users</Link> | <Link to="/notifications">Notifications</Link> | <Link to="/create">Create Post</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Landing posts={posts} updatePost={updatePost} />} />
        <Route path="/users" element={<Users posts={posts} />} />
        <Route path="/notifications" element={<Notifications notifications={notifications} setNotifications={setNotifications} />} />
        <Route path="/create" element={<PostForm addPost={addPost} />} />
        <Route path="/posts/:id" element={<PostDetails posts={posts} updatePost={updatePost} />} />
      </Routes>
    </div>
  );
}

export default App;
