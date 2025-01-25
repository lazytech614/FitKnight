import { Card } from "./Card";

type GroupGoalsProps = {
  activities: { name: string; description: string }[];
};

export const GroupGoals: React.FC<GroupGoalsProps> = ({ activities }) => {
  return (
    <Card className="w-full p-4 rounded-xl shadow-md bg-white">
      <h3 className="text-xl font-semibold text-green-500 mb-4">Group Activities & Goals</h3>
      <ul className="space-y-2">
        {activities.map((activity, index) => (
          <li key={index} className="text-gray-800">
            <h4 className="font-semibold">{activity.name}</h4>
            <p className="text-sm text-gray-600">{activity.description}</p>
          </li>
        ))}
      </ul>
    </Card>
  );
};
