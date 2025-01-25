"use client";
import { useState } from "react";
import { Card } from "./Card";
import { Button } from "./Button";

const fitnessGroups = [
  {
    id: 1,
    name: "Morning Yoga Group",
    description: "Daily morning yoga sessions.",
    schedule: "Mon - Fri, 6:00 AM - 7:00 AM",
  },
  {
    id: 2,
    name: "Weekend Running Group",
    description: "Weekend runs in the park.",
    schedule: "Sat - Sun, 7:00 AM - 8:00 AM",
  },
];

export const ManageFitnessGroupsList = () => {
  const [groups, setGroups] = useState(fitnessGroups);

  const handleEditGroup = (groupId: number) => {
    // Logic to edit group details (open modal, etc.)
  };

  const handleEditSchedule = (groupId: number) => {
    // Logic to edit schedule (open modal, etc.)
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {groups.map((group) => (
        <Card key={group.id} className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-green-500">{group.name}</h3>
          <p className="text-sm text-gray-600 mb-4">{group.description}</p>
          <p className="text-sm font-medium mb-2">Schedule: {group.schedule}</p>
          <div className="flex gap-2">
            <Button
              className="bg-blue-500 text-white py-2 px-4 rounded"
              onClick={() => handleEditGroup(group.id)}
            >
              Edit Group
            </Button>
            <Button
              className="bg-yellow-500 text-white py-2 px-4 rounded"
              onClick={() => handleEditSchedule(group.id)}
            >
              Edit Schedule
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};
