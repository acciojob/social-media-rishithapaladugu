import React, { useState, useEffect } from 'react'
import PostDetails from './PostDetails'
import { Routes, Route, useNavigate } from "react-router-dom"
import PostsPage from "./PostsPage"
import UsersPage from "./UsersPage"
import NotificationsPage from "./NotificationsPage"
import { loadData, saveData, makeId } from './data'

export default function App(){
const [state, setState] = useState(() => loadData())
const navigate = useNavigate()
useEffect(()=>{ saveData(state) }, [state])

function createPost({title, authorId, content}){
  const newPost = { id: makeId('p'), title, authorId, content, reactions: [0,0,0,0,0] }
  setState(s => ({ ...s, posts: [ ...s.posts.slice(0,1), newPost, ...s.posts.slice(1) ] }))
  navigate('/')
}

function updatePost(updated){
  setState(s => ({ ...s, posts: s.posts.map(p => p.id === updated.id ? { ...p, ...updated } : p) }))
}
function reactToPost(postId, reactionIndex) {
    setState(s => ({
      ...s,
      posts: s.posts.map(p => 
        p.id === postId 
          ? { 
              ...p, 
              reactions: p.reactions.map((r, i) => i === reactionIndex ? (i === 4 ? 0 : r + 1) : r) 
            } 
          : p
      )
    }))
  }

return (
<div className="App">
  <h1>GenZ</h1>
  <nav>
  <a href="/" onClick={(e)=>{ e.preventDefault(); navigate('/') }}>Posts</a>
  <a href="/users" onClick={(e)=>{ e.preventDefault(); navigate('/users') }}>Users</a>
  <a href="/notifications" onClick={(e)=>{ e.preventDefault(); navigate('/notifications') }}>Notifications</a>
  </nav>
  <Routes>
    <Route path="/" element={<PostsPage state={state} createPost={createPost} reactToPost={reactToPost} />} />
    <Route path="/users" element={<UsersPage state={state} />} />
    <Route path="/notifications" element={<NotificationsPage />} />
    <Route path="/posts/:postId" element={<PostDetails state={state} updatePost={updatePost} reactToPost={reactToPost} />} />
  </Routes>
</div>
)
}
