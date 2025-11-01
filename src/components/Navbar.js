// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Posts</Link>
      <Link to="/users">Users</Link>
      <Link to="/notifications">Notifications</Link>
      <Link to="/create-post">Create Post</Link>
    </nav>
  );
}

export default Navbar;
