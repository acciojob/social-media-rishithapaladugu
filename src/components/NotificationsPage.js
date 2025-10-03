import React from 'react'


export default function NotificationsPage(){
  const [notifs, setNotifs] = React.useState([])
function refresh(){
  setNotifs([
  { id: 'n1', text: 'Alice liked your post' },
  { id: 'n2', text: 'Bob commented' }
  ])
}
return (
  <section>
    <h2>Notifications</h2>
    <button className="button" onClick={refresh}>Refresh Notifications</button>
   <section className="notificationsList">
    {notifs.map(n => <div key={n.id}>{n.text}</div>)}
    </section>
  </section>
)
}
