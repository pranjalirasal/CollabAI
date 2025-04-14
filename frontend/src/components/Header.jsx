import React, { useState, useRef, useEffect } from "react";
import { LuBrain } from "react-icons/lu";
const Header = ({ userName = "John", onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const initial = userName?.charAt(0).toUpperCase();

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex justify-center items-center gap-2">
      <p><LuBrain className="h-8 w-8 text-blue-500" /></p>
      <h1 className="text-xl font-bold text-blue-500">CollabAI</h1>
      </div>

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center"
        >
          {initial}
        </button>

        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-lg z-50">
            <button
              className="block w-full px-4 py-2 text-left text-sm text-red-500 hover:bg-gray-100"
              onClick={onLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
