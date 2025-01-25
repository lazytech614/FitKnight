import { ManageFitnessGroupsList } from "@/components/ManageFitnessGroupList";
import { Button } from "@/components/Button";

export default function ManageGroupsPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Manage Fitness Groups</h1>
      <ManageFitnessGroupsList />
    </div>
  );
}
