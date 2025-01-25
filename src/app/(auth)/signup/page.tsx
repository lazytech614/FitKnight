"use client"
import { useState } from 'react';
import { Card, CardContent } from "@/components/Card";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import Dropdown from '@/components/Dropdown'; // Importing the generic Dropdown component
import AvailabilityTimePicker from '@/components/AvailabilityPicker';

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [preference, setPreference] = useState<'buddy' | 'group'>('buddy');
  const [fitnessGoal, setFitnessGoal] = useState('');
  const [workoutPreference, setWorkoutPreference] = useState<string[]>([]);
  const [availability, setAvailability] = useState('');

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Handle signup logic here (password validation, file upload, etc.)
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePicture(e.target.files[0]);
    }
  };

  const handleWorkoutPreferenceChange = (value: string) => {
    if (workoutPreference.includes(value)) {
      setWorkoutPreference(workoutPreference.filter((pref) => pref !== value));
    } else {
      setWorkoutPreference([...workoutPreference, value]);
    }
  };

  // Fitness goal options for the generic dropdown
  const fitnessGoalOptions = [
    'Lose weight',
    'Build muscle',
    'Increase stamina',
    'Improve flexibility',
    'Boost endurance'
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[80%] md:w-full max-w-md p-6 shadow-lg rounded-2xl bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <CardContent>
          <form onSubmit={handleSignup} className="space-y-4">
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Enter your username"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-300"
              />
            </div>

            {/* Profile Picture Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
              <Input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="w-full mt-1 p-2 border border-gray-300 rounded-lg"
              />
            </div>

            {/* Fitness Goal Dropdown */}
            <Dropdown
              label="Fitness Goal"
              value={fitnessGoal}
              options={fitnessGoalOptions}
              onChange={setFitnessGoal}
            />

            {/* Workout Preference */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Workout Preference</label>
              <div className="space-y-2 mt-1 flex gap-2">
                <label className="flex items-center space-x-2 w-1/3">
                  <Input
                    type="checkbox"
                    value="gym"
                    checked={workoutPreference.includes('gym')}
                    onChange={() => handleWorkoutPreferenceChange('gym')}
                    className="w-fit"
                  />
                  <span>Gym</span>
                </label>
                <label className="flex items-center space-x-2 w-1/3">
                  <Input
                    type="checkbox"
                    value="yoga"
                    checked={workoutPreference.includes('yoga')}
                    onChange={() => handleWorkoutPreferenceChange('yoga')}
                    className="w-fit"
                  />
                  <span>Yoga</span>
                </label>
                <label className="flex items-center space-x-2 w-1/3">
                  <Input
                    type="checkbox"
                    value="running"
                    checked={workoutPreference.includes('running')}
                    onChange={() => handleWorkoutPreferenceChange('running')}
                    className="w-fit"
                  />
                  <span>Running</span>
                </label>
              </div>
            </div>

            {/* Availability */}
            <AvailabilityTimePicker value={availability} onChange={setAvailability} />

            {/* Preference: Workout Buddy or Fitness Group */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Preference</label>
              <div className="flex items-center space-x-4 mt-1">
                <label className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="preference"
                    value="buddy"
                    checked={preference === 'buddy'}
                    onChange={() => setPreference('buddy')}
                    className="w-fit"
                  />
                  <span>Find a Workout Buddy</span>
                </label>
                <label className="flex items-center space-x-2">
                  <Input
                    type="radio"
                    name="preference"
                    value="group"
                    checked={preference === 'group'}
                    onChange={() => setPreference('group')}
                    className="w-fit"
                  />
                  <span>Create a Fitness Group</span>
                </label>
              </div>
            </div>

            {/* Signup Button */}
            <Button type="submit" className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300 transition">
              Sign Up
            </Button>
          </form>
        </CardContent>

        {/* Links to Login */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">Already have an account? <a href="/login" className="text-green-500 hover:underline">Login</a></p>
        </div>
      </Card>
    </div>
  );
}
