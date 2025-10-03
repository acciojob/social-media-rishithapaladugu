import React, { useState } from 'react'

export default function CreatePostForm({ users, onSubmit }){
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState(users[0]?.id || '')
  const [content, setContent] = useState('')
  function handle(e){
    e.preventDefault()
    if(!title || !author) return
    onSubmit({ title, authorId: author, content })
    setTitle('')
    setContent('')
    setAuthor(users[0]?.id)
}
return (
  <form onSubmit={handle} aria-label="create-post-form">
    <div>
      <label>Title</label>
      <input id="postTitle" value={title} onChange={e=>setTitle(e.target.value)} />
    </div>
    <div>
      <label>Author</label>
      <select id="postAuthor" value={author} onChange={e=>setAuthor(e.target.value)}>
        {users.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
      </select>
    </div>
    <div>
      <label>Content</label>
      <textarea id="postContent" value={content} onChange={e=>setContent(e.target.value)} />
    </div>
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
)
}
