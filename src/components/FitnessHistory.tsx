import { Card } from "./Card";

type FitnessHistoryProps = {
  activities: { title: string; count: number }[];
};

export const FitnessHistory: React.FC<FitnessHistoryProps> = ({ activities }) => {
  return (
    <Card className="w-full p-4 rounded-xl shadow-md bg-white">
      <h3 className="text-xl font-semibold text-green-500 mb-4">Fitness History</h3>
      <ul className="space-y-2">
        {activities.map((activity, index) => (
          <li key={index} className="flex justify-between items-center">
            <span className="text-gray-600">{activity.title}</span>
            <span className="text-gray-800 font-semibold">{activity.count}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};
