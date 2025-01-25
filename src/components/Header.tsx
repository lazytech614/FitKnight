// components/Header.tsx

import { FC } from 'react';
import Link from 'next/link'; // Assuming you're using React Router for navigation

const Header: FC = () => {
  return (
    <header className="bg-white shadow-md h-16 px-6 fixed top-0 w-full">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-full">
        <div className="text-2xl font-bold text-green-500">
          <Link href="/">FitKnight</Link> {/* Replace with your app name */}
        </div>
        <nav className="space-x-6">
          <Link href="/" className="text-lg text-gray-700 hover:text-green-500">Home</Link>
          <Link href="/about" className="text-lg text-gray-700 hover:text-green-500">About</Link>
          <Link href="/features" className="text-lg text-gray-700 hover:text-green-500">Features</Link>
          <Link href="/contact" className="text-lg text-gray-700 hover:text-green-500">Contact</Link>
          <Link href="/login" className="text-lg text-gray-700 hover:text-green-500">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
