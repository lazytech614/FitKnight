// pages/HomePage.tsx
import { FC } from 'react';
import { WorkoutBuddiesList } from "@/components/WorkoutBuddiesList";
import { FitnessGroupsList } from "@/components/FitnessGroupList";

const HomePage: FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-green-500 mb-8">Welcome to FitApp!</h2>

        {/* Workout Buddies Section */}
        <WorkoutBuddiesList />

        {/* Fitness Groups Section */}
        <FitnessGroupsList />
      </div>
    </div>
  );
}

export default HomePage;
