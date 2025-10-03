import React from 'react'
import { useNavigate } from 'react-router-dom'


export default function PostCard({ post, users, reactToPost }){
  const navigate = useNavigate()
  const author = users.find(u=>u.id===post.authorId)
  return (
    <article className="post" data-id={post.id}>
      <h3 className="post-title">{post.title}</h3>
      <div className="post-author">{author?.name}</div>
      <p className="post-content">{post.content}</p>
  
      <div className="reactions">
        { [0,1,2,3,4].map(i => (
          <button key={i} onClick={() => reactToPost(post.id, i)}>
            {i<4 ? `React ${i+1} (${post.reactions[i]})` : `React ${i+1} (0)`}
          </button>
        ))}
      </div>
      <div style={{marginTop:8}}>
        <button className="button" onClick={()=>navigate(`/posts/${post.id}`)}>View</button>
      </div>
    </article>
  )
}
