// components/ResponsiveSidebar.tsx
"use client";
import React, { useState } from "react";

const ResponsiveSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="bg-pink-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Responsive App</h1>
        {/* Toggle button for mobile screens */}
        <button
          className="md:hidden p-2 bg-gray-700 text-white rounded focus:outline-none"
          onClick={toggleSidebar}
        >
          {isOpen ? "Close" : "Open"}
        </button>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full bg-gray-800 p-5 pt-16 transition-transform duration-300 ease-in-out z-20 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:relative md:translate-x-0 w-64`}
        >
          <h2 className="text-white text-xl font-bold">Sidebar Menu</h2>
          <ul className="mt-5 space-y-4">
            <li className="text-gray-300 hover:text-white">Home</li>
            <li className="text-gray-300 hover:text-white">About</li>
            <li className="text-gray-300 hover:text-white">Services</li>
            <li className="text-gray-300 hover:text-white">Contact</li>
          </ul>
        </div>

        {/* Main content */}
        <div className="flex-1 p-8">
          <h1 className="text-2xl font-bold">Main Content</h1>
          <p className="mt-4">
            This is the main content area. Resize the screen to see the
            responsive sidebar. On larger screens, the sidebar is always
            visible, and on smaller screens, it can be toggled with the button.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
