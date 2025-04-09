import { notFound } from 'next/navigation';
import React from 'react'

interface DashboardPageProps {
    params: {
        dashboardName: string;
    }
}

const DashboardPage = ({params}: DashboardPageProps) => {
    const {dashboardName} = params
    const validProjects = ["analytics", "charts", "graphs"];

    if (!validProjects.includes(dashboardName)) {
      notFound();
    }
  
  return (
    <div>Welcome to {dashboardName}</div>
  )
}

export default DashboardPage