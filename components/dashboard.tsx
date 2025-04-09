import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // optional icons

interface DashboardDropdownProps {
  title: string;
  items: { label: string; href: string }[];
}

const Dashboard = ({ title, items }: DashboardDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={()=> setIsOpen((prev) => !prev)}
        className="flex items-center justify-between w-full p-3 text-left hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <span className="font-semibold">{title}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>

      {isOpen && (
        <div className="mt-2 space-y-2 pl-4">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-sm text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
