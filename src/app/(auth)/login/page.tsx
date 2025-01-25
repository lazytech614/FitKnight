"use client"
import { useState } from 'react';
import { Card, CardContent } from "@/components/Card";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-[80%] md:w-full max-w-md p-6 shadow-lg rounded-2xl bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
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

            {/* Login Button */}
            <Button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 transition">
              Login
            </Button>
          </form>
        </CardContent>

        {/* Links to Sign Up / Forgot Password */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a></p>
          <p className="text-sm text-gray-500 mt-1"><a href="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</a></p>
        </div>
      </Card>
    </div>
  );
}
