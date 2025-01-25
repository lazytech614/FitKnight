import { PersonalInfo } from "@/components/PersonalInfo";
import { FitnessHistory } from "@/components/FitnessHistory";
import { ContactDetails } from "@/components/ContactDetails";

export default function BuddyProfilePage() {
  const buddyData = {
    name: "John Doe",
    profilePicture: "/path/to/profile-picture.jpg",
    about: "Fitness enthusiast. Love running and yoga.",
    fitnessGoal: "Increase stamina and build muscle",
    activities: [
      { title: "Runs Completed", count: 50 },
      { title: "Gym Visits", count: 120 },
      { title: "Yoga Sessions", count: 30 },
    ],
    phoneNumber: "123-456-7890",
    email: "johndoe@example.com",
    isPhoneVisible: true,
    isEmailVisible: false, // email is hidden due to privacy settings
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="container mx-auto space-y-12">
        {/* Personal Information Section */}
        <PersonalInfo
          name={buddyData.name}
          profilePicture={buddyData.profilePicture}
          about={buddyData.about}
          fitnessGoal={buddyData.fitnessGoal}
        />

        {/* Fitness History Section */}
        <FitnessHistory activities={buddyData.activities} />

        {/* Contact Details Section */}
        <ContactDetails
          phoneNumber={buddyData.phoneNumber}
          email={buddyData.email}
          isPhoneVisible={buddyData.isPhoneVisible}
          isEmailVisible={buddyData.isEmailVisible}
        />
      </div>
    </div>
  );
}
