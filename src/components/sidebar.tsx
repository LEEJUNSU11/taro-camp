// src/components/Sidebar.tsx

import Link from 'next/link';
import {FaBook, FaChartLine, FaHome} from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-md p-10">
      <h2 className="text-2xl font-bold mb-8">My Diary</h2>
      <nav className="flex flex-col space-y-4">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 transition-colors">
            <FaHome />
            <span>Home</span>
          </div>
        </Link>
        <Link href="/diary">
          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 transition-colors">
            <FaBook />
            <span>Diary</span>
          </div>
        </Link>
        <Link href="/marketing">
          <div className="flex items-center space-x-2 cursor-pointer hover:text-blue-600 transition-colors">
            <FaChartLine />
            <span>Marketing</span>
          </div>
        </Link>
      </nav>
    </div>
  );
}
