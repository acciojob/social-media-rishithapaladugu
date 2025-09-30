import React from "react";
import { Link } from "react-router-dom";
import Post from "./Post";

function Landing({ posts, updatePost }) {
  return (
    <div className="posts-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} updatePost={updatePost} />
      ))}
    </div>
  );
}

export default Landing;
