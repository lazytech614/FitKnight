// components/OrganizerHomePage.tsx
import Link from "next/link";
import { Button } from "@/components/Button";

const OrganizerHomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      {/* <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, Group Organizer</h1> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Manage Fitness Groups */}
        <div className="flex justify-center items-center">
          <Link
            href="/organizer/manage-groups"
            className="w-full max-w-xs bg-green-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 transition text-center"
          >
            Manage Fitness Groups
          </Link>
        </div>

        {/* View Join Requests */}
        <div className="flex justify-center items-center">
          <Link
            href="/organizer/group-requests"
            className="w-full max-w-xs bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition text-center"
          >
            View Join Requests
          </Link>
        </div>

        {/* Search for Workout Buddies */}
        <div className="flex justify-center items-center">
          <Link
            href="/organizer/search-buddies"
            className="w-full max-w-xs bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring focus:ring-yellow-300 transition text-center"
          >
            Search for Workout Buddies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrganizerHomePage;