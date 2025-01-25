import { NotificationFeed } from "@/components/NotificationFeed";

export default function GroupOrganizerNotificationPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Group Notifications</h1>
        <NotificationFeed />
      </div>
    </div>
  );
}
