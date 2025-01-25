import { GroupJoinRequests } from "@/components/GroupJoinRequests";

export default function GroupRequestsPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Group Join Requests</h1>
      <GroupJoinRequests />
    </div>
  );
}
