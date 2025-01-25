// components/WorkoutBuddiesList.tsx
import { Card } from "@/components/Card";
import { Button } from "@/components/Button";

const workoutBuddies = [
  { name: "John Doe", location: "5 km away", goal: "Build muscle", available: "Morning" },
  { name: "Jane Smith", location: "8 km away", goal: "Lose weight", available: "Evening" },
  { name: "Mark Lee", location: "2 km away", goal: "Increase stamina", available: "Weekends" }
];

export const WorkoutBuddiesList = () => {
  return (
    <section>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Recommended Workout Buddies</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {workoutBuddies.map((buddy, index) => (
          <Card key={index} className="shadow-md rounded-2xl p-4 bg-white">
            <h4 className="text-lg font-semibold text-green-500">{buddy.name}</h4>
            <p className="text-sm text-gray-600">Location: {buddy.location}</p>
            <p className="text-sm text-gray-600">Goal: {buddy.goal}</p>
            <p className="text-sm text-gray-600">Available: {buddy.available}</p>
            <Button className="w-full mt-4 bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 transition">
              Message {buddy.name}
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
}
