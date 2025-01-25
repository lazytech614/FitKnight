import { Bell } from "lucide-react"; // Using Lucide icon for notification bell

type NotificationItemProps = {
  title: string;
  message: string;
  timestamp: string;
  isUnread?: boolean;
};

export const NotificationItem: React.FC<NotificationItemProps> = ({
  title,
  message,
  timestamp,
  isUnread = false,
}) => {
  return (
    <div className={`p-4 flex items-start gap-4 bg-white rounded-lg shadow-md ${isUnread ? 'border-l-4 border-green-500' : ''}`}>
      <Bell className="text-green-500 w-6 h-6" />
      <div>
        <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600">{message}</p>
        <span className="text-xs text-gray-400">{timestamp}</span>
      </div>
    </div>
  );
};
