"use client";

import React from "react";
import Dashboard from "./dashboard";

const Sidebar = () => {
  return (
    <div className="w-1/6 bg-blue-500 h-screen">
      <a
        href="/"
        className="flex items-center justify-between w-full p-3 text-left"
      >
        Home
      </a>
      <Dashboard
        title="Dashboard"
        items={[
          { label: "Analytics", href: "/dashboard/analytics" },
          { label: "Charts", href: "/dashboard/charts" },
          { label: "Graphs", href: "/dashboard/graphs" },
        ]}
      />
      <Dashboard
        title="Groups"
        items={[
          { label: "Kids", href: "/groups/kids" },
          { label: "Under 13", href: "/groups/u13" },
          { label: "Under 19", href: "/groups/u19" },
        ]}
      />
    </div>
  );
};

export default Sidebar;
