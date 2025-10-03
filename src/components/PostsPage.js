import React from 'react'
import CreatePostForm from './CreatePostForm'
import PostCard from './PostCard'

export default function PostsPage({ state, createPost, reactToPost }) {
  return (
    <section>
      <div className="top-controls">Top Controls</div>

      <CreatePostForm users={state.users} onSubmit={createPost} />

      <div className="posts-list">
        {/* First child should be a placeholder/header */}
        <div className="posts-header">Posts header</div>

       {state.posts.map((p) => (
          <PostCard key={p.id} post={p} users={state.users} reactToPost={reactToPost} />
        ))}
      </div>
    </section>
  )
}
