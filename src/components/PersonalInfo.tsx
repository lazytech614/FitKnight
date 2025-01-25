import { Card, CardContent } from "./Card";
import Image from "next/image";

type PersonalInfoProps = {
  name: string;
  profilePicture: string;
  about: string;
  fitnessGoal: string;
};

export const PersonalInfo: React.FC<PersonalInfoProps> = ({ name, profilePicture, about, fitnessGoal }) => {
  return (
    <Card className="w-full p-4 rounded-xl shadow-md bg-white">
      <div className="flex items-center">
        <img 
          src={`https://is2-ssl.mzstatic.com/image/thumb/Purple123/v4/95/bf/04/95bf0492-d988-15a1-2a2a-b176eb887a17/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg`} 
          alt={`${name}'s profile`} 
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
        <div>
          <h2 className="text-xl font-semibold text-green-500">{name}</h2>
          <p className="text-sm text-gray-600">{about}</p>
          <p className="text-sm text-gray-600 font-semibold mt-2">Fitness Goal: {fitnessGoal}</p>
        </div>
      </div>
    </Card>
  );
};
