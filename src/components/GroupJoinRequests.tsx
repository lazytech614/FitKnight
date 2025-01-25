
"use client";
import { useState } from "react";
import { Card } from "./Card";
import { Button } from "./Button";

const requests = [
  {
    id: 1,
    userName: "John Doe",
    groupName: "Morning Yoga Group",
    status: "Pending",
  },
  {
    id: 2,
    userName: "Jane Smith",
    groupName: "Weekend Running Group",
    status: "Pending",
  },
];

export const GroupJoinRequests = () => {
  const [joinRequests, setJoinRequests] = useState(requests);

  const handleApprove = (requestId: number) => {
    // Logic to approve the request
  };

  const handleDecline = (requestId: number) => {
    // Logic to decline the request
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      {joinRequests.map((request) => (
        <Card key={request.id} className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-green-500">
            {request.userName}
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Request to join: {request.groupName}
          </p>
          <div className="flex gap-2">
            <Button
              className="bg-green-500 text-white py-2 px-4 rounded"
              onClick={() => handleApprove(request.id)}
            >
              Approve
            </Button>
            <Button
              className="bg-red-500 text-white py-2 px-4 rounded"
              onClick={() => handleDecline(request.id)}
            >
              Decline
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};
