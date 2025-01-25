import { NotificationFeed } from "@/components/NotificationFeed";

export default function BuddyNotificationPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Notifications</h1>
        <NotificationFeed />
      </div>
    </div>
  );
}
