import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

export default function PostDetails({ state, updatePost, reactToPost }){
  const { postId } = useParams()
  const navigate = useNavigate()
  const post = state.posts.find(p=>p.id===postId)
  const [editing, setEditing] = React.useState(false)
  const [title, setTitle] = React.useState(post?.title || '')
  const [content, setContent] = React.useState(post?.content || '')
  if(!post) return <div>Post not found</div>

  function save(){
    updatePost({ id: post.id, title, content })
    setEditing(false)
    navigate('/')
  }
return (
<article className="post">
  {!editing ? (
  <>
    <h3>{post.title}</h3>
    <p>{post.content}</p>
    <div className="reactions">
      {post.reactions.map((r,i)=> (
      <button key={i} onClick={()=>reactToPost(post.id,i)}>{i<4?`React ${i+1} (${r})`:`React ${i+1} (0)`}</button>
      ))}
    </div>
    <div style={{marginTop:8}}>
      <button className="button" onClick={()=>setEditing(true)}>Edit</button>
    </div>
  </>
) : (
<div>
  <div>
    <label>Title</label>
    <input id="postTitle" value={title} onChange={e=>setTitle(e.target.value)} />
  </div>
  <div>
    <label>Content</label>
    <textarea id="postContent" value={content} onChange={e=>setContent(e.target.value)} />
  </div>
  <div>
    <button onClick={save}>Save</button>
  </div>
</div>
)}
</article>
)
}
