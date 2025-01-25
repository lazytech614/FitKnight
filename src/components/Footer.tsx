// components/Footer.tsx

import { FC } from 'react';
import Link from 'next/link';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-6">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} FitApp. All Rights Reserved.
        </div>
        <div className="flex space-x-6">
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            Twitter
          </Link>
          <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            Facebook
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            Instagram
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            LinkedIn
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
