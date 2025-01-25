import { Card } from "./Card";

type GroupPersonalInfoProps = {
  organizerName: string;
  organizerProfilePicture: string;
};

export const GroupPersonalInfo: React.FC<GroupPersonalInfoProps> = ({ organizerName, organizerProfilePicture }) => {
  return (
    <Card className="w-full p-4 rounded-xl shadow-md bg-white">
      <div className="flex items-center">
        <img
          src={`https://th.bing.com/th/id/OIP.kHOfzCfuLOZbWikFQYykhAHaHa?rs=1&pid=ImgDetMain`}
          alt={`${organizerName}'s profile`}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h2 className="text-xl font-semibold text-green-500">{organizerName}</h2>
          <p className="text-sm text-gray-600">Group Organizer</p>
        </div>
      </div>
    </Card>
  );
};
