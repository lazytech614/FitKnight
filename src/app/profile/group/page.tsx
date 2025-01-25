import { GroupPersonalInfo } from "@/components/GroupPersonalInfo";
import { GroupGoals } from "@/components/GroupGoals";
import { ContactDetails } from "@/components/ContactDetails";

export default function GroupProfilePage() {
  const groupData = {
    organizerName: "Jane Smith",
    organizerProfilePicture: "/path/to/organizer-picture.jpg",
    activities: [
      { name: "Morning Yoga Sessions", description: "Daily yoga sessions for beginners and intermediates." },
      { name: "Weekend Park Runs", description: "Join us every weekend for group runs at the park." },
      { name: "Strength Training", description: "Weekly strength training sessions to build muscle." },
    ],
    phoneNumber: "987-654-3210",
    email: "janesmith@example.com",
    isPhoneVisible: true,
    isEmailVisible: true,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto space-y-12">
        {/* Group Organizer Information */}
        <GroupPersonalInfo
          organizerName={groupData.organizerName}
          organizerProfilePicture={groupData.organizerProfilePicture}
        />

        {/* Group Goals and Activities */}
        <GroupGoals activities={groupData.activities} />

        {/* Contact Details of the Organizer */}
        <ContactDetails
          phoneNumber={groupData.phoneNumber}
          email={groupData.email}
          isPhoneVisible={groupData.isPhoneVisible}
          isEmailVisible={groupData.isEmailVisible}
        />
      </div>
    </div>
  );
}
