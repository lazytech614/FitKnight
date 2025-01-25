import { Card } from "./Card";

type ContactDetailsProps = {
  phoneNumber?: string;
  email?: string;
  isPhoneVisible: boolean;
  isEmailVisible: boolean;
};

export const ContactDetails: React.FC<ContactDetailsProps> = ({ phoneNumber, email, isPhoneVisible, isEmailVisible }) => {
  return (
    <Card className="w-full p-4 rounded-xl shadow-md bg-white">
      <h3 className="text-xl font-semibold text-green-500 mb-4">Contact Details</h3>
      <div className="space-y-2">
        <div>
          <p className="text-gray-600">Phone:</p>
          {isPhoneVisible ? (
            <p className="text-gray-800">{phoneNumber}</p>
          ) : (
            <p className="text-gray-400">Hidden (Privacy Settings)</p>
          )}
        </div>
        <div>
          <p className="text-gray-600">Email:</p>
          {isEmailVisible ? (
            <p className="text-gray-800">{email}</p>
          ) : (
            <p className="text-gray-400">Hidden (Privacy Settings)</p>
          )}
        </div>
      </div>
    </Card>
  );
};
