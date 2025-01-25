import { NotificationItem } from "./NotificationItem";

const notifications = [
  {
    title: "New Buddy Match!",
    message: "You've matched with John for morning workouts.",
    timestamp: "10 mins ago",
    isUnread: true,
  },
  {
    title: "Group Join Request Approved",
    message: "Your request to join 'Morning Yoga Group' has been approved.",
    timestamp: "2 hours ago",
  },
  {
    title: "New Message",
    message: "Anna sent you a message in 'Weekend Running Group'.",
    timestamp: "3 hours ago",
    isUnread: true,
  },
  {
    title: "New Group Fit",
    message: "Check out 'Strength Training Buddies' that matches your preferences.",
    timestamp: "Yesterday",
  },
];

export const NotificationFeed: React.FC = () => {
  return (
    <section className="py-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Notifications</h2>
      <div className="space-y-4">
        {notifications.map((notification, index) => (
          <NotificationItem
            key={index}
            title={notification.title}
            message={notification.message}
            timestamp={notification.timestamp}
            isUnread={notification.isUnread}
          />
        ))}
      </div>
    </section>
  );
};
