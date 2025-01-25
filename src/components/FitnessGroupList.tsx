// components/FitnessGroupsList.tsx
import Link from "next/link";
import { Card } from "./Card";

const fitnessGroups = [
  { name: "Morning Yoga Group", description: "Join us for daily morning yoga sessions.", id: 1 },
  { name: "Weekend Running Group", description: "Join us for weekend runs in the park.", id: 2 },
  { name: "Weightlifting Buddies", description: "Find a workout partner for weightlifting.", id: 3 }
];

export const FitnessGroupsList = () => {
  return (
    <section className="mt-12">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Available Fitness Groups</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fitnessGroups.map((group) => (
          <Card key={group.id} className="shadow-md rounded-2xl p-4 bg-white">
            <h4 className="text-lg font-semibold text-green-500">{group.name}</h4>
            <p className="text-sm text-gray-600">{group.description}</p>
            
            {/* Use button inside Link without <a> */}
            <div className="w-full mt-4">
              <Link href={`/group/${group.id}`}>
                <button className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 transition">
                  Join Group
                </button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
