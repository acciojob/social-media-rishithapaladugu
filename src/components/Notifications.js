import React from "react";

function Notifications({ notifications, setNotifications }) {
  const handleRefresh = () => {
    setNotifications([
      { id: 1, message: "New comment on post 1" },
      { id: 2, message: "New like on post 2" },
    ]);
  };

  return (
    <div>
      <button className="button" onClick={handleRefresh}>Refresh Notifications</button>
      <section className="notificationsList">
        {notifications.map(n => <div key={n.id}>{n.message}</div>)}
      </section>
    </div>
  );
}

export default Notifications;
