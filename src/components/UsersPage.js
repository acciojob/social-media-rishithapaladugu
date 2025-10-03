import React from 'react'

export default function UsersPage({ state }){
  const { users, posts } = state
  return (
  <section>
    <h2>Users</h2>
    <ul>
      {users.map((u, idx) => (
      <li key={u.id} data-user-index={idx}>{u.name}</li>
      ))}
    </ul>
  <UserPosts users={users} posts={posts} />
</section>
  )
}

function UserPosts({ users, posts }){
  const [selected, setSelected] = React.useState(null)
  return (
    <div>
    <ul>
      {users.map((u, i) => (
      <li key={u.id} onClick={()=>setSelected(u.id)}>{u.name}</li>
      ))}
    </ul>


    <div className="user-posts">
      {selected ? posts.filter(p=>p.authorId===selected).map(p=> (
      <article key={p.id} className="post">
      <h4>{p.title}</h4>
      <p>{p.content}</p>
      </article>
      )) : <div>No user selected</div>}
      </div>
    </div>
)
}
